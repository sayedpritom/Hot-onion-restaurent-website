import React, { useContext, useEffect, useState } from 'react';
import './ItemDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import fakeData from '../../FakeData/fakeData';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { cartContext } from '../../App';


const ItemDetails = (props) => {

    const [cartItem, setCartItem] = useContext(cartContext)

    const setClick = props.setClick;

    const [id, setId] = useState(props.id);
    const [count, setCount] = useState(1)
    const [currentItem, setCurrentItem] = useState(fakeData.find(data => data.id === id))

    const { name, price, image, category } = currentItem;

    useEffect(() => {
        setCurrentItem(fakeData.find(data => data.id === id))
    }, [id])


    const next = fakeData.filter(data => data.category === category)

    const [num, setNum] = useState(0)

    const handleCart = () => {
        let newCart;
        if (cartItem.length > 0 && cartItem.find(item => item.id === id)) {
            const current = cartItem.find(item => item.id === id);
            const rest = cartItem.filter(item => item.id !== id);
            newCart = [...rest, { ...current, quantity: count }]
        } else {
            newCart = [...cartItem, { "id": id, "quantity": count }]
        }
        return newCart
    }

    return (
        <div className="itemDetailsContainer">
            <div className="itemDetailsSubContainer">
                <h1>{name}</h1>
                <p className="itemFullDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facilis sapiente adipisci accusamus necessitatibus rem. Sequi molestias saepe expedita voluptas?</p>
                <div className="counterAddToCartContainer">
                    <div className="priceAndCounter">
                        <h2>${price * count}</h2>
                        <div className="itemDetailsCounter">
                            <button onClick={() => setCount(count - 1)}><p>-</p></button>
                            <p>{count}</p>
                            <button onClick={() => setCount(count + 1)}><p>+</p></button>
                        </div>
                    </div>
                    <button onClick={() => setCartItem( () => handleCart())} className="addToCartBtn"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
                    <h3>{console.log(cartItem)}</h3>
                </div>
                <div className="moreItemsContainer">
                    <img onClick={() => { setId(num + 1) }} src={next[num].image} alt="" />
                    <img onClick={() => { setId(num + 2) }} src={next[num + 1].image} alt="" />
                    <button onClick={() => setNum(num > 2 ? 0 : num + 1)}><h3><FontAwesomeIcon icon={faAngleRight} /> </h3></button>
                </div>
            </div>
            <div className="itemDetailsSubContainer">
                <button className="ItemDetailsCloseBtn" onClick={() => setClick('close')}><FontAwesomeIcon icon={faTimes} /></button>
                <img className="itemDetailsMainImage" src={image} alt="" />
            </div>
        </div>
    );
};

export default ItemDetails;
import React, { useContext, useEffect, useState } from 'react';
import './FoodItems.css';
import fakeData from '../../FakeData/fakeData';
import Food from '../Food/Food';
import ItemDetails from '../ItemDetails/ItemDetails';
import { cartContext } from '../../App';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const FoodItems = () => {
    const [cartItem, setCartItem] = useContext(cartContext);


    const [items, setItems] = useState([]);
    const [defaultLunchButtonClass, setDefaultLunchButtonClass] = useState('defaultLunchButton');
    const [click, setClick] = useState('close');
    const [id, setId] = useState();

    useEffect(() => {
        const initialItems = fakeData.slice(0, 6)
        setItems(initialItems)
    }, [0])

    const filterItems = category => {
        setItems(fakeData.filter(item => item.category === category))
        setDefaultLunchButtonClass('')

    }

    let checkoutYourFoodStyle;
    [...cartItem].length > 0 ? checkoutYourFoodStyle = { 'backgroundColor': "#f91944" } : checkoutYourFoodStyle = { 'backgroundColor': "lightGray" };

    let checkoutPath = [...cartItem].length > 0 ? '/placeOrder' : '/';
 
    return (
        <div >
            <div className="foodItems">
                <div className="categoryButtons">
                    <button onClick={() => filterItems('breakfast')}>Breakfast</button>
                    <button className={defaultLunchButtonClass} onClick={() => filterItems('lunch')}>Lunch</button>
                    <button onClick={() => filterItems('dinner')}>Dinner</button>
                </div>
            </div>
            <div className="foodItemContainer">
                {click === 'show' && <ItemDetails setClick={setClick} click={click} id={id} ></ItemDetails>}
                {items.map(item => <Food setClick={setClick} setId={setId} item={item} ></Food>)}
            </div>
            <Link to={checkoutPath} onClick={() => [...cartItem].length <= 0 && alert('Your cart is empty')}><button style={checkoutYourFoodStyle} className="checkoutYourFood">Checkout Your Food</button></Link>
        </div>
    );
};

export default FoodItems;
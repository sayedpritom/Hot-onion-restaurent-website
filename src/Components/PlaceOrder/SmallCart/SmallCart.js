import React, { createContext } from 'react';
import { useContext } from 'react';
import './SmallCart.css'
import { cartContext } from '../../../App';
import { useState } from 'react';

const SmallCart = (props) => {
    const [cartItem, setCartItem] = useContext(cartContext)
    const { name, price, quantity, image, id } = props.item;
    const [quantityNum, setQuantityNum] = useState(quantity);
    return (
        <>
            <div className="smallCart">
                <div className="smallCartImage">
                    <img src={image} alt="" />
                </div>
                <div>
                    <p>{name}</p> 
                    <p>${price}</p>
                    <small>Delivery Free</small>
                </div>
                <div>
                    <button onClick={() => setQuantityNum(quantityNum-1)}>-</button>
                    <input value={quantityNum}></input>
                    <button onClick={() => setQuantityNum(quantityNum+1)}>+</button>
                </div>
            </div>
        </>
    );
};

export default SmallCart;
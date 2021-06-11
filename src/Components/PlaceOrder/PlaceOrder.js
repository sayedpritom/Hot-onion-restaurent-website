import React, { useContext, useEffect, useState } from 'react';
import logo from '../../Images/logo2.png';
import './PlaceOrder.css';
import firebase from "firebase/app";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { cartContext } from '../../App';
import fakeData from '../../FakeData/fakeData';
import SmallCart from './SmallCart/SmallCart';

const PlaceOrder = () => {

    const [cartItem, setCartItem] = useContext(cartContext);
    const [item, setItem] = useState([]);

    useEffect(() => {
        if (cartItem.length > 0) {
            setItem(cartItem.map(cItem => {
                let fakeDataItem = fakeData.find(item => item.id === cItem.id)
                return ({ ...fakeDataItem, quantity: cItem.quantity })
            }))
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="placeOrder">
            <div className="signupFormLogo">
                <Link to='/home'><img src={logo} alt="" /></Link>
            </div>
            <div>
                <div className="placeOrderBody">
                    <div className="deliveryDetails">
                        <p>Edit Delivery Details</p>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="" id="" placeholder="Deliver to" /> <br />
                            <input type="text" name="" id="" placeholder="Road No" /><br />
                            <input type="text" name="" id="" placeholder="Flat, suite or floor" /><br />
                            <input type="text" name="" id="" placeholder="Business Name" /><br />
                            <input type="text" name="" id="" placeholder="Add Delivery Instructor" /><br />
                            <input type="submit" name="" id="" value="Save info" />
                        </form>
                    </div>
                    {
                        item.length > 0 &&
                        <div className="">
                            <p>From <b>Gulshan Plaza Restaurant GPR</b> </p>
                            <p>Arriving in 30-45 minutes</p>
                            {
                                item.map(item => <SmallCart item={item}></SmallCart>)
                            }
                            <Link to ="OrderPlaced"><button className="placeOrderBtn">Place Order</button></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
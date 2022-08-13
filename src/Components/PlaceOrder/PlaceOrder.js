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
    const [formFilled, setFormFilled] = useState(false)

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
        setFormFilled(true)
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
                            <input type="text" name="" required id="" placeholder="Deliver to" /> <br />
                            <input type="text" name="" required id="" placeholder="Road No" /><br />
                            <input type="text" name="" required id="" placeholder="Flat, suite or floor" /><br />
                            <input type="text" name="" required id="" placeholder="Business Name" /><br />
                            <input type="text" name="" required id="" placeholder="Add Delivery Instructor" /><br />
                            <input type="submit" name="" required id="" value="Save info" />
                        </form>
                        {!formFilled && <p style={{"border": "none", "fontSize": "16px"}}>Please fill the form to place the order</p>}
                    </div>
                    {
                        item.length > 0 &&
                        <div className="">
                            <p>From <b>Gulshan Plaza Restaurant GPR</b> </p>
                            <p>Arriving in 30-45 minutes</p>
                            {
                                item.map(item => <SmallCart item={item}></SmallCart>)
                            }
                            {
                                formFilled ? <Link to="OrderPlaced"><button className="placeOrderBtn">Place Order</button></Link>
                                    :
                                    <Link to="OrderPlaced"><button disabled className="placeOrderBtn" style={{ "backgroundColor": "gray" }}>Place Order</button></Link>
                            }
                        {formFilled && <p style={{"border": "none", "fontSize": "16px", "marginTop": "10px"}}>You can place the order now</p>}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
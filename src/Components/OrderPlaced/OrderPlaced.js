import React from 'react';
import { Link } from 'react-router-dom';
import './OrderPlaced.css'
import logo from '../../Images/logo2.png'

const OrderPlaced = () => {
    return (
        <>
            <div className="signupFormLogo">
                <Link to='/home'><img src={logo} alt="" /></Link>
            </div>
            <div className="OrderPlaced">
                <iframe src="https://giphy.com/embed/cmCHuk53AiTmOwBXlw" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bike-delivery-motorbike-cmCHuk53AiTmOwBXlw">via GIPHY</a></p>
            </div>
        </>
    );
};

export default OrderPlaced;
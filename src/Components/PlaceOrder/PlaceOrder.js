import React from 'react';
import firebase from "firebase/app";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const PlaceOrder = () => {
    return (
        <div>
            <Link to="/home">
                <h1>{'firebase.auth().currentUser.displayName'}</h1>
            </Link>
        </div>
    );
};

export default PlaceOrder;
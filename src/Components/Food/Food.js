import React from 'react';
import './Food.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Food = (props) => {

    const { name, id, image, description, price, category, } = props.item;
    const setClick = props.setClick;
    const setId = props.setId;

    return (
        <div onClick={() => {
            setClick('show'); 
            setId(id);
        }} className="foodCard">
            <div className="foodCardImage">
                <img className="foodCardImage " src={image} alt="" />
            </div>
            <h5>{name}</h5>
            <p>{description}</p>
            <h3>${price}</h3>
        </div>
    );
};

export default Food;
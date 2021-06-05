import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="coverImageContainer">
            <div className="coverImageBody">
                <h1 className="coverImageText">Best food waiting for your belly</h1>
                <div className="search">
                    <input type="search" name="" id="" placeholder="Search food items" className="header-search-box" />
                    <button className="header-search-button">Search</button>
                </div>
            </div>
        </div>

    );
};

export default Header;
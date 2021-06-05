import React, { Component, useContext, useEffect, useState } from 'react';
import './HeaderNavbar.css'
import logo from '../../Images/logo2.png';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import firebase from "firebase/app";



const HeaderNavbar = () => {

    const [loggedInUser, setLoggedInUser] = useState('');

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                setLoggedInUser(user)
                console.log(user)
            } else {
                setLoggedInUser(null)
            }
          });
    })

    return (
        <div>
            <Navbar className="header" bg="white" expand="lg">
                <Navbar.Brand href="#home">
                    <Link to='/home'><img src={logo} className="logo" alt="" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="ml-auto header-items" id="header-items">
                        <button ><FontAwesomeIcon icon={faShoppingCart} /></button>
                        {
                            loggedInUser !== '' ?
                                <button style={{ "color": "#f91944" }} className="login-btn"><Link to="/signup">{loggedInUser.email}</Link></button>
                                : <>
                                    <button className="login-btn"><Link to="/login">Log in</Link></button>
                                    <button className="signup-btn"><Link to="/signup">Sign up</Link></button>
                                </>
                        }
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;
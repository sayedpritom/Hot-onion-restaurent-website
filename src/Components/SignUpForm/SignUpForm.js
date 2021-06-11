import React, { useContext, useEffect, useState } from 'react';
import './SignUpForm.css'
import logo from '../../Images/logo2.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

firebase.initializeApp(firebaseConfig);

const SignUpForm = () => {    
    const [newUser, setNewUser] = useState(true);
    const [responseMessage, setResponseMessage] = useState('');
    const [user, setUser] = useState({
        name: '',
        email: '',
        photo: '',
    })

    const handleBlur = e => {
        let isFormValid = true;

        if (e.target.name === "email") {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
            isFormValid ? setResponseMessage('') : setResponseMessage('Email is not valid');
        } else if (e.target.name === "password") {
            isFormValid = e.target.value.length > 6 && /\d{1}/.test(e.target.value);
            isFormValid ? setResponseMessage('') : setResponseMessage('Password needs to have at least 6 characters including a number');
        } else if (e.target.name === "confirmPassword") {
            isFormValid = document.getElementById("firstPassword").value === e.target.value;
            isFormValid ? setResponseMessage('') : setResponseMessage('Password did not match!');
        }
        if (isFormValid) {
            const newUserInfo = { ...user, }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }

    const handleSubmit = (e) => {
        if (newUser) {
            if (user.email && user.password && user.name) {
                firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                    .then(userCredential => {
                        updateUserName(user.name)
                        setResponseMessage(`Hi ${user.name}, Signing up is successful`);
                    }).catch(err => {
                        setResponseMessage(err.message);
                    })
            }
        } else if (!newUser) {
            if (user.email && user.password) {
                firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                    .then(userCredential => {
                        setUser(
                            {
                                ...user,
                                email: userCredential.email,
                                name: firebase.auth().currentUser.displayName,
                            }
                        )
                        setResponseMessage(`Hi ${firebase.auth().currentUser.displayName}, Signing in is successful`);
                    }).catch(err => {
                        setResponseMessage(err.message);
                    })
            }
        }
        e.preventDefault();
    }


    console.log(user.name);

    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="SignUpForm">

            <div className="signupFormLogo">
                <Link to='/home'><img src={logo} alt="" /></Link>
            </div>

            <div className="signUp formContainer">
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleBlur} required type="text" name="name" placeholder="Name" /> <br />
                    <input onBlur={handleBlur} type="email" name="email" placeholder="Email" id="" /> <br />
                    <input onBlur={handleBlur} type="password" id="firstPassword" placeholder="Password" name="password" /> <br />
                    <input onBlur={handleBlur} type="password" placeholder="Confirm Password" name="confirmPassword" id="" /> <br />
                    <input className="submitBtn" type="submit" value="Sign up" />
                    <p className="errorMessage">{responseMessage}</p>
                    <Link to="/login"><p>Already have an account?</p></Link>
                </form>
            </div>
        </div >
    );
};

export default SignUpForm;
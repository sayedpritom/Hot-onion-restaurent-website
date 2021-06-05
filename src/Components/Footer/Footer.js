import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../../Images/logo.png';
const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <div className="footerTop">
                    <div>
                        <div className="footerLogo"><img src={logo} alt="" /></div>
                    </div>
                    <ul>
                        <li><Link to="">About Online Food</Link></li>
                        <li><Link to="">Read Our Blog</Link></li>
                        <li><Link to="">Sing up to Deliver</Link></li>
                        <li><Link to="">Add Your Restaurant</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="">Get Help</Link></li>
                        <li><Link to="">Read FAQs</Link></li>
                        <li><Link to="">View All Your Cites</Link></li>
                        <li><Link to="">Restaurants Near Me</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className="footerBottom">
                        <li className="copyRight">Copyright © 2021 online food</li>
                        <li><Link to="">Privacy Policy</Link></li>
                        <li><Link to="">Terms of use</Link></li>
                        <li><Link to="">Pricing</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
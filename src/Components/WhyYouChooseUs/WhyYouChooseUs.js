import React from 'react';
import './WhyYouChooseUs.css'
import image1 from '../../Images/Image/adult-blur-blurred-background-687824.png';
import image2 from '../../Images/Image/chef-cook-food-33614.png';
import image3 from '../../Images/Image/architecture-building-city-2047397.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const WhyYouChooseUs = () => {
    return (
        <div className="whyChooseUs">
            <div className="whyChooseUsHeader">
                <h3>Why You Choose Us</h3>
                <p>Consectetur adipisicing elit. Impedit tempora veritatis asperiores dolores vitae, quod non voluptate vel obcaecati aspernatur molestias deserunt similique officiis!</p>
            </div>
            <div className="whyChooseUsCardContainer">
                <div className="whyChooseUsCards">
                    <div ><img className="whyChooseUsCardImage" src={image1} alt="" /></div>
                    <div>
                        <p className="pinkIcon"><FontAwesomeIcon icon={faBusAlt} /></p>
                        <div className="whyChooseUsCardTitleDescription">
                            <h5>Fast Delivery</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quam? Doloremque, commodi saepe! Blanditiis enim.</p>
                            <Link className="seeMore" to=""><span>See More</span><span className="seeMoreArrow" ><FontAwesomeIcon icon={faArrowRight} /></span></Link>
                        </div>
                    </div>
                </div>
                <div className="whyChooseUsCards">
                    <div ><img className="whyChooseUsCardImage" src={image2} alt="" /></div>
                    <div>
                        <p className="pinkIcon"><FontAwesomeIcon icon={faBell} /></p>
                        <div className="whyChooseUsCardTitleDescription">
                            <h5>A Good Auto Responer</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quam? Doloremque, commodi saepe! Blanditiis enim.</p>
                            <Link className="seeMore" to=""><span>See More</span><span className="seeMoreArrow" ><FontAwesomeIcon icon={faArrowRight} /></span></Link>
                        </div>
                    </div>
                </div>
                <div className="whyChooseUsCards">
                    <div ><img className="whyChooseUsCardImage" src={image3} alt="" /></div>
                    <div>
                        <p className="pinkIcon"><FontAwesomeIcon icon={faTruck} /></p>
                        <div className="whyChooseUsCardTitleDescription">
                            <h5>Home Delivery</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quam? Doloremque, commodi saepe! Blanditiis enim.</p>
                            <Link className="seeMore" to=""><span>See More</span><span className="seeMoreArrow" ><FontAwesomeIcon icon={faArrowRight} /></span></Link>
                        </div>
                    </div>
                </div></div>
        </div>
    );
};

export default WhyYouChooseUs;
import React from 'react'
import Banner from '../../components/Banner';

import Img1 from '../../assets/img/camera-overla.png'
import './style.css';

const About = () => {
  return (
    <>
      <Banner text="About Us" />
      <div className="About container">
        <div className="py-4">
          <h1 className="about-title">Who We Are</h1>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <img className="img-fluid" src={Img1} alt="We are MovOn"/>
          </div>
          <div className="col-md-6 p-4 order-md-1">
            <p>MovOn is the first mobile app in the Philippines that provides the easiest and smartest way to book online bus tickets with guaranteed seats.</p> 
            <p>You can search for your destination and choose from a wide choice of bus services based on your preferred bus operator, departure times, prices, bus types, pickup & drop off points. Choose seats & pay securely using credit card, debit card and through thousands of over-the-counter payment centres across the Philippines.</p>
            <p>Book your online bus tickets now! Anytime and Anywhere through the MovOn app.</p>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default About

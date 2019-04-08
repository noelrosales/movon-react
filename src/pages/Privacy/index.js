import React from 'react';
import PrivacyData from '../../data/privacy';
import parse from 'html-react-parser';
import Banner from '../../components/Banner';

import Background from '../../assets/img/map-overlay.png';

import './style.css'
const Privacy = (props) => {
  return (
    <div className="Privacy">
      <Banner background={Background} text="Our Privacy" />
      <div className="container">
        {parse(PrivacyData)}
      </div>
    </div>
  )
}

export default Privacy

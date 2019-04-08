import React from 'react'
import TermsData from '../../data/toc';
import parse from 'html-react-parser';
import Banner from '../../components/Banner';

import './style.css'
const Terms = () => {
  return (
    <>
      <Banner text="Our Terms and Conditions"/>
      <div className="Terms container">
        {parse(TermsData)}
      </div>
    </>
  )
}

export default Terms

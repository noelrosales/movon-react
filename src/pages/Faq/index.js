import React from 'react';
import FAQs from '../../data/faq';
import Banner from '../../components/Banner';

import './style.css'
const Faq = () => {
  return (
    <>
      <Banner text="Frequently Asked Questions"/>
      <div className="Faqs container">
        <h2>Frequently Asked Questions</h2>
        {
          FAQs.map((faq,i) => {
            return <div className="card mb-4" key={i}>
                    <div className="card-header">{faq.body}</div>
                    <div className="card-body">{faq.answer}</div>
                  </div>
          })
        }
      </div>
    </>
  )
}

export default Faq

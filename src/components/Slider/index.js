import React from 'react'
import './style.css';
import iPhoneX from '../../assets/img/iphonex.png';

const Slider = () => {

  return (
    <div className="Slider justify-contents-center">
        <div className="container">
          <div className="slides row">
            <div className="image-slider col-md-6 d-flex align-items-center justify-content-center">
                <img src={iPhoneX} alt="MovOn on IOS / Android"/>
            </div>

            <div className="feature-slider col-md-6 d-flex align-items-center justify-content-center">
                  <h1 className="slide slide-1" >Get Tickets, <br/>skip the Lines<br/><span style={{fontSize: '.5em'}}>Book your tickets, fast and easy.</span></h1>
                  <h1 className="slide slide-2">Guaranteed Seats<br/><span style={{fontSize: '.5em'}}>Reserve a seat of your choice.</span></h1>
                  <h1 className="slide slide-3">E-Ticket with QR Code<br/><span style={{fontSize: '.5em'}}>Convenience of having your e-tickets in your phone.</span></h1>
                  <h1 className="slide slide-4">Track your Bus<br/><span style={{fontSize: '.5em'}}>Live tracking of your journey.</span></h1>
                  <h1 className="slide slide-5">Organize your Travel<br/><span style={{fontSize: '.5em'}}>View your past and upcoming tickets.</span></h1>         
            </div>
          </div>
      </div>
    </div>
  )
}

export default Slider

import React from 'react';
import {Link} from 'react-router-dom'
import './style.css';

const Routes = () => {
  return (
    <div className="Routes container">
      <div className="row p-lg-5 map-container" style={{minHeight: '90vh'}}>
        <div className="col-md-5 d-flex align-items-center map-left">
          <div className="col">
            <h1>Our Routes and Destinations</h1>
            <h4 style={{color: 'teal'}}>
              <Link to='/destinations'>Learn More</Link>
            </h4>
          </div>
        </div>
        <div className="col-md-7 map-right map">
        </div>
      </div>
    </div>
  )
}

export default Routes

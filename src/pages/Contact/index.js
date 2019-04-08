import React from 'react'
import Banner from '../../components/Banner';

import './style.css'

const Contact = () => {
  return (
    <>
      <Banner text="Contact Us" />
      <div className="container-fluid contact-header">
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-4">
              <h1><i className="fas fa-map-marker-alt"></i></h1>
              <h5>ADDRESS</h5>
              <p>Dolmar Gold Tower Bldg, 107 Don Carlos Palanca,Legazpi Village, Makati, 1229 Metro Manila</p>
            </div>

            <div className="col-md-4 p-4">
              <h1><i className="fas fa-phone"></i></h1>
              <h5>PHONE</h5>
              <p>(02) 840 2643<br/>(02) 659 678</p>
            </div>

            <div className="col-md-4 p-4">
              <h1><i className="fas fa-envelope-open-text"></i></h1>
              <h5>EMAIL</h5>
              <p>support@movon.ph</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <h1>Message Us</h1>
              <p>We're here to help and answer any question you might have. We look forward to heariig from you.</p>
              <div className="card card-body bg-light">
                <form>
                  <div className="row">
                      <div className="col-md-4">
                          <div className="form-group">
                              <label htmlFor="name">
                                  Name</label>
                              <input type="text" className="form-control" id="name" placeholder="Enter name" required="required" />
                          </div>
                          <div className="form-group">
                              <label htmlFor="email">
                                  Email Address</label>
                              <div className="input-group">
                                  <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span>
                                  </span>
                                  <input type="email" className="form-control" id="email" placeholder="Enter email" required="required" /></div>
                          </div>
                          <div className="form-group">
                              <label htmlFor="subject">
                                  Subject</label>
                              <select id="subject" name="subject" defaultValue={'na'} className="form-control" required="required">
                                  <option value="na">Choose One:</option>
                                  <option value="service">General Customer Service</option>
                                  <option value="suggestions">Suggestions</option>
                                  <option value="product">Product Support</option>
                              </select>
                          </div>
                      </div>
                      <div className="col-md-8">
                          <div className="form-group">
                              <label htmlFor="name">
                                  Message</label>
                              <textarea name="message" id="message" className="form-control" rows="9" cols="25" required="required"
                                  placeholder="Message"></textarea>
                          </div>
                      </div>
                      
                      <div className="ml-auto col-lg-2">
                          <button style={{background: 'teal', border: '0px'}} type="submit" className="btn btn-primary pull-right" id="btnContactUs">Send Message</button>
                      </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid" style={{padding: '0px'}}>
        <iframe title="MovOn : Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.763226405641!2d121.01686831418469!3d14.55552818208346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90e53116733%3A0x58015ac1aa981045!2sDolmar+Gold+Tower!5e0!3m2!1sen!2sph!4v1554192719070!5m2!1sen!2sph" width="100%" height="440" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
      </div>
    </>
  )
}

export default Contact

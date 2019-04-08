import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer-1">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h4>MovOn</h4>
              </div>

              <div className="col-md-3">
                <h4>Site Map</h4>
                <nav>
                  <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/terms'>Terms and Conditions</Link></li>
                    <li><Link to='/privacy'>Privacy Policy</Link></li>
                    <li><Link to='/faqs'>FAQ's</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                  </ul>
                </nav>
              </div>

              <div className="col-md-3">
                <h4>Follow Us</h4>
                <nav>
                  <ul>
                    <li><a href='https://www.facebook.com/movonphilippines/' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook-square"></i> Facebook</a></li>
                    <li><a href='https://www.twitter.com/' target='_blank' rel="noopener noreferrer"><i className="fab fa-twitter-square"></i> Twitter</a></li>
                    <li><a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
                    <li><a href='https://www.youtube.com/channel/UCsba_6AmduCrz8mLB_S6-jg' target='_blank' rel="noopener noreferrer"><i className="fab fa-youtube"></i> Youtube</a></li>
                  </ul>
                </nav>
              </div>

              <div className="col-md-3">
                <h4>Download</h4>
                <ul className="navbar-nav ml-md-auto">
                    <li className="nav-item nav-link">
                        <a 
                            href="https://itunes.apple.com/us/app/movon-transport-logistics/id1446721175?mt=8"
                            style={{display: 'block'}}>
                            <img alt='Download MovOn on the App Store' 
                                src='https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-02-22&kind=iossoftware&bubble=ios_apps'
                                style={{
                                    padding: '12px 10px',
                                    width: '50%'
                                }}/>
                        </a>
                    </li>
                    <li className="nav-item nav-link">
                        <a 
                            href='https://play.google.com/store/apps/details?id=com.icon.movon.passenger&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
                            style={{display: 'block'}}>
                            <img alt='Get MovOn on Google Play' 
                                src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'
                                style={{
                                    width: '47%',
                                    marginLeft: '3px'
                                }}/>
                        </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-2">
          <div>
            <p>© 2019 movon.com.ph | IOT Instant Online Transport</p>
          </div>
        </div>
    </div>
  )
}

export default Footer

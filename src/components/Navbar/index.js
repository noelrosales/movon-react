import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';

import './style.css';

const Navbar = () => {
  const [showMainNav, setShowMainNav] = useState(true);
  
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  function handleScroll () {
    setShowMainNav(window.scrollY >= 124 ? false : true );
  }

  return (
    <div>
        <nav className={showMainNav ? "navbar navbar-expand-lg navbar-dark bg-dark" : "navbar fixed-top navbar-expand-lg navbar-dark mobile-colored"}>
            <div className="container">
                <Link className="navbar-brand py-3" to='/'>
                    <img src={Logo} alt="MovOn : Book Online"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-md-auto">
                        <NavLink className="nav-item nav-link" exact to='/'>Home</NavLink>
                        <NavLink className="nav-item nav-link" to='/about'>About Us</NavLink>
                        <NavLink className="nav-item nav-link" to='/destinations'>Destinations</NavLink>
                        <NavLink className="nav-item nav-link" to='/terms'>Terms and Conditions</NavLink>
                        <NavLink className="nav-item nav-link" to='/privacy'>Privacy Policy</NavLink>
                        <NavLink className="nav-item nav-link" to='/faqs'>FAQ's</NavLink>
                        <NavLink className="nav-item nav-link" to='/contact'>Contact Us</NavLink>
                    </ul>
                </div>

            </div>
        </nav>
        {
            !showMainNav ?
                <nav className="navbar secondary fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link className="navbar-brand py-3" to='/'>
                            <img src={Logo} alt="MovOn : Book Online"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                            <ul className="navbar-nav ml-md-auto">
                                <li className="nav-item nav-link">
                                    <a 
                                        href="https://itunes.apple.com/us/app/movon-transport-logistics/id1446721175?mt=8"
                                        style={{display: 'block'}}>
                                        <img alt='Download MovOn on the App Store' 
                                            src='https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-02-22&kind=iossoftware&bubble=ios_apps'
                                            style={{
                                                padding: '12px 10px',
                                                height: '98%',
                                                width: '96%'
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
                                                height: '60px',
                                                width: '148px'
                                            }}/>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
                : null
        }
    </div>
  )
}

export default Navbar

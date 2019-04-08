import React from 'react'

import Slider from '../../components/Slider';
import Partners from '../../components/Partners';

import Logo from '../../assets/img/logo.png'
import './style.css';
import Routes from '../../components/Routes';

const Home = () => {
  return (
    <React.Fragment>
      <div className="Home container-fluid">
        <div className="content row align-items-center justify-content-center">
          <div className="col">
            <h1>Book your Tickets</h1>
            <h2>Easier. Smarter.</h2>
            <div className="col-md-4 offset-md-4 text-center download-buttons">
              <a 
                href="https://itunes.apple.com/us/app/movon-transport-logistics/id1446721175?mt=8">
                <img alt='Download MovOn on the App Store' 
                    src='https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-02-22&kind=iossoftware&bubble=ios_apps'
                    style={{
                        padding: '12px 10px',
                        height: '108px',
                        width: '188px'
                    }}/>
              </a>
                
              <a 
                href='https://play.google.com/store/apps/details?id=com.icon.movon.passenger&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img alt='Get MovOn on Google Play' 
                    src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'
                    style={{
                        height: '74px',
                        width: '190px'
                    }}/>
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <Slider />  
      <Routes />
      <div className="Section-3 container-fluid">
        <div className="row">
          <div className="right-content col-lg-7 p-0">
            <div className="v-container">
            <iframe title="MovOn: Book online" src="https://www.youtube.com/embed/pZjhSKjOe_Q" frameBorder="0" allowFullScreen="allowfullscreen" className="video"></iframe>
            </div>
          </div>
          <div className="left-content col-lg-5  p-0">
            <div className="image-container text-center">
              <h3>Book tickets and reserve bus seats</h3>
              <h5>in 3 Easy Steps</h5>
            </div>
            <div className="paragraph-container p-4">
              <h3><i className="fas fa-check mr-3"></i> Download <img alt="Download MovOn Bus App" src={Logo} className="ml-2"/></h3>
              <h3><i className="fas fa-check mr-3"></i> Book and Reserve</h3>
              <h3><i className="fas fa-check mr-3"></i> Ride</h3>
            </div>
          </div>
        </div>
      </div>
      <Partners />
    </React.Fragment>
  )
}

export default Home

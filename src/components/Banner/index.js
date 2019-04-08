import React from 'react';
import DefaulBannerImage from '../../assets/img/buses-overlay.jpg';

const Banner = ({background,text}) => {
  const style={
    background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.7)),url(${background || DefaulBannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'rgba(255,255,255, .7)',
    marginBottom: '25px'
  }

  return (
    <div className="Banner container-fluid" style={style}>
      <h1>{text || `This is a sample banner`}</h1>
    </div>
  )
}

export default Banner

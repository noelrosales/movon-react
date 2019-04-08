import React from 'react'

import BicolIsarog from '../../assets/partners/bi.png';
import Cherry from '../../assets/partners/cherry.png';
import PenaFrancia from '../../assets/partners/ft.png';
import Salvacion from '../../assets/partners/olsb.png';
import Pintados from '../../assets/partners/pintados.png';
import Rsl from '../../assets/partners/rsl.png';
import StaLucia from '../../assets/partners/sl.png';
import Emc  from '../../assets/partners/emc.png';

import './style.css';

const Partners = () => {
  return (
    <div className="Partners container py-5">
        <h1 className="section-title text-center mb-lg-5"><span className="title" style={{borderBottom: '3px solid teal', paddingBottom: '5px'}}>Our Partners</span></h1>
        <div className="row align-items-center justify-content-center">
            <div className="col-md-4">
                <img className="img-fluid rsl" src={Rsl} alt="MovOn partner: RSL"/>
            </div>

            <div className="col-md-4">
                <img className="img-fluid logo-small isarog" src={BicolIsarog} alt="MovOn partner: Bicol Isarog"/>
            </div>
            
            <div className="col-md-4">
                <img className="img-fluid" src={StaLucia} alt="MovOn partner: Sta Lucia"/>
            </div>

            <div className="col-md-5">
                <img className="img-fluid logo-small" src={Pintados} alt="MovOn partner: Pintados"/>
            </div>
            
            <div className="col-md-5">
                <img className="img-fluid" src={Emc} alt="MovOn partner: EMC"/>
            </div>
            
            <div className="col-md-4">
                <img className="img-fluid" src={PenaFrancia} alt="MovOn partner: Pena Francia Tours"/>
            </div>

            <div className="col-md-4">
                <img className="img-fluid logo-small salvacion" src={Salvacion} alt="MovOn partner: Salvacion"/>
            </div>
           
            <div className="col-md-4">
                <img className="img-fluid" src={Cherry} alt="MovOn partner: Cherry"/>
            </div>                     
        </div>
    </div>
  )
}

export default Partners

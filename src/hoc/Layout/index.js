import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import './style.css';
const Layout = (props) => {
  return (
    <div className="Layout">
      <Navbar/>
        {props.children}
      <Footer/>
    </div>
  )
}

export default Layout

import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import {BsInstagram  } from 'react-icons/bs';
import {FaFacebookSquare  } from 'react-icons/fa';
import {BsGithub  } from 'react-icons/bs';




const Footer = () => {
  return (
   <div className="footer">
    <img src={wave} alt=""  style={{width:'100%'}}/>
    <div className="f-content">
        <span>navaneethanmani414@gmail.com</span>
        <div className="f-icons">
            <BsInstagram color='white' size='3rem' />
            <FaFacebookSquare color='white' size='3rem'/>
            <BsGithub color='white' size='3rem'/>
        </div>

    </div>
   </div>
  )
}

export default Footer
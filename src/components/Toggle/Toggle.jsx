import React from 'react'
import './Toggle.css'
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const Toggle = () => {
  return (
    <div className="toggle">

          
            <BsFillMoonStarsFill/>
            <BsFillSunFill/>
            <div className="t-button">
                
            </div>
    </div>
  )
}

export default Toggle
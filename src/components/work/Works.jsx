import React from 'react';
import './Works.css';
import upwork from '../../img/Upwork.png';
import fiverr from '../../img/fiverr.png';
import amazon from '../../img/amazon.png';
import facebook from '../../img/Facebook.png';
import shopify from '../../img/Shopify.png';

const Works =() =>{
    return(
       <div className="works">
         <div className="awesome">
        <span> Work for All these</span>
        <span> Brands & Clients  </span>
        <span> some text to write hello every one, good work to impore your self 
             
              <br/> 
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, porro!
              <br/> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br/>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, expedita.
              </span>
        
        <button className="button s-button"> Hire Me</button>
        
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>

        </div>
        {/* right side  */}
        <div className="w-right">

        <div className="w-maincricle">
            
        <div className="w-2cricle">
            <img src={upwork} alt="" />
            </div>

        <div className="w-2cricle">
            <img src={fiverr} alt="" />
        </div>

        <div className="w-2cricle">
            <img src={amazon} alt="" />
        </div>

        <div className="w-2cricle">
            <img src={shopify} alt="" />
        </div>

        <div className="w-2cricle">
            <img src={facebook} alt="" />
        </div>
        
        </div>
        {/* background cricle */}
        <div className="w-backcricle bluecricle"></div>
        <div className="w-backcricle yellowcricle"></div>
        </div>
       </div>
    )
}
export default Works;
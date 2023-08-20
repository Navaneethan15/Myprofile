import React from 'react';
import './Serivces.css';
import heart from '../../img/heartemoji.png';
import Glass from '../../img/glasses.png';
import humble from '../../img/humble.png';
import Card from '../card/Card';
import  color from '../../img/purpleblur.png'


const Serivces =() =>{
    return(
       <div className="serivces">

        {/* left side */} 
        <div className="awesome">
        <span>My Awesome</span>
        <span> Serivces</span>
        <span> some text to write hello every one, good work to impore your self   <br/> some text </span>
        <a >
        <button className="button s-button"> Download cv</button>
        </a>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>

        </div>

        {/* right side */}

        <div className="cards">

        <div style={{left:'14rem'}}>
        <Card
        emoij={heart}
        heading={'Design'}
        detail={"Figma, Sketch, Photoshop, Canvas, Adobe xd"}
        
        />
        </div>
                {/* 2rd card  */}
            
         <div style={{ top:"12rem", left:"-4rem"}}>
        <Card
        emoij={Glass}
        heading={'Developer'}
        detail={"Html, Css, Javascript, React"}
        
        />
        </div>
         
         {/* 3rd card  */}
         <div style={{ top:"19rem", left:"12rem"}}>
        <Card
        emoij={humble}
        heading={'UI/UX'}
        detail={"IAM A GOOD PERSON "}
        
        />
        </div>

        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>



       </div>
    )
}
export default Serivces;
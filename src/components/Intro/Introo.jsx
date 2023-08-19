import React from 'react';
import './Introo.css';
import Git from '../../img/github.png';
import inst from '../../img/instagram.png';
import linkedin from '../../img/linkedin.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import navi1 from '../../img/navi01.jpg'
import navi2 from '../../img/navi02.jpg'
import navi3 from '../../img/navi04.png'
import thumbup  from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import glassesimoji from '../../img/glassesimoji.png';

const Introo =() =>{
    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                   <span>Hy! I am</span>  <span>Navaneethan</span> 
                    <span>
                    Everyday life is like programming, I guess.If you love something you can put beauty on it.
                     DON'T MESS WITH ME I AM A 
                        FULL STACK DEVELOPER</span>
                </div>
                <button className="button i-button"> Hire Me </button>
                <div className="i-icon">
                    <a herf=''>
                    <img src={Git} alt="git" ></img>
                    </a>
                <a>
                <img src={linkedin} ></img>
                </a>
                <a> <img src={inst} ></img>
                </a>
                
                
                </div>
                
            </div>
            <div className="i-right">
            <img src= {vector1}  ></img>
            <img src= {vector2} ></img>
            <img src= {navi3} ></img>
            <img src= {glassesimoji} ></img>
            <div style={{top:'-4%', left: '68%'}}>
                <FloatingDiv image= {crown} txt1='Web' txt2='Developer' />
            </div  > 
            <div style={{top:'18rem', left: '0rem'}}> 
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
            </div>
            <div>
                
            </div>
            <div className="blur" style={{ background:"rgp(238 210 255)"}}>
                 </div>
                 <div className="blur" style={{ background:'#c1F5FF',
                top: '17rem',
                width: '21rem',
                height:'11rem',
                left:'-9rem'
              }}>
                 </div>
            </div>
        </div>
    )
}
export default Introo;
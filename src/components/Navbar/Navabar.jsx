import React from 'react';
import './Navabar.css';
import Toggle from '../Toggle/Toggle';

const Navabar =() =>{
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Navi</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyle:'none'}}>
                        <li>Home</li>
                        <li>Serives</li>
                        <li>Experience</li>
                        <li>Protfolio</li>
                        <li>Testimonial</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact
                </button>
            </div>
        </div>
    )
}
export default Navabar;
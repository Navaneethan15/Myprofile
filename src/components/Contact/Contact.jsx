// import React from 'react'
import './Contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
        
    const [done, setdone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9fx7tcw', 'template_793x38a', form.current, '9GRX-ZM9EvjxWbe-6')
      .then((result) => {
          console.log(result.text);
          setdone(true);
          
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
     <div className="contact-from">

        <div className="w-left">

            <div className="awesome">

                <span>Get in touch</span>

                <span>Contact Me</span>

                <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>

            </div>
            
        </div>

        <div className="c-right">

            <form ref={form} onSubmit={sendEmail}>

                <input autoComplete="off"  type='text' name='user_name' className='user' placeholder='Name'></input>

                <input  autoComplete="off" type='email' name='user_email' className='user' placeholder='Email'></input>

                <input autoComplete="off"  type='messag' className='user' name='user_message' placeholder='massage' ></input>

                <input  type='submit' value='send' className='button'/>

                <span>{done && "thanks for contacting me!"}</span>

                <div className="blur c-blur1" style={{background: "var(--purple)"}}> </div>

            </form>

        </div>

     </div>


  )
}

export default Contact;
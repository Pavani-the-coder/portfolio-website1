import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser'
import {AiOutlineInstagram} from 'react-icons/ai'
const Contact = () => {
  
  return (
    <section id="contact">
      <h5>Get in touch</h5>  
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
          <AiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>pavanid2003@gmail.com</h5>
              <a href="">Send an Email</a>
          </article>

          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>7801048472</h5>
              <a href="">Send WhatsApp Message</a>
          </article>

          <article className="contact__option">
          <AiOutlineInstagram className='contact__option-icon'/>
              <h4>DM me at</h4>
              <h5>Pavani_1119</h5>
              <a href="">Send Instagram Message</a>
          </article>

        </div>

        <form >
          <input type="text" name='name' placeholder='FULLNAME' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message"  cols="30" rows="10" required placeholder='Enter Your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}
  


export default Contact
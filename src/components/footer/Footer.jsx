import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='#'>Pavani Darisi</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="footer__social">
        <a href="https://instagram.com"><AiOutlineInstagram/></a>
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
        <a href="https://github.com"><AiFillGithub/></a>

      </div>
      <div className="footer__copyright">
        <small>&copy; PAVANI DARISI. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
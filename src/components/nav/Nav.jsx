import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {AiOutlineUserSwitch} from 'react-icons/ai'
import {BsFillBookmarkHeartFill} from 'react-icons/bs'
import {MdHomeRepairService} from 'react-icons/md'
import {MdPermContactCalendar} from 'react-icons/md'
import { useState } from 'react'



const Nav = () => {

  /*Usestate hooks*/
  const [activeNav, setActiveNav]=useState('#')
  return (
        <nav>
          <a href="#" onClick={()=> setActiveNav('#')} className={activeNav==='#' ? 'active': ''}><GoHome /></a>
          <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ? 'active': ''}><AiOutlineUserSwitch /></a>
          <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ? 'active': ''}><BsFillBookmarkHeartFill /></a>
          <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active': ''}><MdHomeRepairService /></a>
          <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active': ''}><MdPermContactCalendar /></a>

        </nav> 
 )
}

export default Nav
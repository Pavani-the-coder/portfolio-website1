import React from 'react'
import './header.css'
import CV from './CV'
import ME from '../../Assets/image.png'
import HeaderSocial from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="contains">
        <h5>HELLO, I'm</h5>
        <h1>PAVANI DARISI</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CV />
        <HeaderSocial />
       
       
        </div>
        
        <a href="#contact" className='scroll__down'>Scroll down</a>

      </div>
    </header>
  )
}

export default Header
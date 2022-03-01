import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <Footer>
      <a href="#" className='footer__logo'></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
    </Footer>
  )
}

export default Footer
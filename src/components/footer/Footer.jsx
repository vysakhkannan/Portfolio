import React from 'react'
import './footer.css'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'




const Footer = () => {
  return (
    <footer>
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

      <div className="footer__socials">
        <a href="https://github.com/vysakhkannan" target="_blank" rel="noreferrer"><AiOutlineGithub/></a>
        <a href="https://twitter.com/njanvysakh" target="_blank" rel="noreferrer"><AiOutlineTwitter/></a>
        <a href="https://www.instagram.com/_l_u_t_t_a_p_p_i_/" target="_blank" rel="noreferrer"><AiOutlineInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Vysakh Kannan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
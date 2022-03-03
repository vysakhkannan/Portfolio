import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vysakh-kannan-194609201https://www.linkedin.com/in/vysakh-kannan-194609201" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/vysakhkannan" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://www.instagram.com/_l_u_t_t_a_p_p_i_/" target="_blank" rel="noreferrer"><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocials
import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5> 
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Web development is the work involved in developing a website for the Internet or an intranet. it's my passion. </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Clean and elegant frontend development using Reactjs. </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Secured Backend development using Python Django.</p>
            </li>
          </ul>          
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Hosting </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Web hosting services work by maintaining stable and secure storage spaces. </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Experience in Hosting platform like AWS</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Experience in Hosting platform like Heroku </p>
            </li>  
          </ul>          
        </article>
    
      </div>
    </section>
  )
}

export default Services
import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="experience__container container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
               <BsFillPatchCheckFill className='experience_details-icon'/>
               <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className="experience__details">
               <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className="experience__details">
               <BsFillPatchCheckFill className='experience_details-icon'/>
               <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Beginner</small>
               </div>
            </article>
            <article className="experience__details">
               <BsFillPatchCheckFill className='experience_details-icon'/>
               <div>
                  <h4>Boostrap</h4>
                  <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className="experience__details">
               <BsFillPatchCheckFill className='experience_details-icon'/>
               <div>
                  <h4>Reactjs</h4>
                  <small className='text-light'>Beginner</small>
               </div>
            </article>
          </div>

        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
               <BsFillPatchCheckFill className='experience_details-icon'/>
               <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className="experience__details">
               <BsFillPatchCheckFill className='experience_details-icon'/>
               <div>  
                  <h4>Python Django</h4>
                  <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className="experience__details">
               <BsFillPatchCheckFill className='experience_details-icon'/>
               <div>
                  <h4>Django Rest Framework (DRF)</h4>
                  <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className="experience__details">
               <BsFillPatchCheckFill className='experience_details-icon'/>
               <div>
                  <h4>Postgresql</h4>
                  <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className="experience__details">
               <BsFillPatchCheckFill className='experience_details-icon'/>
               <div>
                  <h4>MongoDB</h4>
                <small className='text-light'>Beginner</small>
               </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
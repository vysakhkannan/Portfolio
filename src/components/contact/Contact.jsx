import React, {useState, useEffect} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const initialValues = { name:"", email:"", message:"" }
  const [formValue, setFormValue] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const Form = useRef();

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
  const USER_ID = process.env.REACT_APP_USER_ID

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue))
    setIsSubmit(true)
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
          emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, Form.current, USER_ID)
          .then((result) => {
          console.log(result.text);
          toast.success('The message has been sent successfully.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          setFormValue(initialValues)
      }, (error) => {
          console.log(error.text);
      });
    }
  },[formErrors])

  const validate = (values) => {
    const errors = {}
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!values.name){
      errors.name = "Name is required !"
    }
    if (!values.email){
      errors.email = "Email is required!"
    }else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format"
    }
    if (!values.message){
      errors.message = "Message is required !"
    }
    return errors
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5> 
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>vysakhkannan811@gmail.com</h5>
            <a href="mailto:vysakhkannan811@gmail.com" target='_blank' rel="noreferrer">Send a Email</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Vysakh Kannan</h5>
            <a href="https://m.me/njanshankaran" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 940097****</h5>
            <a href="https://api.whatsapp.com/send?phone=+919400973003" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={Form} onSubmit={handleSubmit}>
          <input type="text" name='name' placeholder='Your Full Name' onChange={handleChange} value={formValue.name}/>
          <p>{ formErrors.name }</p>
          <input type="email" name="email" placeholder='Your Email' onChange={handleChange} value={formValue.email}/>
          <p>{ formErrors.email }</p>
          <textarea name="message" rows="7" placeholder='Your Message' onChange={handleChange} value={formValue.message}></textarea>
          <p>{ formErrors.message }</p>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        <ToastContainer
              toastStyle={{ backgroundColor: '#4db5ff ', color: '#fff'}} 
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
      </div>
    </section>
  )
}

export default Contact



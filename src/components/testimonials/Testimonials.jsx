import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpeg'
import AVTR3 from '../../assets/avatar3.jpeg'
import AVTR4 from '../../assets/avatar4.jpeg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";



const data = [
  {
    id: 4,
    avatar: AVTR4,
    avatarName: 'Malu Thankachan',
    review: '" I want to take the time to look back on a truly awesome student that I had the pleasure of meeting during my time teaching at Nirmala Arts And Science College. He was an advanced level student and love programming language a lot. I really admired him for the active role both in studies and other department activities. He had a goal and he didn’t lose sight of it, not even once. He is just one of the many people who really put their mind to something and make it happen. He was always focused and ready to make his dream come true. Hopefully he will also serve inspiration for those upcoming generation."'
  },
  {
    id: 1,
    avatar: AVTR1,
    avatarName: 'Abin M Anil',
    review: '"Working environment with him feel more confident to solve problems."'
  },
  {
    id: 2,
    avatar: AVTR2,
    avatarName: 'Muhammed Swalih T',
    review: '"I don`t know that he is developer or designer but I`m sure he is perfect in both."'
  },
  {
    id: 3,
    avatar: AVTR3,
    avatarName: 'Renjith R.M',
    review: '"We don`t often see him working but we will get the service at right time"',
  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Collegue</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container mySwiper"  pagination={{
          clickable: true,
        }} modules={[Pagination]} spaceBetween={40} slidesPerView={1}
        >
        {
          data.map(({id, avatar, avatarName, review}) => {
            return(
              <SwiperSlide className="testimonial" key={id} pagination={true} modules={[Pagination]} spaceBetween={40}>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar one" />
                </div>
                <h5 className="client__name">{avatarName}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials
import React from 'react'
import './testimonial.css'
import ME from '../../Assets/me.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimony=[
  {
    id:1,
    image:ME,
    name:'Client1',
    review:"lorem"

  },
  {
    id:2,
    image:ME,
    name:'Client2',
    review:"lorem"

  },
  {
    id:3,
    image:ME,
    name:'Client3',
    review:"lorem"

  }
]

const testimonial = () => {
  return (
    <section className="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      
    >{
        testimony.map(({image,name,review},index)=>{
          return(
            <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={image} alt="avatar one" />
          </div>
          <h5 className="client__name">{name}</h5>
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

export default testimonial
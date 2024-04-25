import React from 'react'
import "../TestimonialCard/Testimonial.css"

const Testimonialcard = ({test_image,test_name,test_des}) => {
  return (
    <div className='Testimonial_cards'>
      <div className='testi_image'>
        <img src={test_image} alt='testimonial' className='testimonialPic'/>
      </div>
      <div className='testimonial_content'>
        <h3>{test_name}</h3>
        <p>{test_des}</p>
      </div>

    </div>
  )
}

export default Testimonialcard
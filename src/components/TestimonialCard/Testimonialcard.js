import React, { useState, useEffect } from 'react'
import '../../components/TestimonialCard/Testimonial.css'

function Testimonialcard({img, message, name}) {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 1800 // Adjust as needed

      // Set visibility based on the scroll position
      setIsVisible(scrollPosition > triggerPosition);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className={`testimonials-card ${isVisible ? 'visible' : ''}`}>
    <img src={img} alt={name} />
    <div className='card-details'>
      <p>{message}</p>
      <p>{name}</p>
    </div>
    </div>
    </>
  )
}

export default Testimonialcard
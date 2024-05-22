import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom-slick.css";
import reviews1 from '../../Assets/1.png'
import reviews2 from '../../Assets/2.png'
import reviews3 from '../../Assets/3.png'
import reviews4 from '../../Assets/4.png'
import reviews5 from '../../Assets/5.png'
import reviews6 from '../../Assets/6.png'

const AutoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // screen width up to 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // screen width up to 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: '80%', margin: '7rem auto' }}>
      <h2 className="mb-5 heading_serv">Google Reviews</h2>
      <Slider {...settings}>
        <div className="w-75">
          <img src={reviews1} alt="reviews 1" style={{ width: "100%", height: "100%", objectFit: "cover", margin: "auto"  }} />
        </div>
        <div className="w-75">
          <img src={reviews2} alt="reviews 2" style={{ width: "100%", height: "100%", objectFit: "cover", margin: "auto"  }} />
        </div>
        <div className="w-75">
          <img src={reviews3} alt="reviews 3" style={{ width: "100%", height: "100%", objectFit: "cover", margin: "auto"  }} />
        </div>
        <div className="w-75">
          <img src={reviews4} alt="reviews 4" style={{ width: "100%", height: "100%", objectFit: "cover", margin: "auto"  }} />
        </div>
        <div className="w-75">
          <img src={reviews5} alt="reviews 5" style={{ width: "100%", height: "100%", objectFit: "cover", margin: "auto"  }} />
        </div>
        <div className="w-75">
          <img src={reviews6} alt="reviews 6" style={{ width: "100%", height: "100%", objectFit: "cover", margin: "auto"  }} />
        </div>
      </Slider>
    </div>
  );
};

export default AutoSlider;
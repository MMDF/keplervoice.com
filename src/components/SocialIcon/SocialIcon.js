import React from 'react'
import "../../pages/Common.css"
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Twitter, WhatsappIcon } from '../Svg/Svg'

const SocialIcon = () => {
  return (
    <div className="socialMedia_portion">
    {/* <Link to="https://www.facebook.com/keplervoice" className="social_icon" alt="facebook">
      <Facebook />
    </Link> */}
    <Link to="https://twitter.com/VoiceKepler" className="social_icon" alt="twitter" target='_blank'>
      <Twitter />
    </Link>
    {/* <Link to="https://www.instagram.com/kepler_voice/" className="social_icon" alt="instagram">
      <Instagram />
    </Link> */}
    <Link
      to="https://www.linkedin.com/company/keplervoice/"
      className="social_icon"
      alt="linkedin"
      target='_blank'
    >
      <Linkedin />
    </Link>
    <Link to="https://wa.me/9151041415" className="social_icon" target="_blank" alt="whatsapp" >
      <WhatsappIcon />
    </Link>
    {/* <Link to="https://www.linkedin.com/company/keplervoice/" className="social_icon"><WhatsappIcon/></Link> */}
  </div>
  )
}

export default SocialIcon
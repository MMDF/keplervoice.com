import React, { useState } from 'react'
import "./Nav.css"
import logo_image from '../../Assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { HumburgIcon } from '../Svg/Svg'

const Nav = () => {

 const [showMenu, setShowMenu] = useState(false);

 const toggleMenu = () => {
  setShowMenu(!showMenu);
 };

 const handleClose =()=>{
  setShowMenu(false)
 }

  return (
  <div className='nav'>
    <div className='logo_portion'>
        <div className='logo'>
           <Link to="/" alt=""> <img src={logo_image} alt='logo' className='logo_image'/></Link>
        </div>
    </div>
    <div className='menu' onClick={toggleMenu}>
      {/* <p>menu</p> */}
      <HumburgIcon/>
    </div>
    <div className={`page_portion ${showMenu ? 'show' : ''}`} onClick={handleClose}>
        <NavLink to="/" className='nav_content_css' alt="home"><h3 className='link_heading'>Home</h3></NavLink>
        <NavLink to="/about" className='nav_content_css' alt="about"><h3 className='link_heading'>About Us</h3></NavLink>
        <NavLink to="/service" className='nav_content_css' alt="service"><h3 className='link_heading'>Service</h3></NavLink>
        <NavLink to="/blog" className='nav_content_css' alt="blog"><h3 className='link_heading'>Blog</h3></NavLink>
        <NavLink to="/career" className='nav_content_css' alt="careers"><h3 className='link_heading'>Careers</h3></NavLink>
        <NavLink to="/contactus" className='nav_content_css'alt="contact"><h3 className='link_heading'>Contact Us</h3></NavLink>
    </div>
  </div>
  )
}

export default Nav
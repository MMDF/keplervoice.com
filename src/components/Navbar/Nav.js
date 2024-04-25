import React, { useState } from 'react'
import "./Nav.css"
import logo_image from '../../Assets/logo.png'
import { Link } from 'react-router-dom'
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
           <Link to="/"> <img src={logo_image} alt='logo' className='logo_image'/></Link>
        </div>
    </div>
    <div className='menu' onClick={toggleMenu}>
      {/* <p>menu</p> */}
      <HumburgIcon/>
    </div>
    <div className={`page_portion ${showMenu ? 'show' : ''}`} onClick={handleClose}>
        <Link to="/" className='nav_content_css'><h3>Home</h3></Link>
        <Link to="/about" className='nav_content_css'><h3>About Us</h3></Link>
        <Link to="/service" className='nav_content_css'><h3>Service</h3></Link>
        <Link to="/blog" className='nav_content_css'><h3>Blog</h3></Link>
        <Link to="/career" className='nav_content_css'><h3>Careers</h3></Link>
        <Link to="/contactus" className='nav_content_css'><h3>Contact Us</h3></Link>
    </div>
  </div>
  )
}

export default Nav
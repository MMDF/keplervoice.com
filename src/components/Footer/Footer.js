import React from "react";
import "./Footer.css";
import {  Facebook, Instagram, Linkedin, Twitter, WhatsappIcon } from "../Svg/Svg";
import { Link } from "react-router-dom";
import logo from '../../Assets/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div class="footer_grid">
          <div className="content_portion">
            {/* <h3 className="logo_color">Kepler Voice</h3> */}
            <img className="logo-resize" src={logo} alt="kepler img" />
            <p className="para_footer">
              Kepler Voice is a brand of Keplenet Infotech Pvt Ltd, dedicated to
              providing high-quality business consulting services. Our team of
              sales experts and IT professionals bring the highest level of
              professionalism to every project. We strive to deliver the best
              results for our clients and support businesses grow and succeed.
            </p>
            <div className="icon_portion">
            <Link to="https://www.facebook.com/keplervoice" className="link_css" alt="facebook" target='_blank'><Facebook/></Link>
            <Link to="https://twitter.com/VoiceKepler" className="link_css" alt="twitter" target='_blank'><Twitter/></Link>
            <Link to="https://www.instagram.com/kepler_voice/" className="link_css" alt="instagram" target='_blank'><Instagram/></Link>
            <Link to="https://www.linkedin.com/company/keplervoice/" className="link_css" alt="linkedin" target='_blank'><Linkedin/></Link>
            <Link to="https://www.linkedin.com/company/keplervoice/" className="link_css" alt="whatsapp" target='_blank'><WhatsappIcon/></Link>
            </div>
          </div>
          <div className="link_portion">
            <div>
              <ul>
                <li><Link to="/" className="link_css" alt="home">Home</Link></li>
                <li><Link to="/blog" className="link_css" alt="blog">Blog</Link></li>
                
                <li><Link to="/career" className="link_css" alt="careers">Careers</Link></li>
                <li><Link to="/about" className="link_css" alt="about">About Us</Link></li>
                <li><Link to="/contactus" className="link_css" alt="contact">Contact Us</Link></li>
                
              </ul>
            </div>
            <div>
              <ul>
                <li><Link to="/term&condition" className="link_css" alt="Terms and Conditions">Terms and Conditions</Link></li>
                <li><Link to="/preference" className="link_css" alt="Opt-Out Preferences">Opt-Out Preferences</Link></li>
                <li><Link to="/privacy" className="link_css" alt="Privacy Policy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copywrite_portion">
          Copyright &copy; <span>Kepler voice </span>
          | Powered by Keplernet Infotech Pvt Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;

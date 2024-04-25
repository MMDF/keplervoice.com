import React from "react";
import "./Footer.css";
import {  Facebook, Instagram, Linkedin, Twitter } from "../Svg/Svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div class="footer_grid">
          <div className="content_portion">
            <h3 className="logo_color">Kepler Voice</h3>
            <p>
              Kepler Voice is a brand of Keplenet Infotech Pvt Ltd, dedicated to
              providing high-quality business consulting services. Our team of
              sales experts and IT professionals bring the highest level of
              professionalism to every project. We strive to deliver the best
              results for our clients and support businesses grow and succeed.
            </p>
            <div className="icon_portion">
            <Link to="https://www.facebook.com/keplervoice" className="link_css"><Facebook/></Link>
            <Link to="https://twitter.com/VoiceKepler" className="link_css"><Twitter/></Link>
            <Link to="https://www.instagram.com/kepler_voice/" className="link_css"><Instagram/></Link>
            <Link to="https://www.linkedin.com/company/keplervoice/" className="link_css"><Linkedin/></Link>
            </div>
          </div>
          <div className="link_portion">
            <div>
              <ul>
                <Link to="/" className="link_css"><li>Home</li></Link>
                <Link to="/blog" className="link_css"><li>Blog</li></Link>
                
                <Link to="/career" className="link_css"><li>Careers</li></Link>
                <Link to="/about" className="link_css"><li>About Us</li></Link>
                <Link to="/contactus" className="link_css"><li>Contact Us</li></Link>
                
              </ul>
            </div>
            <div>
              <ul>
                <Link to="/term&condition" className="link_css"><li>Terms and Conditions</li></Link>
                <Link to="/preference" className="link_css"><li>Opt-Out Preferences</li></Link>
                <Link to="/privacy" className="link_css"><li>Privacy Policy</li></Link>
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

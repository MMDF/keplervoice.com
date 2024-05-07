import React from "react";
import "../pages/Common.css";
import ContactMethod from "../components/ContactMethod/ContactMethod";
import {
  Call,
  Facebook,
  Instagram,
  Linkedin,
  Location,
  Mail,
  Twitter,
} from "../components/Svg/Svg";
import { Link, NavLink } from "react-router-dom";
import EmailToMe from "../components/EmailToMe";
import contact_banner from "../Assets/contact.jpg"





const ContactPage = () => {
 
  return (
    <><div className="servicesImages"><img src={contact_banner} loading="lazy" alt="about" /></div><div className="contact_page">

      <div className="form_portion">

        <div className="contact_content">
          <h1>Get In Touch</h1>
          <p className="contact-para">
            Contact Kepler Voice, Your Gateway to Unparalleled BPO Experience in
            India!.
          </p>
          <div className="connect_portion">
            <ContactMethod
              svg={<Call />}
              waytocontact={"PHONE"}
              contentofway={"+91 9151041415"} />
            <NavLink to="mailto:hr@keplervoice.com?subject=Inquiry"  target="_blank" alt="email" className="link_email" ><ContactMethod
              svg={<Mail />}
              waytocontact={"EMAIL"}
              contentofway={"hr@keplervoice.com"} />
              </NavLink>
            <ContactMethod
              svg={<Location />}
              waytocontact={"LOCATION"}
              contentofway={""} />
          </div>
          <div className="map_portion">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.4134195876063!2d81.83395687517253!3d25.457867277544114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb19337fc495%3A0x5bdc100cc9b2941d!2sKepler%20Voice!5e0!3m2!1sen!2sin!4v1715065398926!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          {/* <div className="icon_portion">
            <Link
              to="https://www.facebook.com/keplervoice"
              className="link_css"
              alt="facebookicon"
            >
              <Facebook />
            </Link>
            <Link to="https://twitter.com/VoiceKepler" className="link_css" alt="twitterIcon">
              <Twitter />
            </Link>
            <Link
              to="https://www.instagram.com/kepler_voice/"
              className="link_css"
              alt="instagramIcon"
            >
              <Instagram />
            </Link>
            <Link
              to="https://www.linkedin.com/company/keplervoice/"
              className="link_css"
              alt="LinkedinIcon"
            >
              <Linkedin />
            </Link>
          </div> */}
        </div>

        {/* <div className="contact_form">
      <div className="card">
        <h1 className="login">Contact Us</h1>
        <label for="fname" className="head">
          User Name
        </label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          className="input"
         
        />

        <label for="fpassword" className="head">
          Email
        </label>
        <br />
        <input
          type="text"
          id="fpassword"
          name="fpassword"
          className="input"
         
        />

        <h3 className="head">Say Something</h3>

        <textarea
          required
          placeholder="ENTER YOUR  QUESTION "
          className="input"
          
        />

        <br />
        <button className="btn" >Send Message</button>
      </div>
    </div> */}
        <EmailToMe />

      </div>
    </div></>
  );
};

export default ContactPage;

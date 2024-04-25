import React, { useState,useRef } from "react";
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
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import EmailToMe from "../components/EmailToMe";





const ContactPage = () => {
 
  return (
    <div className="contact_page">
      <div className="form_portion">
        <div className="contact_content">
          <h1>Get In Touch</h1>
          <p>
            Contact Kepler Voice, Your Gateway to Unparalleled BPO Experience in
            India!.
          </p>
          <div className="connect_portion">
            <ContactMethod
              svg={<Call />}
              waytocontact={"PHONE"}
              contentofway={"+91 9151041415"}
            />
            <ContactMethod
              svg={<Mail />}
              waytocontact={"EMAIL"}
              contentofway={"hr@keplervoice.com"}
            />
            <ContactMethod
              svg={<Location />}
              waytocontact={"LOCATION"}
              contentofway={"43/33 T.B Sapru Road,Civil Lines,Prayagraj 211012"}
            />
          </div>
          <div className="icon_portion">
            <Link
              to="https://www.facebook.com/keplervoice"
              className="link_css"
            >
              <Facebook />
            </Link>
            <Link to="https://twitter.com/VoiceKepler" className="link_css">
              <Twitter />
            </Link>
            <Link
              to="https://www.instagram.com/kepler_voice/"
              className="link_css"
            >
              <Instagram />
            </Link>
            <Link
              to="https://www.linkedin.com/company/keplervoice/"
              className="link_css"
            >
              <Linkedin />
            </Link>
          </div>
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
    </div>
  );
};

export default ContactPage;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../pages/Common.css";

function EmailToMe() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setEmail("")
    setMessage("")
    setName("")
    setNumber("")

    emailjs
      .sendForm("service_1px1w3g", "template_ehcw7kc", form.current, {
        publicKey: "c2WgA5OMOploJr4y0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setAlertMessage("Email sent successfully!")
        },
        (error) => {
          console.log("FAILED...", error.text);
          setAlertMessage("Failed to send email.")
        }
      );
      
  };

  return (
    <div className="contact_form">
      <div className="card">
        <h1 className="login">Contact Us</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label className="head">Name</label>
          <br />
          <input type="text" name="user_name" className="input"   value={name}
            onChange={(e) => setName(e.target.value)} />
          <label className="head">Email</label>
          <br />
          <input type="text" name="user_email" className="input"    value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <label className="head">Number</label>
          <br />
          <input type="text" name="user_number" className="input"    value={number}
            onChange={(e) => setNumber(e.target.value)}/>
          <label className="head">Message</label>
          <br />
          <textarea name="message"  className="input"   value={message}
            onChange={(e) => setMessage(e.target.value)}/>
            {alertMessage && <div className="alert text">{alertMessage} jhgsdjhgs</div>}
          
          <button className="btn" type="submit" value="Send" >
            Send Message
          </button>
          
          {/* <input type="submit" value="Send" /> */}
        </form>
      </div>
    </div>
  );
}

export default EmailToMe;

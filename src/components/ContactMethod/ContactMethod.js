import React from "react";
import "../ContactMethod/contactmethod.css"

const ContactMethod = ({svg,waytocontact,contentofway}) => {
  return (
    <div className="how_contact">
      <div className="svg">
        {svg}
      </div>
      <div className="provider">
        <h2>{waytocontact}</h2>
        <h4>{contentofway}</h4>
      </div>
    </div>
  );
};

export default ContactMethod;

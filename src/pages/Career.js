import React from "react";
import "../components/CareerTable/career.css"
import Careertable from "../components/CareerTable/Careertable";
import career_banner from "../Assets/careerpage (1).jpeg"
import { Link } from "react-router-dom";


function Career() {
  return (
    <>
    <div className="servicesImages"><img src={career_banner} loading="lazy" alt="about" /></div>
      <div className="careers-info">
        <h1 className="about_heading">Careers</h1>
        <h2 className="career-subheading">
          Join Our Visionary Mission to Transform Businesses Through Innovation
          and Excellence
        </h2>
        <p className="about_paragraph_sub">
          At Kepler Voice, we are dedicated to unleashing the full potential of
          businesses through our visionary mission of innovation, collaboration,
          and excellence. Our team comprises diverse and talented professionals
          who are passionate about leveraging cutting-edge technology to
          revolutionize the way businesses operate.
        </p>
      
    <Careertable/>
      </div>
    </>
  );
}

export default Career;
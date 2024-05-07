import React from "react";
import imageImpower from "../Assets/about 2 (2).png";
import imagefuture from "../Assets/about 2 (1).png";
import team1 from "../Assets/team1.jpeg";
import team2 from "../Assets/team2.jpg";
import team3 from "../Assets/team 3.png";
import TeamCard from "../components/TeamCard/TeamCard";
import "../pages/Common.css";
import about from '../Assets/about.jpeg'
const About = () => {
  return (
    <div className="About_portion">
      <div className="servicesImages"><img src={about} loading="lazy" alt="about" /></div>
      <div className="About_Us">
        <h1 className="about_heading">ABOUT US</h1>
        {/* <h2 className="about_paragraph">DREAM BIG BUILD BIGGER</h2> */}
      </div>
      <div className="Empowering_portion">
        <div className="text_portion">
          <h1 className="about_paragraph">Empowering Innovation</h1>
          <h2 className="about_subheading">Our Mission to Revolutionize the Business Landscape</h2>
          <p className="about_paragraph_sub_right">
            At Kepler Voice, our mission is to provide businesses with
            innovative and sustainable Business and IT Solutions to optimize
            their operations and make a positive impact globally. We offer
            customized software solutions that empower businesses to achieve
            their full potential and operate more efficiently in the
            ever-changing market. However, our mission is not just about
            improving business operations but also prioritizing sustainability
            and corporate responsibility in all our operations. We believe in
            leading by example and contributing to a more equitable world. Our
            dedication to innovation, sustainability, and social responsibility
            enables us to be a powerful force for positive change in the world,
            creating a brighter future for all.
          </p>
        </div>
        <div className="image_portion">
          <img src={imageImpower} loading="lazy" alt="imageimpower" className="image_emporing" />
        </div>
      </div>
      <div className="Transitioning_portion Empowering_portion">
        <div className="image_portion">
          <img src={imagefuture} loading="lazy" alt="imagefuture" className="image_emporing" />
        </div>
        <div className="text_portion">
          <h1 className="about_paragraph">Transitioning to a Smarter Future</h1>
          <h2 className="about_subheading">Our Innovative Solutions for Business Operations</h2>
          <p className="about_paragraph_sub_left">
            Our world is constantly changing, and technology is driving that
            change faster than ever. At our company, we recognize the need to
            stay at the forefront of this transition and help our clients
            navigate the challenges and opportunities it presents. We believe
            that adaptability is key to success in this rapidly changing
            landscape, and we are committed to providing innovative,
            cutting-edge software solutions that enable our clients to stay
            ahead of the curve. Whether it’s through AI-powered chatbots,
            cloud-based call centre software, or advanced analytics tools, we
            are dedicated to helping businesses embrace the transition to new
            technologies and thrive in the years to come.
          </p>
        </div>
      </div>

      <div className="Ourteam_portion">
        <h1 className="about_heading">OUR TEAM</h1>
        <p className="about_paragraph_Team">
          Our team is led by two experienced and dedicated directors, Pranit
          Pandey and Rajeev Lochan. With a combined experience of over 20 years
          in the industry, they bring a wealth of knowledge and expertise to our
          organization. In addition to our directors, we are proud to have
          Abheuday Mishra as our Managing Director. Abheuday is an expert in his
          field, with a proven track record of delivering exceptional results.
          Together, our team is committed to delivering the highest quality
          solutions and services to our clients, and we are passionate about
          helping businesses achieve their full potential.
        </p>
        <div className="card_grid_p">
          <TeamCard
            test_name={"Mr Rajeev Lochan"}
            team1_image={team1}
            role={"Director"}
            test_des={"LINKEDIN"}
          />

          <TeamCard
            test_name={"Mr Pranit Pandey"}
            team1_image={team2}
            role={"Director"}
            test_des={"LINKEDIN"}
          />

          <TeamCard
            test_name={"Mr Abheuday Mishra"}
            team1_image={team3}
            role={"Managing Director"}
            test_des={"LINKEDIN"}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

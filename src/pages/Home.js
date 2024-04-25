import React from "react";
import "./Common.css";
import hero_bgvideo from "../Assets/bg.mp4";
import ServiceCard from "../components/Servicecard/ServiceCard";
import bpo_icon from "../Assets/BPO.jpeg";
import BC from "../Assets/BC.jpeg";
import web_icon from "../Assets/DS.jpeg";
import dm_icon from "../Assets/digital-marketing-with-icons-business-people_53876-94833.avif";
import ClientCard from "../components/clientCard/ClientCard";
import Testimonialcard from "../components/TestimonialCard/Testimonialcard";
import test_1 from "../Assets/c1.jpg";
import test_2 from "../Assets/c2.jpg";
import test_3 from "../Assets/c3.jpg";
import blogImage from "../Assets/blog.jpeg"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero_section">
      <div className="video_portion">
        <video src={hero_bgvideo} autoPlay loop muted className="video_class" />
        <div class="content">
          <div class="text-box">
            <h1>Empowering Your Business with Innovative Solutions</h1>
            <h3>DRIVING SUCCESS</h3>
          </div>
        </div>
      </div>
      <div className="introduction_section">
        <h1 className="heading_intro">ABOUT KEPLER VOICE</h1>
        <p className="para_intro">
          Experience Seamless Operations with Kepler Voice At Kepler Voice, we
          don’t just provide services; we offer solutions. Our passion for
          technology, dedication to excellence, and commitment to community sets
          us apart. Join us in the journey to seamless communication.
        </p>
      </div>
      <div className="card_portion">
        <h2 className="heading_serv">OUR TOP SERVICES</h2>
        <div className="flex_card_portion">
          <ServiceCard
            icon={bpo_icon}
            heading={"BPO SERVICE"}
            paragraph={
              "At KeplerVoice, we understand that effective communication is the backbone of successful businesses. Our BPO Voice Services are designed to empower your company's communication strategies, ensuring that you connect with your customers seamlessly."
            }
            goto={"/BPOvoice"}
          />
          <ServiceCard
            icon={web_icon}
            heading={"WEB DEVELOPMENT"}
            paragraph={
              "At KeplerVoice, we understand that your online presence is more than just a website; it’s your digital identity. Our Web Development Services encompass three core pillars: Web Development, Logo Design, and Web Hosting. We’re dedicated to bringing your vision to life online."
            }
            goto={"/devservice"}
          />
         <ServiceCard
          icon={BC}
          heading={"Business Consulting"}
          paragraph={
            "At KeplerVoice, we understand that your business’s success depends on more than just a great product or service. It’s about strategic planning, efficient operations, and effective customer engagement. Our Business Consulting Services encompass three key pillars: CRM, ERP, and Marketing. We’re here to help you optimize every facet of your business."
          }
          goto={"/bussinessconsulting"}
        />
        </div>
      </div>
      <div className="Blog_portion">
      <h2 className="heading_serv">OUR BLOGS</h2>
      <div className="blog-portion">
        
        <div className="blog-content">
          <h1>Blog</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            hic. Error, iure odio pariatur ullam soluta ratione iusto
            exercitationem reprehenderit eius odit, maxime cupiditate unde
            tenetur maiores in commodi voluptatibus optio consequuntur quod ab
            similique doloremque. Dicta, eos quibusdam amet doloribus earum,
            accusantium vero, recusandae est sit magni perspiciatis voluptatem!
          </p>
          <Link to="/blog" ><button className="blog_btn">Read More</button></Link>
          
        </div>
        {/* Blog Image */}
        <div className="image-container">
          <img src={blogImage} alt="" />
        </div>
      </div>
      </div>
      <div className="Client_portion">
        <h2 className="heading_serv">OUR TOP CLIENTS</h2>
        <ClientCard />
      </div>
      <div className="testimonial_section">
        <h2 className="heading_serv">TESTIMONIALS</h2>
        <p className="paragraph_serv">What Client Say</p>
        <div className="testimonial_card_section">
          <Testimonialcard
            test_des={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate qui nesciunt mollitia, enim aperiam assumenda ducimus ratione distinctio libero? Qui facilis eligendi, repellendus exercitationem iste explicabo nostrum voluptatibus rem eius"
            }
            test_image={test_1}
            test_name={"Alex Johnson"}
          />
          <Testimonialcard
            test_des={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate qui nesciunt mollitia, enim aperiam assumenda ducimus ratione distinctio libero? Qui facilis eligendi, repellendus exercitationem iste explicabo nostrum voluptatibus rem eius"
            }
            test_image={test_2}
            test_name={"John Doe"}
          />
          <Testimonialcard
            test_des={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate qui nesciunt mollitia, enim aperiam assumenda ducimus ratione distinctio libero? Qui facilis eligendi, repellendus exercitationem iste explicabo nostrum voluptatibus rem eius"
            }
            test_image={test_3}
            test_name={"Jane smith"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

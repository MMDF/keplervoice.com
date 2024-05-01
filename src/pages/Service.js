import React from "react";
import "../pages/Common.css";
import ServiceCard from "../components/Servicecard/ServiceCard";
import BNVS from "../Assets/BNVS.jpeg";
import BVS from "../Assets/BPO.jpeg";
import BC from "../Assets/BC.jpeg";
import DS from "../Assets/DS.jpeg";
import CS from "../Assets/CS.jpeg";
import GSS from "../Assets/GSS.jpeg";
import service from '../Assets/service.jpg'

const Service = () => {
  return (
    <div className="service_portion">
      <div className="servicesImages"><img src={service} loading="lazy" alt="about" /></div>
      <div className="About_Us">
        <h1 className="about_heading">OUR SERVICES</h1>
        <p className="about_paragraph">
          Services To Enhance Your Business Revenue
        </p>
      </div>
      <div className="flex_card_portion">
        <ServiceCard
          icon={BVS}
          heading={"BPO Voice Services"}
          paragraph={
            "At KeplerVoice, we understand that effective communication is the backbone of successful businesses. Our BPO Voice Services are designed to empower your company’s communication strategies, ensuring that you connect with your customers seamlessly."
          }
          goto={"/BPOvoice"}
        />
        <ServiceCard
          icon={BNVS}
          heading={"BPO Non Voice Services"}
          paragraph={
            "At KeplerVoice, we understand that effective customer communication extends beyond voice interactions. Our BPO Non-Voice Services, including Email and Chat solutions, are designed to help you engage with your customers effortlessly, build lasting relationships, and drive business growth."
          }
          goto={"/bpononvoice"}
        />
        <ServiceCard
          icon={BC}
          heading={"Business Consulting"}
          paragraph={
            "At KeplerVoice, we understand that your business’s success depends on more than just a great product or service. It’s about strategic planning, efficient operations, and effective customer engagement. Our Business Consulting Services encompass three key pillars: CRM, ERP, and Marketing. We’re here to help you optimize every facet of your business."
          }
          goto={"/bussinessconsulting"}
        />
        <ServiceCard
          icon={DS}
          heading={"Development Services"}
          paragraph={
            "At KeplerVoice, we understand that your online presence is more than just a website; it’s your digital identity. Our Web Development Services encompass three core pillars: Web Development, Logo Design, and Web Hosting. We’re dedicated to bringing your vision to life online."
          }
          goto={"/devservice"}
        />
        <ServiceCard
          icon={CS}
          heading={"Internet/Cloud Services"}
          paragraph={
            "In the digital age, connectivity and data management are critical to your business’s success. Kepler Voice offers a comprehensive suite of Internet and Cloud Services, designed to provide seamless connectivity and scalable solutions to meet your evolving needs."
          }
          goto={"/cloudservice"}
        />
        <ServiceCard
          icon={GSS}
          heading={"Global Support Services"}
          paragraph={
            "Kepler Voice takes pride in offering a rich tapestry of Global Support Services designed to cater to your unique business needs. What sets us apart is our ability to seamlessly interlink these services, providing a wide range of flexible combinations that offer you the best experience possible."
          }
          goto={"/globalservice"}
        />
      </div>
    </div>
  );
};

export default Service;

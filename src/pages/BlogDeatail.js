import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BLOGS_DATA } from "../components/Blogcard/Blogcard";
import "./Common.css";


const BlogDeatail = () => {
  const params = useParams();
  const blogId = params.id;

  const [data, setData] = useState(BLOGS_DATA?.find((k) => k?.id == blogId));

  return (
    <>
    
      
      <div className="main-img">
        <img src={data?.mainImg}  className="image_blog"/>
      </div>
      <div>
        <h1>{data?.title}</h1>
      </div>
      <div>{data?.paragraph}</div>
      <div className="multiple-img">
        <img src={data?.img1} alt="imageblog"/>
        <img src={data?.img2} alt="imageblog"/>
        <img src={data?.img3} alt="imageblog"/>
      </div>
    </>
  );
};

export default BlogDeatail;

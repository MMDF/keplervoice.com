import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BLOGS_DATA } from "../components/Blogcard/Blogcard";
import "./Common.css";

const BlogDeatail = () => {
  const params = useParams();
  const blogId = params.id;
  console.log("blog", blogId);

  const [data, setData] = useState(BLOGS_DATA?.find((k) => k?.id == blogId));

  console.log("data", data);

  return (
    <>
      <div>
        <h1>{data?.title}</h1>
      </div>
      <div className="main-img">
        <img src={data?.mainImg}  className="image_blog"/>
      </div>
      <div>{data?.paragraph}</div>
      <div className="multiple-img">
        <img src={data?.img1} />
        <img src={data?.img2} />
        <img src={data?.img3} />
      </div>
    </>
  );
};

export default BlogDeatail;

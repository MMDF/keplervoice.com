import React, { useEffect, useState } from "react";
import "../Blogcard/blogcard.css";
import { Link } from "react-router-dom";

export const BLOGS_DATA = [
    {
      id: 1,
      title: "This is the blog title",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat purus vestibulum luctus porttitor. Vestibulum eleifend, ante nec feugiat facilisis, urna odio accumsan enim, at faucibus neque lorem sed tortor. Nunc venenatis tellus elit, eget scelerisque enim placerat ut. Phasellus efficitur imperdiet nisl, nec hendrerit eros tincidunt vitae. Maecenas vitae lacus at sem gravida eleifend quis at sem. Sed fermentum fringilla nulla, a tempor lorem vulputate ut. Etiam in risus at augue sollicitudin interdum. Cras sed justo lacinia, consectetur odio ac, tincidunt nisl. Nam dapibus tristique mauris, eget luctus ex tincidunt nec.",
      mainImg: "https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg",
      img1: "https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg",
      img2: "https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg",
      img3: "https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg"

    },
    {
      id: 2,
      title: "This is the blog title",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat purus vestibulum luctus porttitor. Vestibulum eleifend, ante nec feugiat facilisis, urna odio accumsan enim, at faucibus neque lorem sed tortor. Nunc venenatis tellus elit, eget scelerisque enim placerat ut. Phasellus efficitur imperdiet nisl, nec hendrerit eros tincidunt vitae. Maecenas vitae lacus at sem gravida eleifend quis at sem. Sed fermentum fringilla nulla, a tempor lorem vulputate ut. Etiam in risus at augue sollicitudin interdum. Cras sed justo lacinia, consectetur odio ac, tincidunt nisl. Nam dapibus tristique mauris, eget luctus ex tincidunt nec.",
      mainImg: "https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg",
      img1: "https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg",
      img2: "https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg",
      img3: "https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg"
    },
    {
      id: 3,
      title: "This is the blog title",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat purus vestibulum luctus porttitor. Vestibulum eleifend, ante nec feugiat facilisis, urna odio accumsan enim, at faucibus neque lorem sed tortor. Nunc venenatis tellus elit, eget scelerisque enim placerat ut. Phasellus efficitur imperdiet nisl, nec hendrerit eros tincidunt vitae. Maecenas vitae lacus at sem gravida eleifend quis at sem. Sed fermentum fringilla nulla, a tempor lorem vulputate ut. Etiam in risus at augue sollicitudin interdum. Cras sed justo lacinia, consectetur odio ac, tincidunt nisl. Nam dapibus tristique mauris, eget luctus ex tincidunt nec.",
      mainImg: "https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg",
      img1: "https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg",
      img2: "https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg",
      img3: "https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg"
    },
   
    
   
  ]

const BlogCard = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
  setBlogPosts( BLOGS_DATA)
    
  }, []);

  return (
    <div className="flex_card_portion">
    {blogPosts.length > 0 && blogPosts.map((key)=>{
        return(
            <div className='service_card'>
            <div className='icon_content_portion'>
                <div className='lcon_service'>
                    <img src={key.mainImg} loading="lazy" alt='blogard' className='icon_class'/>
                </div>
                <h1 className='service_heading'>{key.title}</h1>
    
            </div>
            <p className='service_paragrap '>{key.paragraph}</p>
           <Link to={`/blog/${key.id}`} className='readmo' alt="Readmore" ><button className='readmore'>ReadMore</button></Link>
        </div>
        
        )
    })}
    </div>
    
    
  );
};

export default BlogCard;

import React from 'react'
import "../pages/Common.css"
import BlogCard from '../components/Blogcard/Blogcard'
import blog_banner from "../Assets/blogpage.jpeg"



const Blog = () => {
  return (
   <>
   <div className="servicesImages"><img src={blog_banner} loading='lazy' alt="about" /></div>
   <h1>OUR BLOG</h1>
   <p className='blog_tag'>"Exploring Moments, Capturing Memories: Your Gallery of Inspiration"</p>

   <div>
    <BlogCard/>
   </div>
   </>
  )
}

export default Blog
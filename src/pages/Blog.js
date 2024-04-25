import React from 'react'
import "../pages/Common.css"
import BlogCard from '../components/Blogcard/Blogcard'


const Blog = () => {
  return (
   <>
   <h1>OUR BLOG</h1>
   <p className='blog_tag'>"Exploring Moments, Capturing Memories: Your Gallery of Inspiration"</p>

   <div>
    <BlogCard/>
   </div>
   </>
  )
}

export default Blog
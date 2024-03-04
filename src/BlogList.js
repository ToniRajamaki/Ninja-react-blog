import { Link } from 'react-router-dom'
import useFetch from './useFetch' // Removed unused deleteData import
import { FaGlasses } from 'react-icons/fa' // Replaced LuGlasses with FaGlasses (FontAwesome)
import ShowDate from './Date'
import './Styles/featured.css'
import './Styles/ShowDate.css'
import LoadingAnimation from './LoadingAnimation'
import React, { useState, useEffect } from 'react'

const BlogList = ({ title }) => {
  const [isLoading, setIsLoading] = useState(true)
  const blogs = useFetch('http://example.com/blogs') // Added URL to useFetch

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 20) // Delay of 2 seconds
  }, [])

  return (
    <div className='blog-list' id='all-blogs'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.2em',
        }}>
        <h1 style={{ color: 'var(--main)' }}>{title}</h1>
        <div className='blog-tag-pair'>
          <span className='blog-tag'>shuriken 🗡️</span>
          <span className='blog-tag'>nunchaku 🥋</span>
          <span className='blog-tag'>katana ⚔️</span>
          <span className='blog-tag'>samurai 🏯</span>
        </div>
      </div>
      {isLoading && <LoadingAnimation />}
      {!isLoading &&
        blogs.map((blog) => (
          <div className='blog-preview' key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              <h2>{blog.title}</h2>
              <div>
                <div className='blog-preview-container'>
                  <span
                    style={{ marginRight: 'auto', color: 'var(--font-light)' }}>
                    Written by {blog.author}
                  </span>
                  <div className='blog-specs'>
                    <span style={{ marginRight: 'auto', fontsize: '12px' }}>
                      {ShowDate(blog.creationDate)}
                    </span>
                   
                    <span>
      <p style={{ fontSize: "12px", paddingLeft: "10px" }}>
        6min read
      </p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default BlogList

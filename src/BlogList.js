import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';
import ShowDate from './Date';
import LoadingAnimation from './LoadingAnimation';
import './Styles/featured.css';
import './Styles/ShowDate.css';

const BlogList = ({ title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTag, setCurrentTag] = useState('');
  const blogs = useFetch('http://example.com/blogs');
  const ninjaTags = ['Weapons', 'Ki', 'Basics', 'Ninjaway', 'Ninja Arts']; // Pool of tags

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Corrected the loading animation duration to 2000 milliseconds (2 seconds)
    return () => clearTimeout(timer);
  }, [currentTag]);

  const updateCurrentTag = (tag) => {
    setCurrentTag(tag);
  };

  // Function to get a random tag from ninjaTags
  const getRandomTag = () => {
    const randomIndex = Math.floor(Math.random() * ninjaTags.length);
    return ninjaTags[randomIndex];
  };

  // Function to extract a short preview text from the body
  const getShortPreviewText = (body) => {
    // Split the body text, filter out empty lines, and join the first few words for a short preview
    return body
      .split(/\s+/) // Split by any whitespace to get individual words
      .slice(0, 30) // Take the first 20 words for the preview
      .join(' ') + '...'; // Rejoin these words and add ellipsis to indicate continuation
  };

  return (
    <div className='blog-list' id='all-blogs'>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.2em' }}>
        <h1 style={{ color: 'var(--main)' }}>{title}</h1>
        <div className='blog-tag-pair'>
          {ninjaTags.map((tag) => (
            <span key={tag} className={`blog-tag ${currentTag === tag ? 'active' : ''}`} onClick={() => updateCurrentTag(tag)}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      {isLoading && <LoadingAnimation />}
      {!isLoading && blogs.map((blog) => (
        <div className='blog-preview' key={blog.id} data-aos='fade-up'>
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            {/* Short preview text */}
            <p className="blog-preview-text">{getShortPreviewText(blog.body)}</p>
            <div>
              <div className='blog-preview-container'>
                <div className='pair'>
                  <span style={{ marginRight: 'auto', color: 'var(--font-light)' }}>
                    Written by {blog.author}
                  </span>
                  <span className='blog-tag-preview'>
                    {currentTag === '' ? getRandomTag() : currentTag}
                  </span>
                </div>
                <div className='pair'>
                  <div className='blog-specs'>
                    <span style={{ marginRight: 'auto', fontSize: '12px' }}>
                      {ShowDate(blog.creationDate)}
                    </span>
                    <span>
                      <p style={{ fontSize: '12px', paddingLeft: '10px' }}>
                        6min read
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }} data-aos='fade-up'>
        <a href='#' className='button-secondary' data-aos="zoom-in" data-aos-delay="2000" >
          browse all..
        </a>
      </div>
    </div>
  );
};

export default BlogList;

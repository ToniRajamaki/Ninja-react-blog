import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlasses } from 'react-icons/fa';
import ShowDate from './Date';
import './Styles/featured.css';


function Featured() {
  // Example data, replace with your actual data source
  const features = [
    { title: "Understanding React", author: "Tanaka", tags: ["React", "JavaScript"], initial: "T" },
    { title: "Advanced CSS Techniques", author: "Smith", tags: ["CSS", "Design"], initial: "S" },
    { title: "Intro to TypeScript", author: "Johnson", tags: ["TypeScript", "Programming"], initial: "J" },
  ];

  return (
    <div>
      <h2>Senpai's picks</h2>
      <Link to="/explore" className="explore-more">Explore more</Link>
      <div className='featured-container'>
        {features.map((feature, index) => (
          <div className='feature-card' key={index}>
            <h3>{feature.title}</h3>
            <div>{feature.tags.map(tag => <span className='feature-tag' key={tag}>{tag} </span>)}</div>
            <div className='pair'>

            <div className="profile-pic">{feature.initial}</div>
            <p> <span className='author'>{feature.author}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;

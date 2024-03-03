import React from 'react';
import './Styles/HeroSection.css'; // Make sure to import the CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1 className="title">Your Main Title</h1>
      <p className="subtitle">Your engaging subtitle goes here.</p>
      <a href="#" className="button primary">Primary Action</a>
      <a href="#" className="button">Secondary Action</a>
    </section>
  );
};

export default HeroSection;

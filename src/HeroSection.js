import React from 'react';
import './Styles/HeroSection.css'; // Make sure to import the CSS file

const HeroSection = () => {
  // URL of the image
  const imageUrl = "https://github.com/ToniRajamaki/Ninja-react-blog/blob/main/public/ninja-hero.png?raw=true";

  return (
    <section className="hero-section">
      <div className="content">
        <h1 className="title">Written by Ninjas</h1>
        <p className="subtitle">Unleash your inner <span style={{ color: "var(--main)" }}>Ki</span> and embrace the knowledge of the clan.</p>
        <a href="#" className="button-primary">Explore blogs</a>
        <a href="#" className="button-secondary">Create your own</a>
      </div>
      <img src={imageUrl} alt="Ninja Hero" className="hero-image" />
    </section>
  );
};

export default HeroSection;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Styles/HeroSection.css'; // Make sure this CSS file exists and is correctly styled

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // overall animation duration
    });
  }, []);

  const imageUrl = "https://github.com/ToniRajamaki/Ninja-react-blog/blob/main/public/ninja-hero.png?raw=true";

  return (
    <section className="hero-section">
      <div className="content" data-aos="fade-right" data-aos-delay="00">
        <h1 className="title" data-aos="fade-right" data-aos-delay="200">Written by Ninjas</h1>
        <p className="subtitle" data-aos="fade-right" data-aos-delay="400">Unleash your inner <span style={{ color: "var(--main)" }}>Ki</span> and embrace the knowledge of the clan.</p>
        <a href="#all-blogs" className="button-primary" data-aos="fade-right" data-aos-delay="600">Explore blogs</a>
        <Link to="/create" className="button-secondary" data-aos="fade-right" data-aos-delay="800">Create your own</Link>
      </div>
      <img src={imageUrl} alt="Ninja Hero" className="hero-image" data-aos="fade-left" data-aos-delay="1200" />
    </section>
  );
};

export default HeroSection;

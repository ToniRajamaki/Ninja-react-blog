import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './Styles/FeaturedSection.css'; // Ensure this CSS file exists and is correctly styled

const FeaturedSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const title = "The Path to Becoming a Ninja";
  const description = "Embarking on the way of the ninja is a journey accessible to anyone. With dedication, discipline, and the right guidance, you can transform into an accomplished ninja. Start your adventure today and discover the strength, stealth, and wisdom that lie within.";
  const imageUrl = "https://raw.githubusercontent.com/ToniRajamaki/Ninja-react-blog/main/public/ninja-image.webp";

  return (
    <div className="featured-section">
      <div className="text-content" data-aos="fade-right" data-aos-offset="0" data-aos-easing="ease-in-sine">
        <h2 style={{ color: "var(--font-color)" }}>{title}</h2>
        <p style={{ color: "var(--font-light)" }}>{description}</p>
      </div>
      <div className="image-content" data-aos="fade-left" data-aos-offset="0" data-aos-easing="ease-in-sine">
        <img src={imageUrl} alt="Featured" />
      </div>
    </div>
  );
};

export default FeaturedSection;

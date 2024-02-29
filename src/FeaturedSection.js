import React from 'react';
import './Styles/FeaturedSection.css'; // Ensure this CSS file exists and is correctly styled

const FeaturedSection = () => {
  const title = "The Path to Becoming a Ninja";
  const description = "Embarking on the way of the ninja is a journey accessible to anyone. With dedication, discipline, and the right guidance, you can transform into an accomplished ninja. Start your adventure today and discover the strength, stealth, and wisdom that lie within.";
  const imageUrl = "https://static.vecteezy.com/system/resources/previews/027/663/909/large_2x/japanese-samurai-warrior-mighty-ninja-with-swords-cool-poster-of-asian-fighter-with-katana-traditional-hand-drawn-painting-of-fantasy-martial-ronin-vector-art-tattoo-generative-ai-photo.jpg";

  return (
    <div className="featured-section">
      <div className="text-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="image-content">
        <img src={imageUrl} alt="Featured" />
      </div>
    </div>
  );
};

export default FeaturedSection;

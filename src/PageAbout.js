import React from "react";
import "./Styles/PageAbout.css";
import { FaMask, FaBookDead, FaBolt } from 'react-icons/fa'; // Import ninja-related icons

const PageAbout = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        {/* Assuming you have a ninja-themed image to replace this with */}
        <img src="../public/about-imgwebp.webp" alt="Ninjas in action" className="about-img"/>
      </div>
      <div className="about-content">
        <h1 className="about-header">
          About <span className='highlight'>The Ninja Way</span>
        </h1>
        <p className="about-paragraph">
          Our journey is not merely one of physical prowess but a continuous quest for self-mastery and excellence. It's rooted in ancient traditions and honed by the discipline that shapes our very being.
        </p>
        <p className="about-paragraph">
          From the shadowed depths of history, we emerge with wisdom of ages past. Our craft is more than mere martial arts—it's a way of life. We tread lightly but carry the strength of wills unbroken by time. We embody agility, stealth, and the quiet force of nature herself. Our academy doesn't just teach techniques; we instill a code—an ethos. The silent footsteps we leave behind echo with the respect we carry for our forebears.
        </p>
        <p className="about-paragraph">
          The path of the ninja is veiled in secrecy, yet here, we offer a glimpse into this enigmatic world. Our teachings fuse ancient lore with modern practice, ensuring that the essence of the shinobi is accessible to the seekers of this generation. We forge not just warriors, but guardians of a venerable heritage.
        </p>
        <p className="about-paragraph">
          Join us, and step into a realm where shadows dance with light, where the disciplined mind meets the spirited heart, and where every move is poetry in motion. Embrace the silent way of the ninja, and discover the power that lies in quietude.
        </p>
        <br />
        <div className="about-stats">
          <div className="stat-item">
            <FaMask size={50} /> {/* Ninja icon */}
            <h3>100+</h3>
            <p>Stealth Techniques</p>
          </div>
          <div className="stat-item">
            <FaBookDead size={50} /> {/* Knowledge icon */}
            <h3>300</h3>
            <p>Years of History</p>
          </div>
          <div className="stat-item">
            <FaBolt size={50} /> {/* Speed icon */}
            <h3>50+</h3>
            <p>Speed Training Drills</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageAbout;

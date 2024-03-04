import React from 'react';
import './Styles/Footer.css'; // Assuming you'll create a Footer.css for styling

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h5>Ninja Training</h5>
          <ul>
            <li><a href="#home">Basic Training</a></li>
            <li><a href="#home">Advanced Techniques</a></li>
            <li><a href="#home">Weapons Training</a></li>
            <li><a href="#home">Stealth Operations</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Gear Reviews</h5>
          <ul>
            <li><a href="#home">Clothing</a></li>
            <li><a href="#home">Tools</a></li>
            <li><a href="#home">Weapons</a></li>
            <li><a href="#home">Gadgets</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Missions</h5>
          <ul>
            <li><a href="#home">Historical Missions</a></li>
            <li><a href="#home">Strategy</a></li>
            <li><a href="#home">Tactics</a></li>
            <li><a href="#home">Analysis</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Community</h5>
          <ul>
            <li><a href="#home">Forums</a></li>
            <li><a href="#home">Events</a></li>
            <li><a href="#home">Clubs</a></li>
            <li><a href="#home">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Ninja Blog. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

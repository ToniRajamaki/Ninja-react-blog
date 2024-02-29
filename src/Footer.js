import React from 'react';
import './Styles/Footer.css'; // Assuming you'll create a Footer.css for styling

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h5>Ninja Training</h5>
          <ul>
            <li><a href="/basic-training">Basic Training</a></li>
            <li><a href="/advanced-techniques">Advanced Techniques</a></li>
            <li><a href="/weapons-training">Weapons Training</a></li>
            <li><a href="/stealth-operations">Stealth Operations</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Gear Reviews</h5>
          <ul>
            <li><a href="/clothing">Clothing</a></li>
            <li><a href="/tools">Tools</a></li>
            <li><a href="/weapons">Weapons</a></li>
            <li><a href="/gadgets">Gadgets</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Missions</h5>
          <ul>
            <li><a href="/historical-missions">Historical Missions</a></li>
            <li><a href="/strategy">Strategy</a></li>
            <li><a href="/tactics">Tactics</a></li>
            <li><a href="/analysis">Analysis</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Community</h5>
          <ul>
            <li><a href="/forums">Forums</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/clubs">Clubs</a></li>
            <li><a href="/contact">Contact Us</a></li>
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

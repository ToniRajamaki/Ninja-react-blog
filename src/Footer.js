import React from 'react';
import './Styles/Footer.css'; // Assuming you'll create a Footer.css for styling

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h5>Ninja Training</h5>
          <ul>
            <li><a href="/">Basic Training</a></li>
            <li><a href="/">Advanced Techniques</a></li>
            <li><a href="/">Weapons Training</a></li>
            <li><a href="/">Stealth Operations</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Gear Reviews</h5>
          <ul>
            <li><a href="/">Clothing</a></li>
            <li><a href="/">Tools</a></li>
            <li><a href="/">Weapons</a></li>
            <li><a href="/">Gadgets</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Missions</h5>
          <ul>
            <li><a href="/">Historical Missions</a></li>
            <li><a href="/">Strategy</a></li>
            <li><a href="/">Tactics</a></li>
            <li><a href="/">Analysis</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Community</h5>
          <ul>
            <li><a href="/">Forums</a></li>
            <li><a href="/">Events</a></li>
            <li><a href="/">Clubs</a></li>
            <li><a href="/">Contact Us</a></li>
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

import React, { useState } from 'react';
import './Styles/DropDown.css';

function DropDown() {
    const [isVisible, setIsVisible] = useState(false);
  
    // Toggle dropdown visibility
    const toggleDropdown = () => setIsVisible(!isVisible);
  
    // Hide the dropdown
    const hideDropdown = () => setIsVisible(false);
  
    return (
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>Browse</button>
        <div 
          className={`dropdown-content ${isVisible ? "show" : ""}`}
          onMouseLeave={hideDropdown} // Hide dropdown when the cursor leaves the menu
        >
          <div className="column">
            <h4 style={{ color: "var(--main)" }}>Ninjas</h4>
            {/* Add hideDropdown onClick for each link */}
            <a href="#" onClick={hideDropdown}>Ninja History</a>
            <a href="#" onClick={hideDropdown}>Famous Ninjas</a>
            <a href="#" onClick={hideDropdown}>Ninja Gear</a>
            <a href="#" onClick={hideDropdown}>Training</a>
            <a href="#" onClick={hideDropdown}>Missions</a>
          </div>
          <div className="column">
            <h4 style={{ color: "var(--main)" }}>Skills</h4>
            <a href="#" onClick={hideDropdown}>Stealth</a>
            <a href="#" onClick={hideDropdown}>Combat</a>
            <a href="#" onClick={hideDropdown}>Espionage</a>
            <a href="#" onClick={hideDropdown}>Survival</a>
            <a href="#" onClick={hideDropdown}>Strategy</a>
          </div>
          <div className="column">
            <h4 style={{ color: "var(--main)" }}>Weapons</h4>
            <a href="#" onClick={hideDropdown}>Swords</a>
            <a href="#" onClick={hideDropdown}>Shuriken</a>
            <a href="#" onClick={hideDropdown}>Nunchaku</a>
            <a href="#" onClick={hideDropdown}>Blowgun</a>
            <a href="#" onClick={hideDropdown}>Kunai</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default DropDown;
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5'; // Importing IoClose icon from react-icons
import "../src/Styles/SpecialOffer.css";
function SpecialOffer() {
  const [isVisible, setIsVisible] = useState(true); // State to control the visibility of the offer

  const handleClose = () => {
    setIsVisible(false); // Hide the offer when the close button is clicked
  };

  if (!isVisible) return null; // If the offer is not visible, don't render the component

  return (
    <div className='special-offer'>
      <p>Register now for absolutely FREE LIMITED offer!</p>
        
      <button onClick={handleClose} className="special-close-button" style={{cursor: 'pointer', background: 'transparent', border: 'none'}}>
        <IoClose size={24} /> {/* Using IoClose icon as the close button */}
      </button>
    </div>
  );
}

export default SpecialOffer;

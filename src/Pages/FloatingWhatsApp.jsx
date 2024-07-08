import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleWhatsAppClick = (phoneNumber) => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="floating-whatsapp" ref={dropdownRef}>
      <FontAwesomeIcon
        icon={faWhatsapp}
        size="2x"
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
        <div className="dropdownW">
          <button onClick={() => handleWhatsAppClick('9004002958')}>
            Contact 9004002958
          </button>
          <button onClick={() => handleWhatsAppClick('9004002941')}>
            Contact 9004002941
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingWhatsApp;

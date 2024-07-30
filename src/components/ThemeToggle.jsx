// ThemeToggle.js

import React, { useState, useEffect } from 'react';
import './ThemeToggle.css'; // Import your CSS file

const ThemeToggle = ({ children }) => {
  // Load theme from local storage or default to light mode
  const [isDarkMode, setIsDarkMode] = useState(
    () => JSON.parse(localStorage.getItem('isDarkMode')) || false
  );

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      {children}
    </div>
  );
};

export default ThemeToggle;

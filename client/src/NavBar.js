import React, { useState } from 'react';

// import { useDarkMode } from '../hooks/useDarkMode';

import './App.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)//useDarkMode(false);
  const toggleMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women's World Cup Players!</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;

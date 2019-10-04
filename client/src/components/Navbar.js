import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    return (
      <nav className="navbar">
        <h1 className="heading">Women's World Cup Soccer Players</h1>
        <div className="dark-mode-toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </nav>
    );
  };
  
  export default Navbar;
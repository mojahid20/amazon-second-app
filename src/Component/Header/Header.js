import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="navbar">
        <h1>mojahid</h1>
        <div className="menu">
          <a href="/">home</a>
          <a href="/">about</a>
          <a href="/">contact</a>
        </div>
      </div>
        </div>
    );
};

export default Header;
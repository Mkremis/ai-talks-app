import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header className="header">
      <div className="left-header "></div>
      <div className="center-header ">
        <h1>AI Talks</h1>
      </div>
      <div className="right-header">
        <span class="material-symbols-outlined">menu</span>
      </div>
    </header>
  );
};
export default Header;

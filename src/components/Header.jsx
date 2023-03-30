import React from 'react';
import './Header.css';

const Header = ({ isOpen, openModal, closeModal }) => {
  const handleMenu = () => (isOpen ? closeModal() : openModal());
  return (
    <header className="header">
      <div className="left-header ">
        <span
          className="material-symbols-outlined"
          onClick={handleMenu}
          style={{ cursor: 'pointer' }}
        >
          {isOpen ? 'Menu_open' : 'Menu'}
        </span>
      </div>
      <div className="center-header ">
        <h1>AI Talks</h1>
      </div>
      <div className="right-header"></div>
    </header>
  );
};
export default Header;

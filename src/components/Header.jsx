import React from 'react';
import './Header.css';

const Header = ({ isOpen, openModal, closeModal }) => {
  const handleMenu = () => (isOpen ? closeModal() : openModal());
  return (
    <header className="header">
      <div className="left-header "></div>
      <div className="center-header ">
        <h1>AI Talks</h1>
      </div>
      <div className="right-header">
        <span className="material-symbols-outlined" onClick={handleMenu}>
          menu
        </span>
      </div>
    </header>
  );
};
export default Header;

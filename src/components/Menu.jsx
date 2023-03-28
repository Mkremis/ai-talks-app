import React from 'react';
import './Menu.css';
import Languages from './Languages';

const Menu = ({ isOpen, voices, lang, handleLangChange }) => {
  return (
    <article className={`modal ${isOpen && 'is-open'}`}>
      <nav className="menu">
        <Languages
          voices={voices}
          lang={lang}
          handleLangChange={handleLangChange}
        />
      </nav>
    </article>
  );
};

export default Menu;

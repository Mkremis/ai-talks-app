import React, { useEffect, useState } from 'react';
import './Menu.css';
import Languages from './Languages';
import Temperatures from './Temperatures';

const Menu = ({
  isOpen,
  voices,
  lang,
  handleLangChange,
  handleTemperature,
}) => {
  return (
    <article className={`modal ${isOpen && 'is-open'}`}>
      <nav className="menu">
        <Languages
          voices={voices}
          lang={lang}
          handleLangChange={handleLangChange}
        />
        <Temperatures handleTemperature={handleTemperature} />
      </nav>
    </article>
  );
};

export default Menu;

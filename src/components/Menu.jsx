import React, { useEffect, useState } from 'react';
import './Menu.css';
import Models from './Models';
import Languages from './Languages';
import Temperatures from './Temperatures';

const Menu = ({
  isOpen,
  voices,
  lang,
  handleLangChange,
  temperature,
  handleTemperature,
  model,
  handleModel,
}) => {
  return (
    <article className={`modal ${isOpen && 'is-open'}`}>
      <nav className="menu">
        <Models model={model} handleModel={handleModel} />
        <Languages
          voices={voices}
          lang={lang}
          handleLangChange={handleLangChange}
        />
        <Temperatures
          temperature={temperature}
          handleTemperature={handleTemperature}
        />
        <footer className="footer">
          <span>Designed By </span>
          <a href="https://github.com/Mkremis" target="_blank">
            Martin Kremis
          </a>
        </footer>
      </nav>
    </article>
  );
};

export default Menu;

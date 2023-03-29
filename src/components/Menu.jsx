import React, { useEffect, useState } from 'react';
import './Menu.css';
import Languages from './Languages';
import Temperatures from './Temperatures';
import Models from './Models';

const Menu = ({
  isOpen,
  voices,
  lang,
  handleLangChange,
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
        <Temperatures handleTemperature={handleTemperature} />
      </nav>
    </article>
  );
};

export default Menu;

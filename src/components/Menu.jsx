import React, { useEffect, useState } from 'react';
import './Menu.css';
import Languages from './Languages';

const Menu = ({
  isOpen,
  voices,
  lang,
  handleLangChange,
  handleTemperature,
}) => {
  const [temperature, setTemperature] = useState(2);
  const handleRange = (e) => setTemperature(e.target.value / 10);
  useEffect(() => {
    handleTemperature(temperature);
  }, [temperature]);

  return (
    <article className={`modal ${isOpen && 'is-open'}`}>
      <nav className="menu">
        <Languages
          voices={voices}
          lang={lang}
          handleLangChange={handleLangChange}
        />
        <section className="menu-temperature">
          <div className="languages-title">
            <h2>Selecciona la temperatura</h2>
          </div>
          <input
            type="range"
            min={0}
            max={20}
            step={1}
            defaultValue={2}
            onChange={handleRange}
            className="custom-slider"
          />
        </section>
      </nav>
    </article>
  );
};

export default Menu;

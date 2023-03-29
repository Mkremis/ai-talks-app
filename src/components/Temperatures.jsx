import React, { useEffect, useState } from 'react';
import './Temperatures.css';
const Temperatures = ({ handleTemperature }) => {
  const [temperature, setTemperature] = useState(2);
  const handleRange = (e) => setTemperature(e.target.value / 10);
  useEffect(() => {
    handleTemperature(temperature);
  }, [temperature]);
  return (
    <section className="menu-temperature">
      <h2 className="languages-title">Selecciona la temperatura</h2>
      <div className="temperature-range">
        <div className="temperature-low">🤓</div>
        <div className="temperature-selector">
          <input
            type="range"
            min={0}
            max={20}
            step={1}
            defaultValue={2}
            onChange={handleRange}
            className="custom-slider"
          />
        </div>
        <div className="temperature-high">🤪</div>
      </div>
    </section>
  );
};

export default Temperatures;

import React from "react";

const Temperatures = ({ temperature, handleTemperature, lang }) => {
  const handleRange = (e) => handleTemperature(e.target.value / 10);

  return (
    <section className="menu-item">
      <h2 className="menu-title">
        {lang.includes("es")
          ? "  Selecciona la creatividad"
          : "Select the creativity"}
      </h2>
      <div className="temperature-range">
        <div className="temperature-low">🤓</div>
        <div className="temperature-selector">
          <input
            type="range"
            min={0}
            max={12}
            step={1}
            value={temperature * 10}
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

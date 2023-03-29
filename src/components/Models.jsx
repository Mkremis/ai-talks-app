import React from 'react';
import './Models.css';

const Models = ({ models, model, handleModel }) => {
  if (models.length > 0) {
    return (
      <section className="models">
        <h2 className="models-title">Selecciona un Modelo de AI</h2>
        <div className="select-models">
          <select
            name="models"
            id="models"
            className="model"
            value={model}
            onChange={handleModel}
          >
            {models.map((model, i) => {
              return (
                <option key={i} value={model}>
                  {model}
                </option>
              );
            })}
          </select>
        </div>
      </section>
    );
  }
};

export default Models;

import React from 'react';
import './Models.css';

const Models = ({ model, handleModel }) => {
  const models = [
    'text-davinci-003',
    'text-davinci-002',
    'text-curie-001',
    'text-babbage-001',
    ' text-ada-001',
    'davinci',
    'curie',
    'babbage',
    'ada',
  ];
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
};

export default Models;

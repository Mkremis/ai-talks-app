import React from "react";

const Models = ({ model, handleModel, lang }) => {
  const models = [
    "text-davinci-003",
    "text-davinci-002",
    "text-curie-001",
    "text-babbage-001",
    " text-ada-001",
    "davinci",
    "curie",
    "babbage",
    "ada",
  ];
  return (
    <section className="menu-item">
      <h2 className="menu-title">
        {lang.includes("es")
          ? " Selecciona un Modelo de IA"
          : "Select an AI Model"}
      </h2>
      <div className="select">
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

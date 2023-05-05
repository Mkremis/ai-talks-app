
import React from "react";
const Languages = ({ voices, lang, handleLangChange }) => {
  if (voices.length > 0) {
    // console.log(voices);
    
    return (
      <section className="menu-item">
        <div className="menu-title">
          <h2>
            {lang.includes("es") ? "Selecciona un Idioma" : "Select a language"}
          </h2>
        </div>
        <div className="select">
          <select
            name="voices"
            id="voices"
            className="voices"
            onChange={handleLangChange}
          >
            {voices.map((voice, i) => {
              return (
                <option key={i} value={voice.lang}>
                  {voice.name}
                </option>
              );
            })}
          </select>
        </div>
      </section>
    );
  }
};
export default Languages;

import React from 'react';
import './Languages.css';
const Languages = ({ voices, lang, handleLangChange }) => {
  if (voices.length > 0) {
    return (
      <section className="languages">
        <div className="languages-title">
          <h2>Selecciona un Idioma</h2>
        </div>
        <div className="select-languages">
          <select
            name="voices"
            id="voices"
            className="voices"
            value={lang}
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

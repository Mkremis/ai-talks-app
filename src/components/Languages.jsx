import React from 'react';
import './Languages.css';
const Languages = ({ voices, lang, handleLangChange }) => {
  if (voices.length > 0) {
    return (
      <aside className="Languages">
        <div className="select">
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
      </aside>
    );
  }
};
export default Languages;

import React from 'react';
import './Menu.css';
const Menu = ({ voices, lang, handleLangChange }) => {
  if (voices.length > 0) {
    return (
      <aside className="menu">
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
export default Menu;

import React from 'react';
import './Menu.css';
const Menu = ({ voices, lang, handleLangChange }) => {
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
          {voices.length > 0 &&
            voices.map((voice, i) => {
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
};
export default Menu;

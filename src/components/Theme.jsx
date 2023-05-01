import React from "react";

const Theme = ({lang, theme, THEMES, handleThemeChange}) => {

    return (
      <section className="menu-item">
        <div className="menu-title">
          <h2>
            {lang.includes("es") ? "Selecciona la apariencia" : "Select the appearance"}
          </h2>
        </div>
        <div className="select">
          <select
            name="theme"
            id="theme"
            className="voices"
            onChange={handleThemeChange}
          >
            {THEMES.map((theme, i) => {
              return (
                <option key={i} value={i}>
                  {theme}
                </option>
              );
            })}
          </select>
        </div>
      </section>
    );
  }
export default Theme;

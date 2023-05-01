import './Menu.css';
import Models from './Models';
import Languages from './Languages';
import Temperatures from './Temperatures';
import Avatars from './Avatars';
import Theme from './Theme';


const Menu = ({
  isOpen,
  voices,
  lang,
  handleLangChange,
  temperature,
  handleTemperature,
  model,
  handleModel,
  theme,
  THEMES,
  handleThemeChange
}) => {
  return (
    <article className={`modal ${isOpen && 'is-open'}`}>
      <nav className="menu">
        <Theme lang={lang} theme={theme} THEMES={THEMES} handleThemeChange={handleThemeChange}/>
        <Models model={model} handleModel={handleModel} lang={lang} />
        <Languages
          voices={voices}
          lang={lang}
          handleLangChange={handleLangChange}
        />
        <Temperatures
          temperature={temperature}
          handleTemperature={handleTemperature}
          lang={lang}
        />
        <Avatars  lang={lang} theme={theme}/>
        <footer className="footer">
          <span>Created by </span>
          <a href="https://github.com/Mkremis" target="_blank">
            Martin Kremis
          </a>
        </footer>
      </nav>
    </article>
  );
};

export default Menu;

import './Menu.css';
import Models from './Models';
import Languages from './Languages';
import Temperatures from './Temperatures';
import Avatars from './Avatars';


const Menu = ({
  isOpen,
  voices,
  lang,
  handleLangChange,
  temperature,
  handleTemperature,
  model,
  handleModel,
  AVATARS,
  avatarIndex,
  handleNextAvatar,
  handlePrevAvatar
}) => {
  return (
    <article className={`modal ${isOpen && 'is-open'}`}>
      <nav className="menu">
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
        <Avatars  lang={lang} />
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

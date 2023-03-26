import react from 'react';
import './QueryText.css';

const QueryText = ({ handleKeyPress, handleChange, prompt }) => {
  return (
    <section className="content-question__text">
      <textarea
        cols="25"
        rows="5"
        className="content-question__text-input"
        placeholder="Escribe tu pregunta o haz click en el micrófono para hablar."
        onKeyUp={handleKeyPress}
        onChange={handleChange}
        value={prompt}
      />
    </section>
  );
};
export default QueryText;

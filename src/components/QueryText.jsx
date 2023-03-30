import react from 'react';
import './QueryText.css';

const QueryText = ({
  handleKeyPress,
  handleSendQuery,
  handleChange,
  prompt,
  lang,
}) => {
  return (
    <section className="content-question__text">
      <textarea
        cols="25"
        rows="5"
        className="content-question__text-input"
        placeholder={
          lang.includes('es')
            ? 'Escribe tu pregunta o haz click en el micrófono para hablar'
            : 'Type your question or click the microphone to speak'
        }
        onKeyUp={handleKeyPress}
        onChange={handleChange}
        value={prompt}
      />
      <button onClick={handleSendQuery} className="send_query">
        <span className="material-symbols-outlined">send</span>
      </button>
    </section>
  );
};
export default QueryText;

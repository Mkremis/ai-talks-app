import React from 'react';
import './ResponseText.css';
const ResponseText = ({ loading, response, lang }) => {
  let text;
  if (loading) {
    text = loading;
  } else {
    if (response) {
      text = response;
    } else {
      text = '';
    }
  }
  return (
    <section className="content-response__text">
      <textarea
        cols="25"
        rows="5"
        className="content-question__text-input"
        value={text}
        readOnly={true}
        placeholder={
          lang.includes('es')
            ? 'Aquí veras la respuesta escrita de la IA'
            : 'Here you will see the written response of the AI'
        }
      />
    </section>
  );
};
export default ResponseText;

import React from 'react';
import './ResponseText.css';
const ResponseText = ({ loading, loader, response }) => {
  let text;
  if (loading) {
    text = loader;
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
        placeholder="Aquí veras la respuesta escrita de la IA."
      />
    </section>
  );
};
export default ResponseText;

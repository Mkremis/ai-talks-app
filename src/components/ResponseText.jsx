import React from 'react';
import './ResponseText.css';
const ResponseText = ({ loading, loader, response }) => {
  return (
    <section className="content-response__text">
      {loading && <p>{loader}</p>}
      {response && <p>{response}</p>}
    </section>
  );
};
export default ResponseText;

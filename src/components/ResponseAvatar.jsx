import React from 'react';
import './ResponseAvatar.css';
const ResponseAvatar = ({ speaking, talking, no_talking, handleStopSpeak }) => {
  return (
    <section className="content-response__avatar">
      <img
        className="content-response__avatar-img"
        src={speaking ? talking : no_talking}
        alt="Talking face"
        onClick={handleStopSpeak}
      />
    </section>
  );
};
export default ResponseAvatar;

import React, { useEffect, useState } from 'react';

const useSpeechCommand = (handleStart, setListening) => {
  const command = 'pregunta';
  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'es-ES';

  const startRecognition = () => {
    recognition.start();
  };

  const stopRecognition = () => {
    recognition.stop();
  };
  const abortRecognition = () => {
    recognition.abort();
  };
  recognition.onresult = (event) => {
    let result = event.results[event.results.length - 1][0].transcript;
    result.trim().toLowerCase();
    console.log(result);
    if (result.includes(command)) {
      recognition.abort();
      handleStart();
    } else {
      console.log(`${result} no es un comando valido`);
    }
  };

  recognition.onerror = (event) => {
    console.log(`Speech recognition error: ${event.error}`);
    recognition.abort();
    recognition.start();
  };

  recognition.onend = () => {
    console.log('Speech recognition ended.');
    // stopRecognition();
    abortRecognition();
    setListening(false);
  };
  return startRecognition;
};
export default useSpeechCommand;

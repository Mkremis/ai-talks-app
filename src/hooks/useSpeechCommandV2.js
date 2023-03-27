import React, { useEffect, useState } from 'react';

const useSpeechCommand = (handleStart) => {
  const [recognized, setRecognized] = useState(null);
  useEffect(() => {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList;
    var SpeechRecognitionEvent =
      SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

    let recognition = new SpeechRecognition();
    if (SpeechGrammarList) {
      let speechRecognitionList = new SpeechGrammarList();
      var grammar = '#JSGF V1.0; public <pregunta> = pregunta';
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;
    }
    recognition.continuous = false;
    recognition.lang = 'es-ES';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function (event) {
      var command = event.results[0][0].transcript;
      console.log('Result received: ' + command + '.');
      console.log('Confidence: ' + event.results[0][0].confidence);
      handleStart();
    };

    recognition.onspeechend = function () {
      recognition.stop();
    };

    recognition.onnomatch = function (event) {
      console.log("I didn't recognise the command.");
    };

    recognition.onerror = function (event) {
      console.log('Error occurred in recognition: ' + event.error);
    };
    recognition.start();
    console.log('Ready to receive a command.');
  }, []);

  return recognized;
};

export default useSpeechCommand;

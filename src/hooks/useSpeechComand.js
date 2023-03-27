import React, { useEffect, useState } from 'react';

const useSpeechComand = () => {
  const [recognized, setRecognized] = useState(null);
  useEffect(() => {
    // const SpeechRecognition = window.webkitSpeechRecognition;
    // const SpeechGrammarList = window.webkitSpeechGrammarList;
    // const SpeechRecognitionEvent = window.webkitSpeechRecognitionEvent;
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList;
    var SpeechRecognitionEvent =
      SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

    var commands = ['pregunta'];

    var recognition = new SpeechRecognition();
    if (SpeechGrammarList) {
      // SpeechGrammarList is not currently available in Safari, and does not have any effect in any other browser.
      // This code is provided as a demonstration of possible capability. You may choose not to use it.
      var speechRecognitionList = new SpeechGrammarList();
      var grammar =
        '#JSGF V1.0; grammar colors; public <color> = ' +
        commands.join(' | ') +
        ' ;';
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;
    }
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function (event) {
      // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
      // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
      // It has a getter so it can be accessed like an array
      // The first [0] returns the SpeechRecognitionResult at the last position.
      // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
      // These also have getters so they can be accessed like arrays.
      // The second [0] returns the SpeechRecognitionAlternative at position 0.
      // We then return the transcript property of the SpeechRecognitionAlternative object
      var color = event.results[0][0].transcript;
      console.log('Result received: ' + color + '.');
      console.log('Confidence: ' + event.results[0][0].confidence);
    };

    recognition.onspeechend = function () {
      recognition.stop();
    };

    recognition.onnomatch = function (event) {
      console.log("I didn't recognise that color.");
    };

    recognition.onerror = function (event) {
      console.log('Error occurred in recognition: ' + event.error);
    };
    recognition.start();
    console.log('Ready to receive a color command.');
  }, []);

  return recognized;
};

export default useSpeechComand;

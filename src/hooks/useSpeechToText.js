import { useState } from 'react';

const useSpeechToText = (setPrompt, setQuery, lang) => {
  const [recognition, setRecognition] = useState(null);
  const [mic, setMic] = useState(false);

  const handleStart = () => {
    if (!mic) {
      let queryRecognition = new window.webkitSpeechRecognition();
      queryRecognition.lang = lang;
      queryRecognition.onresult = (event) => {
        let res = event.results[0][0].transcript;
        setPrompt(res);
        setQuery(res);
      };
      queryRecognition.onstart = () => setMic(true);

      queryRecognition.onend = () => setMic(false);
      setRecognition(recognition);
      queryRecognition.start();
    } else {
      return;
    }
  };

  return [handleStart, mic];
};

export default useSpeechToText;

import { useEffect, useState } from 'react';
import notification from '../assets/notification.mp3';

const useSpeechToText = (setPrompt, setQuery) => {
  const [recognition, setRecognition] = useState(null);
  const [mic, setMic] = useState(false);

  const handleStart = () => {
    if (!mic) {
      let queryRecognition = new window.webkitSpeechRecognition();
      queryRecognition.lang = 'es-ES'; // establece el idioma de reconocimiento a español
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
  useEffect(() => {
    if (mic) {
      new Audio(notification);
      // notification.currentTime = 0;
      notification.play();
    }
  }, [mic]);

  return [handleStart, mic];
};

export default useSpeechToText;

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
      queryRecognition.onstart = () => {
        setMic(true);
        const notif = () => {
          const sound = new Audio(notification);
          sound.currentTime = 0;
          sound.play();
        };
        let fakeButton = document.getElementById('fakeButton');
        fakeButton.dispatchEvent = () => notif();
        let clickEvent = new Event('click');
        fakeButton.dispatchEvent(clickEvent);
      };
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

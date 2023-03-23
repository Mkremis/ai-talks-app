import { useEffect, useState } from 'react';

const useSpeechToText = (setPrompt, setQuery) => {
  const [recognition, setRecognition] = useState(null);
  const [mic, setMic] = useState(false);
  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'es-ES'; // establece el idioma de reconocimiento a español
    recognition.onresult = (event) => {
      const res = event.results[0][0].transcript;
      setPrompt(res);
      setQuery(res);
    };
    recognition.onstart = () => setMic(true);
    recognition.onend = () => setMic(false);
    setRecognition(recognition);
  }, [setPrompt]);
  const handleStart = () => {
    !mic && recognition.start();
  };

  return [handleStart, mic];
};

export default useSpeechToText;

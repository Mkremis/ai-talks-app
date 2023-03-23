import { useState, useEffect } from 'react';

const useTextToSpeech = (response, setResponse, setPrompt, query, setQuery) => {
  const [speaking, setSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const synth = window.speechSynthesis;
  const loader = 'aguarda...';

  //loader activation
  useEffect(() => {
    if (query && !response) {
      setLoading(true);
      // handleSpeak(loader);
    }
  }, [query, response, setLoading]);
  //
  useEffect(() => {
    setLoading(false);
    if (response) {
      if (!synth.speaking) {
        handleSpeak(response);
      } else {
        synth.cancel();
        handleSpeak(response);
      }
    }
  }, [response, setLoading, speaking]);

  const handleSpeak = (text) => {
    setSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-US';
    utterance.onend = () => {
      setSpeaking(false);
      setLoading(false);
      setResponse('');
      setPrompt('');
      setQuery(null);
    };
    speechSynthesis.speak(utterance);
    let r = setInterval(function () {
      if (!speechSynthesis.speaking) clearInterval(r);
      else {
        speechSynthesis.pause();
        speechSynthesis.resume();
      }
    }, 3000);
  };

  const handleStopSpeak = () => {
    synth.cancel();
    setSpeaking(false);
    setResponse('');
    setPrompt('');
    setQuery(null);
  };

  return [speaking, handleStopSpeak, loader, loading];
};

export default useTextToSpeech;

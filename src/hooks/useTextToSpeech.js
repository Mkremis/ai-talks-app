import Artyom from 'artyom.js';
import { useState, useEffect } from 'react';
const loader = 'aguarda un momento por favor';
const useTextToSpeech = (response, setResponse, setPrompt, query, setQuery) => {
  const [speaking, setSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const artyom = new Artyom();
  artyom.initialize({ lang: 'es-ES' });
  console.log(artyom.getVoices());

  //loader activation
  useEffect(() => {
    if (query && !response) {
      setLoading(true);
      artyom.say(loader);
    }
  }, [query, response, setLoading]);

  useEffect(() => {
    if (response) {
      setLoading(false);
      artyom.say(response, {
        onStart: () => {
          setSpeaking(true);
        },
        onEnd: () => {
          setSpeaking(false);
          setResponse('');
          setPrompt('');
          setQuery(null);
        },
      });
    }
  }, [response, setLoading]);

  // useEffect(() => {
  //   if (speaking) {
  //     let r = setInterval(function () {
  //       if (!speechSynthesis.speaking) clearInterval(r);
  //       else {
  //         speechSynthesis.pause();
  //         speechSynthesis.resume();
  //       }
  //     }, 3000);
  //   }
  // }, [speaking]);

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

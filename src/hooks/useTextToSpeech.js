import Artyom from 'artyom.js';
import { useState, useEffect } from 'react';
const loader = 'aguarda un momento por favor';
const useTextToSpeech = (
  response,
  setResponse,
  setPrompt,
  query,
  setQuery,
  fakeButton
) => {
  const [speaking, setSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const artyom = new Artyom();
  artyom.initialize({ lang: 'es-ES' });
  // console.log(artyom.getVoices());

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
      const buttonEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      // fakeButton.dispatchEvent(buttonEvent);
      buttonEvent.onclick = artyom.say(response, {
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

  const handleStopSpeak = () => {
    artyom.shutUp();
    setSpeaking(false);
    setLoading(false);
    setResponse('');
    setPrompt('');
    setQuery(null);
  };

  return [speaking, handleStopSpeak, loader, loading];
};

export default useTextToSpeech;

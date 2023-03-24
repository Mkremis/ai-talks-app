import Artyom from 'artyom.js';
import { useState, useEffect } from 'react';
const loader = 'aguarda un momento por favor';
const useTextToSpeech = (response, setResponse, setPrompt, query, setQuery) => {
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
      let sayResponse = () => {
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
      };
      let fakeButton = {};
      fakeButton.dispatchEvent = sayResponse;
      let clickEvent = new Event('click');
      fakeButton.dispatchEvent(clickEvent);
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

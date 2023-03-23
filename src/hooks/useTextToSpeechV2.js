import Speech from 'speak-tts';
import { useState, useEffect } from 'react';
const loader = 'aguarda un momento por favor..';
const useTextToSpeech = (response, setResponse, setPrompt, query, setQuery) => {
  const [speaking, setSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');

  //Check for browser support :
  const speech = new Speech(); // will throw an exception if not browser supported
  if (speech.hasBrowserSupport()) {
    // returns a boolean
    console.log('speech synthesis supported');
  }
  //Init the speech component : const speech = new Speech();
  // Example with full conf
  speech.init({
    volume: 1,
    lang: 'es-US',
    rate: 1,
    pitch: 1,
    voice: null,
    splitSentences: true,
    listeners: {
      onvoiceschanged: (voices) => {
        console.log('Event voiceschanged', voices);
      },
    },
  });
  //seting language
  speech.setLanguage('es-US');

  //loader activation
  useEffect(() => {
    if (query && !response) {
      setLoading(true);
      setText(loader);
    }
  }, [query, response, setLoading]);

  useEffect(() => {
    if (response) {
      setLoading(false);
      setText(response);
    }
  }, [response, setLoading]);

  useEffect(() => {
    if (text) {
      speech
        .speak({
          text: text,
          queue: true,
          listeners: {
            onstart: () => {
              setSpeaking(true);
            },
            onend: () => {
              setText('');
              setSpeaking(false);
              setResponse('');
              setPrompt('');
              setQuery(null);
            },
          },
        })
        .then(() => {
          console.log('Success !');
        })
        .catch((e) => {
          console.error('An error occurred :', e);
        });
    }
  }, [text, setText, setSpeaking, setResponse, setPrompt, setQuery]);

  useEffect(() => {
    if (speaking) {
      let r = setInterval(function () {
        if (!speechSynthesis.speaking) clearInterval(r);
        else {
          speechSynthesis.pause();
          speechSynthesis.resume();
        }
      }, 3000);
    }
  }, [speaking]);

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

import Speech from 'speak-tts';
import { useState, useEffect } from 'react';

const useTextToSpeech = (response, setResponse, setPrompt, query, setQuery) => {
  const [speaking, setSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const synth = window.speechSynthesis;
  const loader = 'aguarda...';

  //Check for browser support :
  const speech = new Speech(); // will throw an exception if not browser supported
  // if (speech.hasBrowserSupport()) {
  //   // returns a boolean
  //   console.log('speech synthesis supported');
  // }
  //Init the speech component :
  // const speech = new Speech();
  speech
    .init({
      volume: 1,
      lang: 'es-US',
      rate: 1,
      pitch: 1,
      voice: 'Google español de Estados Unidos',
      splitSentences: true,
      listeners: {
        onvoiceschanged: (voices) => {
          console.log('Event voiceschanged', voices);
        },
      },
    })
    .then((data) => {
      // The "data" object contains the list of available voices and the voice synthesis params
      console.log('Speech is ready, voices are available', data);
    })
    .catch((e) => {
      console.error('An error occured while initializing : ', e);
    });

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
        // handleSpeak(response);
        speech
          .speak({
            text: response,
          })
          .then(() => {
            console.log('Success !');
          })
          .catch((e) => {
            console.error('An error occurred :', e);
          });
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

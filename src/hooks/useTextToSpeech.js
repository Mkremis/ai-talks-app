import Artyom from 'artyom.js';
import { useState, useEffect } from 'react';
const loader = 'aguarda un momento por favor';
const useTextToSpeech = (response, setResponse, setPrompt, query, setQuery) => {
  const [speaking, setSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState('es-ES');

  const speechService = new Artyom();
  const voices = speechService.getVoices();
  const handleLangChange = (e) => setLang(e.target.value);
  speechService.initialize({ lang, debug: false });

  useEffect(() => {
    setResponse(
      'Hola! Soy text-davinci-003. Para hacerme una pregunta solo haz click en el boton del micrófono. Para detener una respuesta haz click en mi imagen y podras hablarme nuevamente. Empecemos!'
    );
  }, []);

  //loader activation and speak the loader
  useEffect(() => {
    if (query && !response) {
      setLoading(true);
      speechService.say(loader);
    }
  }, [query, response, setLoading]);

  //speak the response
  useEffect(() => {
    if (response) {
      setLoading(false);
      //speaker function:
      let sayResponse = () => {
        speechService.say(response, {
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
      //due Chrome on mobile require an user event prior to able the speech service, this is a simulated user click event:
      let fakeButton = {};
      fakeButton.dispatchEvent = sayResponse;
      let clickEvent = new Event('click');
      fakeButton.dispatchEvent(clickEvent);
    }
  }, [response, setLoading]);

  const handleStopSpeak = () => {
    speechService.shutUp();
    setSpeaking(false);
    setLoading(false);
    setResponse('');
    setPrompt('');
    setQuery(null);
  };

  return [
    voices,
    lang,
    handleLangChange,
    speaking,
    handleStopSpeak,
    loader,
    loading,
  ];
};

export default useTextToSpeech;

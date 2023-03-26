import { useState, useEffect } from 'react';
const loader = 'aguarda...';
const useTextToSpeech = (response, setResponse, setPrompt, query, setQuery) => {
  const [speaking, setSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState('es-ES');
  const [lastResponse, setLastResponse] = useState('');
  const voices = window.speechSynthesis.getVoices();
  const handleLangChange = (e) => setLang(e.target.value);
  const synth = window.speechSynthesis;
  // Splits a string into an array of strings with a limited size (chunk_length):
  const splitStringByChunks = (input, chunk_length) => {
    input = input || '';
    chunk_length = chunk_length || 100;
    let curr = chunk_length;
    let prev = 0;
    let output = [];
    while (input[curr]) {
      if (input[curr++] == ' ') {
        output.push(input.substring(prev, curr));
        prev = curr;
        curr += chunk_length;
      }
    }
    output.push(input.substr(prev));
    return output;
  };
  //Talks a text according to the given parameters.
  const talk = (text, actualChunk, totalChunks) => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = lang;
    // If is first text chunk (onStart)
    if (actualChunk == 1) {
      setSpeaking(true);
    }
    // If is final text chunk (onEnd)
    if (actualChunk >= totalChunks) {
      msg.onend = () => {
        setSpeaking(false);
        setLoading(false);
        // setResponse('');
        setPrompt('');
        setQuery(null);
      };
    }
    //due Chrome on mobile require an user event prior to able the speech service, this is a simulated user click event:
    let fakeButton = {};
    fakeButton.dispatchEvent = () => window.speechSynthesis.speak(msg);
    let clickEvent = new Event('click');
    fakeButton.dispatchEvent(clickEvent);
  };
  // Process the given text into chunks and execute the function talk
  const handleSpeak = (text) => {
    const max_chunk_length = 115;
    let definitiveText = [];
    if (text.length > max_chunk_length) {
      // Split the given definitiveText by pause reading characters [",",":",";",". "] to provide a natural reading feeling.
      let naturalReading = text.split(/,|:|\. |;/);
      naturalReading.forEach((chunk) => {
        // If the sentence is too long and could block the API, split it to prevent any errors.
        if (chunk.length > max_chunk_length) {
          // Process the providen string into strings (withing an array) of maximum aprox. 115 characters to prevent any error with the API.
          let temp_processed = splitStringByChunks(chunk, max_chunk_length);
          // Add items of the processed sentence into the definitiveText chunk.
          definitiveText.push.apply(definitiveText, temp_processed);
        } else {
          // Otherwise just add the sentence to being spoken.
          definitiveText.push(chunk);
        }
      });
    } else {
      definitiveText.push(text);
    }
    // Clean any empty item in array
    definitiveText = definitiveText.filter((e) => e);
    definitiveText.forEach((chunk, index) => {
      let numberOfChunk = index + 1;
      if (chunk) {
        talk(chunk, numberOfChunk, definitiveText.length);
      }
    });
  };
  const handleStopSpeak = () => {
    synth.cancel();
    setSpeaking(false);
    setResponse('');
    setLastResponse('');
    setPrompt('');
    setQuery(null);
  };

  //loader activation
  useEffect(() => {
    if (query && response === lastResponse) {
      setLoading(true);
      handleSpeak(loader);
    }
  }, [query, response, setLoading]);
  //speech response
  useEffect(() => {
    if (response && response !== lastResponse) {
      setLoading(false);
      setLastResponse(response);
      handleSpeak(response);
    }
  }, [response, lastResponse, setLastResponse, setLoading, speaking]);

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

import 'the-new-css-reset/css/reset.css';
import talking from './assets/talking.gif';
import no_talking from './assets/no_talking.png';
// import viteLogo from '/vite.svg';
import './App.css';
import useChat from './hooks/useChat';
import useSpeechToText from './hooks/useSpeechToText';
import useTextToSpeech from './hooks/useTextToSpeech';
import MicButton from './components/MicButton';
import { useEffect, useState } from 'react';

function App() {
  const [voices, setVoices] = useState([]);
  useEffect(() => {
    setVoices(window.speechSynthesis.getVoices());
  }, []);

  const [
    handleKeyPress,
    prompt,
    setPrompt,
    response,
    setResponse,
    query,
    setQuery,
    handleChange,
  ] = useChat();
  const [lang, handleLangChange, speaking, handleStopSpeak, loader, loading] =
    useTextToSpeech(response, setResponse, setPrompt, query, setQuery);

  const [handleStart, mic] = useSpeechToText(setPrompt, setQuery);

  return (
    <main className="App">
      <header className="header">
        <h1>AI Talks</h1>
      </header>
      <aside className="menu">
        <select
          name="voices"
          id="voices"
          className="voices"
          value={lang}
          onChange={handleLangChange}
        >
          {voices.length > 0 &&
            voices.map((voice, i) => {
              return (
                <option key={i} value={voice.lang}>
                  {voice.name}
                </option>
              );
            })}
        </select>
      </aside>
      <div className="content">
        <article className="content-response">
          <section className="content-response__avatar">
            <img
              className="content-response__avatar-img"
              src={speaking ? talking : no_talking}
              alt="Talking face"
              onClick={handleStopSpeak}
            />
          </section>
          <section className="content-response__text">
            {loading && <p>{loader}</p>}
            {response && <p>{response}</p>}
          </section>
        </article>
        <article className="content-question">
          <section className="content-question__mic">
            <MicButton handleStart={handleStart} micIsActive={mic} />
          </section>
          <section className="content-question__text">
            <textarea
              className="content-question__text-input"
              placeholder="Escribe tu pregunta o haz click en el micrófono para hablar."
              onKeyUp={handleKeyPress}
              onChange={handleChange}
              value={prompt}
            />
          </section>
        </article>
      </div>
    </main>
  );
}

export default App;

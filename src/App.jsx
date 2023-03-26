import 'the-new-css-reset/css/reset.css';
import talking from './assets/talking.gif';
import no_talking from './assets/no_talking.png';
// import viteLogo from '/vite.svg';
import './App.css';
import useChat from './hooks/useChat';
import useSpeechToText from './hooks/useSpeechToText';
import useTextToSpeech from './hooks/useTextToSpeech';

import Menu from './components/Menu';
import Header from './components/Header';
import ResponseAvatar from './components/ResponseAvatar';
import ResponseText from './components/ResponseText';
import QueryMic from './components/QueryMic';
import QueryText from './components/QueryText';

function App() {
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
  const [handleStart, mic] = useSpeechToText(setPrompt, setQuery);
  const [
    voices,
    lang,
    handleLangChange,
    speaking,
    handleStopSpeak,
    loader,
    loading,
  ] = useTextToSpeech(response, setResponse, setPrompt, query, setQuery);

  return (
    <main className="App">
      <Header />
      <Menu voices={voices} lang={lang} handleLangChange={handleLangChange} />
      <div className="content">
        <article className="content-response">
          <ResponseAvatar
            speaking={speaking}
            talking={talking}
            no_talking={no_talking}
            handleStopSpeak={handleStopSpeak}
          />
          <ResponseText loading={loading} loader={loader} response={response} />
        </article>
        <article className="content-question">
          <QueryMic handleStart={handleStart} micIsActive={mic} />
          <QueryText
            handleKeyPress={handleKeyPress}
            handleChange={handleChange}
            prompt={prompt}
          />
        </article>
      </div>
    </main>
  );
}

export default App;

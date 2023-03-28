import 'the-new-css-reset/css/reset.css';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

import talking from './assets/talking.gif';
import no_talking from './assets/no_talking.png';
// import viteLogo from '/vite.svg';
import './App.css';
import useChat from './hooks/useChat';
import useSpeechToText from './hooks/useSpeechToText';
import useTextToSpeech from './hooks/useTextToSpeech';

import MediaQuery from 'react-responsive';
import Menu from './components/Menu';
import Header from './components/Header';
import ResponseAvatar from './components/ResponseAvatar';
import ResponseText from './components/ResponseText';
import QueryMic from './components/QueryMic';
import QueryText from './components/QueryText';
import useSpeechCommand from './hooks/useSpeechCommand';
useSpeechCommand;

function App() {
  const [listening, setListening] = useState(false);
  const [
    handleKeyPress,
    handleSendQuery,
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
  const startRecognition = useSpeechCommand(handleStart, setListening);

  useEffect(() => {
    if (!query && !speaking && !mic && !loading) setListening(true);
    console.log('query', query);
    console.log('listening', listening);
  }, [query, speaking, mic, loading]);

  useEffect(() => {
    if (listening) startRecognition();
  }, [listening]);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        'material-symbols-outlined ' +
        className +
        '">' +
        (index === 0 ? 'headset_mic' : 'edit_note') +
        '</span>'
      );
    },
  };

  return (
    <main className="App">
      <Header />
      <Menu voices={voices} lang={lang} handleLangChange={handleLangChange} />
      <div className="content">
        <article className="content-response">
          <MediaQuery query="(max-width: 600px)">
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ResponseAvatar
                  speaking={speaking}
                  talking={talking}
                  no_talking={no_talking}
                  handleStopSpeak={handleStopSpeak}
                />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ResponseText
                  loading={loading}
                  loader={loader}
                  response={response}
                />
              </SwiperSlide>
            </Swiper>
          </MediaQuery>
          <MediaQuery query="(min-width: 600px)">
            <ResponseAvatar
              speaking={speaking}
              talking={talking}
              no_talking={no_talking}
              handleStopSpeak={handleStopSpeak}
            />

            <ResponseText
              loading={loading}
              loader={loader}
              response={response}
            />
          </MediaQuery>
        </article>
        <article className="content-question">
          <MediaQuery query="(max-width: 600px)">
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <QueryMic handleStart={handleStart} micIsActive={mic} />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <QueryText
                  handleKeyPress={handleKeyPress}
                  handleSendQuery={handleSendQuery}
                  handleChange={handleChange}
                  prompt={prompt}
                />
              </SwiperSlide>
            </Swiper>
          </MediaQuery>
          <MediaQuery query="(min-width: 600px)">
            <QueryMic handleStart={handleStart} micIsActive={mic} />
            <QueryText
              handleKeyPress={handleKeyPress}
              handleSendQuery={handleSendQuery}
              handleChange={handleChange}
              prompt={prompt}
            />
          </MediaQuery>
        </article>
      </div>
    </main>
  );
}

export default App;

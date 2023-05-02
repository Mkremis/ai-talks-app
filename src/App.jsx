import 'the-new-css-reset/css/reset.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

import './App.css';
import useChat from './hooks/useChat';
import useSpeechToText from './hooks/useSpeechToText';
import useTextToSpeech from './hooks/useTextToSpeech';
import useModal from './hooks/useModal';
import useWindowSize from './hooks/useWindowSize';

import MediaQuery from 'react-responsive';
import Header from './components/Header';
import Menu from './components/Menu';
import ResponseAvatar from './components/ResponseAvatar';
import ResponseText from './components/ResponseText';
import QueryMic from './components/QueryMic';
import QueryText from './components/QueryText';
import { ContextProvider } from './context/GlobalContext';
import useTheme from './hooks/useTheme';
import Theme from './components/Theme';




function App() {
  const {theme, THEMES, handleThemeChange} = useTheme()
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
    temperature,
    handleTemperature,
    model,
    handleModel,
  ] = useChat();

  const [voices, lang, handleLangChange, speaking, handleStopSpeak, loading] =
    useTextToSpeech(response, setResponse, setPrompt, query, setQuery);
  const [handleStart, mic] = useSpeechToText(setPrompt, setQuery, lang);
  const [isOpen, openModal, closeModal] = useModal();

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
  
 const size = useWindowSize();
 const responseStyles = {
  green:{
    padding: '1rem',
    flexBasis: `${size.height/2}px`,
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'flex-start',
    // justifyContent: 'center',
  },
  modern:{
    flexBasis: `${size.height*0.8}px`,
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'flex-start',
    // justifyContent: 'center',
  },
  };

 
  return (
    <ContextProvider>
    <main className={`app app-${theme}`} style={{height:`${size.height}px`}}>
      <Header isOpen={isOpen} openModal={openModal} closeModal={closeModal} />
      <Menu
        isOpen={isOpen}
        voices={voices}
        lang={lang}
        temperature={temperature}
        handleLangChange={handleLangChange}
        handleTemperature={handleTemperature}
        model={model}
        handleModel={handleModel}
        theme={theme}
        THEMES={THEMES}
        handleThemeChange={handleThemeChange}
      />
    
      <div className="content">
        
          <MediaQuery query="(max-width: 600px)">
          <article className={`content-response_mobile-${theme}`} style={responseStyles[theme]}>
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
                  handleStopSpeak={handleStopSpeak} 
                  theme={theme}
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
                  response={response}
                  lang={lang}
                  theme={theme}
                />
              </SwiperSlide>
            </Swiper>
            </article>
          </MediaQuery>
          <MediaQuery query="(min-width: 600px)">
          <article className="content-response_desktop">
            <ResponseAvatar
              speaking={speaking}
              handleStopSpeak={handleStopSpeak}
              theme={theme}
            />

            <ResponseText loading={loading} response={response} lang={lang} theme={theme} />
            </article>
          </MediaQuery>
       
       
          <MediaQuery query="(max-width: 600px)">
          <article className={`content-question_mobile-${theme}`}>
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
                <QueryMic handleStart={handleStart} micIsActive={mic} theme={theme}/>
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
                  lang={lang}
                  theme={theme}
                />
              </SwiperSlide>
            </Swiper>
            </article>
          </MediaQuery>
          <MediaQuery query="(min-width: 600px)">
          <article className="content-question_desktop">
            <QueryMic handleStart={handleStart} micIsActive={mic} theme={theme}/>
            <QueryText
              handleKeyPress={handleKeyPress}
              handleSendQuery={handleSendQuery}
              handleChange={handleChange}
              prompt={prompt}
              theme={theme}
            />
             </article>
          </MediaQuery>
       
      </div>
      <button id="fakeButton" hidden={true}></button>
    </main>
    </ContextProvider>
  );
}

export default App;

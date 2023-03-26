import { Configuration, OpenAIApi } from 'openai';
import { useEffect, useState } from 'react';

const useChat = () => {
  const [prompt, setPrompt] = useState('');
  const [query, setQuery] = useState(null);
  const [response, setResponse] = useState('');

  const chat = async (prompt) => {
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      // apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 900,
      temperature: 1,
    });

    setResponse(response.data.choices[0].text);
  };
  useEffect(() => {
    if (query) chat(query);
  }, [query]);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      setQuery(prompt);
    }
  };
  const handleSendQuery = () => setQuery(prompt);
  const handleChange = (e) => setPrompt(e.target.value);

  return [
    handleKeyPress,
    handleSendQuery,
    prompt,
    setPrompt,
    response,
    setResponse,
    query,
    setQuery,
    handleChange,
  ];
};

export default useChat;

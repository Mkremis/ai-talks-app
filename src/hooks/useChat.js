import { Configuration, OpenAIApi } from 'openai';
import { useEffect, useState } from 'react';

const useChat = () => {
  const [prompt, setPrompt] = useState('');
  const [query, setQuery] = useState(null);
  const [response, setResponse] = useState('');
  const [temperature, setTemperature] = useState(0.2);
  const [model, setModel] = useState('text-davinci-003');
  const bulletReplace = (text) => {
    // Separamos el texto en líneas
    const lines = text.split('\n');
    // Expresión regular que busca líneas con viñetas de guiones
    // const regexBullets = /^ *- (.*)$/;
    const regexBullets = /^ *- ?(.*)$/;
    // Contador para las enumeraciones
    let counter = 1;
    // Recorremos cada línea del texto
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Si la línea tiene viñetas de guiones
      if (regexBullets.test(line)) {
        // Reemplazamos la viñeta por una enumeración
        const newLine = line.replace(regexBullets, ` ${counter}. $1.`);
        lines[i] = newLine;
        counter++;
      }
    }
    // Unimos las líneas y devolvemos el texto modificado
    return lines.join('\n');
  };
  const handleTemperature = (temp) => setTemperature(temp);
  const handleModel = (e) => setModel(e.target.value);
  const chat = async (prompt) => {
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      // apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    // console.log(model);
    try {
      const res = await openai.createCompletion({
        model,
        prompt,
        max_tokens: 900,
        temperature,
      });
      if (res) {
        setResponse(bulletReplace(res.data.choices[0].text));
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
      setResponse(err);
    }
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
    temperature,
    handleTemperature,
    model,
    handleModel,
  ];
};

export default useChat;

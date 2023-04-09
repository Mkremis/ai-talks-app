import react from "react";
import Box from "./Box";

const QueryText = ({
  handleKeyPress,
  handleSendQuery,
  handleChange,
  prompt,
  lang,
}) => {
  lang = lang || "es";
  return (
    <Box text={true}>
      <textarea
        cols="25"
        rows="5"
        className="text-area"
        placeholder={
          lang.includes("es")
            ? "Escribe tu pregunta o haz click en el micrófono para hablar"
            : "Type your question or click the microphone to speak"
        }
        onKeyUp={handleKeyPress}
        onChange={handleChange}
        value={prompt}
      />
      <button onClick={handleSendQuery} className="send_query">
        <span className="material-symbols-outlined">send</span>
      </button>
    </Box>
  );
};
export default QueryText;

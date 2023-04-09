import React from "react";
import Box from "./Box";

const ResponseText = ({ loading, response, lang }) => {
  let text;
  if (loading) {
    text = loading;
  } else {
    if (response) {
      text = response;
    } else {
      text = "";
    }
  }
  return (
    <Box text={true}>
      <textarea
        cols="25"
        rows="5"
        className="text-area"
        value={text}
        readOnly={true}
        placeholder={
          lang.includes("es")
            ? "Aquí veras la respuesta escrita de la IA"
            : "Here you will see the written response of the AI"
        }
      />
    </Box>
  );
};
export default ResponseText;

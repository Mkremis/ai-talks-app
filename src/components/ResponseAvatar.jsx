import React from "react";
import Box from "./Box";
const ResponseAvatar = ({ speaking, talking, no_talking, handleStopSpeak }) => {
  return (
    <Box text={false}>
      <img
        className="avatar"
        src={speaking ? talking : no_talking}
        alt="Talking face"
        onClick={handleStopSpeak}
      />
    </Box>
  );
};
export default ResponseAvatar;

import React from "react";
import Box from "./Box";

const ResponseAvatar = ({
  speaking,
  handleStopSpeak,
  theme,
  AVATARS,
  avatarIndex,
}) => {
  return (
    <Box text={false} theme={theme}>
      {speaking ? (
        <img
          className="avatar"
          src={`/${AVATARS[theme][avatarIndex]}-talking.gif`}
          alt="AI talking"
          onClick={handleStopSpeak}
        />
      ) : (
        <img
          className="avatar"
          src={`/${AVATARS[theme][avatarIndex]}-no_talking.png`}
          alt="AI not talking"
          onClick={handleStopSpeak}
        />
      )}
    </Box>
  );
};
export default ResponseAvatar;

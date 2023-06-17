import React, { useEffect, useState } from "react";
import Box from "./Box";

const ResponseAvatar = ({
  speaking,
  handleStopSpeak,
  theme,
  AVATARS,
  avatarIndex,
}) => {
  const noTalking = `/${AVATARS[theme][avatarIndex]}-no_talking.png`;
  const talking = `/${AVATARS[theme][avatarIndex]}-talking.gif`;
  const [avatarNoTalking, setAvatarNoTalking] = useState(noTalking);
  const [avatarTalking, setAvatarTalking] = useState(talking);

  return (
    <Box text={false} theme={theme}>
      {speaking ? (
        <img
          className="avatar"
          src={avatarTalking}
          alt="AI talking"
          onClick={handleStopSpeak}
        />
      ) : (
        <img
          className="avatar"
          src={avatarNoTalking}
          alt="AI not talking"
          onClick={handleStopSpeak}
        />
      )}
    </Box>
  );
};
export default ResponseAvatar;

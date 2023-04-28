import React, { useEffect, useState, useContext } from "react"; 
import Box from "./Box";
import GlobalContext from "../context/GlobalContext";

const ResponseAvatar = ({ speaking, handleStopSpeak }) => {
  const {AVATARS, avatarIndex} = useContext(GlobalContext)
  const initialAvatar = `/${AVATARS[avatarIndex]}-no_talking.png`
  const [currentAvatar, setCurrentAvatar]=useState(initialAvatar)
  useEffect(()=>{
speaking
?setCurrentAvatar(`/${AVATARS[avatarIndex]}-talking.gif`)
:setCurrentAvatar(`/${AVATARS[avatarIndex]}-no_talking.png`)
  },[speaking, setCurrentAvatar, avatarIndex])
 
  return (
    <Box text={false}>
      <img
        className="avatar"
        src={currentAvatar}
        alt="Talking face"
        onClick={handleStopSpeak}
      />
    </Box>
  );
};
export default ResponseAvatar;

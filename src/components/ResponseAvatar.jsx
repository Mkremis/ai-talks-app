import React, { useEffect, useState, useContext } from "react"; 
import Box from "./Box";
import GlobalContext from "../context/GlobalContext";

const ResponseAvatar = ({ speaking, handleStopSpeak, theme }) => {
  const {AVATARS, avatarIndex} = useContext(GlobalContext);
  const initialAvatar = `/${AVATARS[theme][avatarIndex]}-no_talking.png`
  const [currentAvatar, setCurrentAvatar]=useState(initialAvatar)

  useEffect(()=>{
speaking
?setCurrentAvatar(`/${AVATARS[theme][avatarIndex]}-talking.gif`)
:setCurrentAvatar(`/${AVATARS[theme][avatarIndex]}-no_talking.png`)
  },[speaking, setCurrentAvatar, avatarIndex, theme]);

 const imgStyle={
  green:{
    objectFit:'cover'
  },
  modern:{
    height: '100%',
  }
 }
  return (
    <Box text={false} theme={theme}>
      <img
        className="avatar"
        src={currentAvatar}
        alt="Talking face"
        style={imgStyle[theme]}
        onClick={handleStopSpeak}
      />
    </Box>
  );
};
export default ResponseAvatar;

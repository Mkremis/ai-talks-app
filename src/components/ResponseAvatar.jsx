import React, { useEffect, useState} from "react"; 
import Box from "./Box";

const ResponseAvatar = ({ speaking, handleStopSpeak, theme, AVATARS, avatarIndex }) => {
  const initialAvatar = new Image().src =`/${AVATARS[theme][avatarIndex]}-no_talking.png`
  const [currentAvatar, setCurrentAvatar]=useState(initialAvatar)

  
  useEffect(()=>{
speaking
?setCurrentAvatar(new Image().src = `/${AVATARS[theme][avatarIndex]}-talking.gif`)
:setCurrentAvatar(new Image().src =`/${AVATARS[theme][avatarIndex]}-no_talking.png`)
  },[speaking, setCurrentAvatar, avatarIndex, theme]);
alert(currentAvatar)
 return (
    <Box text={false} theme={theme} onClick={handleStopSpeak>
   //   {currentAvatar}
    </Box>
  );
};
export default ResponseAvatar;

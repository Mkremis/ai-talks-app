import { useState } from 'react';
const AVATARS=['blond', 'header', 'jenny']
const useAvatar =()=>{
    const [avatar, setAvatar]=useState(0)

    const handleNextAvatar=()=>{
    avatar === AVATARS.length-1 ?setAvatar(0) :setAvatar(avatar+1)
    };
    const handlePrevAvatar=()=>{
      avatar === 0 ?setAvatar(AVATARS.length-1) :setAvatar(avatar-1)
      };

return{AVATARS, avatar, handleNextAvatar, handlePrevAvatar}
}
export default useAvatar;
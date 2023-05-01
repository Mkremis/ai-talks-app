import { useState } from 'react';
const AVATARS=['dilraba','blond', 'amber', 'header', 'jenny', 'nataly']
const useAvatar =()=>{
    const [avatarIndex, setAvatarIndex]=useState(0)

    const handleNextAvatar=()=>{
    avatarIndex === AVATARS.length-1 ?setAvatarIndex(0) :setAvatarIndex(avatarIndex+1)
    };
    const handlePrevAvatar=()=>{
      avatarIndex === 0 ?setAvatarIndex(AVATARS.length-1) :setAvatarIndex(avatarIndex-1)
      };

return{AVATARS, avatarIndex, handleNextAvatar, handlePrevAvatar}
}
export default useAvatar;
import { useEffect, useState } from 'react';
const AVATARS={
  green:['dilraba','blond', 'amber', 'header', 'jenny'],
  modern: ['brunette', 'nataly']
}
const useAvatar =({theme})=>{
    const [avatarIndex, setAvatarIndex]=useState(0)
    useEffect(()=>{
      setAvatarIndex(0)
    },[theme, setAvatarIndex])

    const handleNextAvatar=()=>{
    avatarIndex === AVATARS[theme].length-1 ?setAvatarIndex(0) :setAvatarIndex(avatarIndex+1)
    };
    const handlePrevAvatar=()=>{
      avatarIndex === 0 ?setAvatarIndex(AVATARS[theme].length-1) :setAvatarIndex(avatarIndex-1)
      };

return{AVATARS, avatarIndex, handleNextAvatar, handlePrevAvatar}
}
export default useAvatar;
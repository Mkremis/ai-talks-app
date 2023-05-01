import React, { createContext} from "react";
import useAvatar from "../hooks/useAvatar";

const GlobalContext = createContext();
const ContextProvider = ({ children }) => {
   const{AVATARS, avatarIndex, handleNextAvatar, handlePrevAvatar}=useAvatar()
 
      const data = {
        AVATARS,
        avatarIndex,
        handleNextAvatar,
        handlePrevAvatar,
      }
      return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>;
}
export { ContextProvider };
export default GlobalContext;
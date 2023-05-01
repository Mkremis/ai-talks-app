import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const Avatars = ({lang, theme}) => {
 const {AVATARS, avatarIndex, handleNextAvatar, handlePrevAvatar} = useContext(GlobalContext)
  return (
    <section className="menu-item">
      <h2 className="menu-title">
        {lang.includes("es")
          ? "  Selecciona un avatar"
          : "Select the avatar"}
      </h2>
      <div className="avatar-selector" style={{paddingBottom:'1rem',width:"100%",display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div className="avatar-selector_prev" style={{cursor:"pointer",flexBasis:'20%', fontSize:"2rem"}} onClick={handlePrevAvatar}>◀</div>
        <div className="avatar-selector_current style={{flexBasis:'60%'}}">
         <img src={`/${AVATARS[theme][avatarIndex]}-no_talking.png`} alt="current avatar" style={{width:"80px"}}/>
        </div>
        <div className="avatar-selector_next" style={{cursor:"pointer",flexBasis:'20%', fontSize:"1.5rem"}} onClick={handleNextAvatar}>▶</div>
      </div>
    </section>
  );
};

export default Avatars;

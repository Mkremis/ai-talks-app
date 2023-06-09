import React from "react";

const Header = ({ isOpen, openModal, closeModal }) => {
  const handleMenu = () => (isOpen ? closeModal() : openModal());
  return (
    <header
      style={{
        position: "relative",
        fontFamily: "Rubik Dirt, cursive",
        fontSize: "2rem",
        flex: "0 0 10%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <span
          className="material-symbols-outlined"
          onClick={handleMenu}
          style={{ cursor: "pointer" }}
        >
          {isOpen ? "Menu_open" : "Menu"}
        </span>
      </div>
      <div
        style={{
          flex: "0 0 80%",
        }}
      >
        <h1>AI Talks</h1>
      </div>
      <div
        style={{
          flex: "0 0 10%",
        }}
      ></div>
    </header>
  );
};
export default Header;

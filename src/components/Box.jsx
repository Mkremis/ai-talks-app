import React from "react";
import "./Box.css";

const Box = ({ children, text }) => {
  return <div className={text ? "box-text" : "box"}>{children}</div>;
};
export default Box;

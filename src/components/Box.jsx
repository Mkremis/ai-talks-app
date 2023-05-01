import React from "react";
import "./Box.css";

const Box = ({ children, text, theme}) => {

  return <div className={text ? "box-text" : `box box-${theme}`}>{children}</div>;
};
export default Box;

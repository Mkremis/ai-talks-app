import React from "react";
import "./Box.css";

const Box = ({ children, text}) => {

  return <div style={{ backgroundColor: 'rgb(82, 148, 66)'}} className={text ? "box-text" : "box"}>{children}</div>;
};
export default Box;

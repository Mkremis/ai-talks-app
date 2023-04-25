import React from "react";
import "./Box.css";

const Box = ({ children, text, avatar }) => {
  const backroundStyle= {
   nataly:{
    backgroundColor: 'rgb(0, 0, 0)'
   },
   jenny:{
    backgroundColor: 'rgb(80, 145, 64)'
   },
   default:{
    backgroundColor: 'rgb(82, 148, 66)'
   }   }
  return <div style={backroundStyle[avatar] ||backroundStyle.default} className={text ? "box-text" : "box"}>{children}</div>;
};
export default Box;

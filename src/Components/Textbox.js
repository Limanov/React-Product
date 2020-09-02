import * as React from "react";
import "./Components.css"
export const Textbox = ({label 
   }) => {
  return (
      <div>
    <label>{label}</label><input type="text" />
        
    </div>
  );
};
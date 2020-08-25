import * as React from "react";
import "./Components.css"
import  {Textbox}  from "./Textbox";
export const Login = ({ 
   }) => {
  return (
    <div className="login">
        <div className="login-header">
            <div>Logowanie</div>
            <div className="login-close-btn">
                <span className="x">+
                </span>
            </div>
        </div>
<div className="login-screen">
<Textbox/>
</div>
</div>
  );
};
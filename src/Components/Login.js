import * as React from "react";
import "./Components.css"
import  {Textbox}  from "./Textbox";
export const Login = ({
   }) => { 
    //  <script src="https://www.google.com/recaptcha/api.js"></script> 
      //   grecaptcha.ready(function() {
      //     grecaptcha.execute('6Ld3B8wZAAAAAHP0aVLAJtc0aFx8EMh79k_9vr7F', {action: 'homepage'}).then(function(token) {
      //         alert(token);
      //     });
      //   });
      // }
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
<Textbox label="Login: "/>
<Textbox label="Email: "/>

6Ld3B8wZAAAAAHP0aVLAJtc0aFx8EMh79k_9vr7F
6Ld3B8wZAAAAAEQipCMnKa0NQFwpLwgy3kvNDagA
</div>
</div>
  )};
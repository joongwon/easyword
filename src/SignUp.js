// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Reactfire from "reactfire";
import * as JsxRuntime from "react/jsx-runtime";
import * as RescriptReactRouter from "../node_modules/@rescript/react/src/RescriptReactRouter.js";

function SignUp(props) {
  var match = Reactfire.useSigninCheck();
  var data = match.data;
  React.useEffect((function () {
          if (data !== undefined) {
            var user = data.user;
            if (data.signedIn) {
              if (!(user == null) && user.displayName !== undefined) {
                RescriptReactRouter.replace("/");
              }
              
            } else {
              RescriptReactRouter.replace("/login");
            }
          }
          
        }), [data]);
  return JsxRuntime.jsx("div", {
              children: "Sign Up"
            });
}

var make = SignUp;

export {
  make ,
}
/* react Not a pure module */

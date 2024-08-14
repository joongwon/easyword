// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Loader from "./Loader.js";
import * as Firebase from "./Firebase.js";
import * as Reactfire from "reactfire";
import * as Auth from "firebase/auth";
import * as JsxRuntime from "react/jsx-runtime";
import * as Firestore from "firebase/firestore";
import * as RescriptReactRouter from "@rescript/react/src/RescriptReactRouter.js";
import * as ReactSocialLoginButtons from "react-social-login-buttons";

var uiConfig = {
  signInFlow: "popup",
  signInOptions: [Firebase.Auth.GoogleAuthProvider.providerID],
  callbacks: {
    signInSuccessWithAuthResult: (function () {
        return false;
      })
  }
};

function SignIn(props) {
  var match = Reactfire.useSigninCheck();
  var data = match.data;
  var firestore = Reactfire.useFirestore();
  React.useEffect((function () {
          if (data !== undefined && data.signedIn) {
            var user = data.user;
            if (!(user == null)) {
              var photoURL = user.photoURL;
              var email = user.email;
              var displayName = user.displayName;
              var uid = user.uid;
              ((async function () {
                      var userDocRef = Firestore.doc(firestore, "users/" + uid);
                      await Firestore.setDoc(userDocRef, {
                            displayName: displayName,
                            email: email,
                            photoURL: photoURL
                          }, {
                            merge: true
                          });
                      if (displayName !== undefined) {
                        return RescriptReactRouter.replace("/");
                      } else {
                        return RescriptReactRouter.replace("/profile");
                      }
                    })());
            }
            
          }
          
        }), [data]);
  var auth = Reactfire.useAuth();
  if (match.status === "success") {
    if (data !== undefined && !data.signedIn) {
      return JsxRuntime.jsx("div", {
                  children: JsxRuntime.jsxs("div", {
                        children: [
                          JsxRuntime.jsx("div", {
                                children: "로그인",
                                className: "text-3xl font-normal text-center"
                              }),
                          JsxRuntime.jsx(ReactSocialLoginButtons.GoogleLoginButton, {
                                onClick: (function () {
                                    Auth.signInWithPopup(auth, new Auth.GoogleAuthProvider());
                                  }),
                                children: JsxRuntime.jsx("div", {
                                      children: "Sign in with Google",
                                      className: "text-sm"
                                    })
                              })
                        ],
                        className: "h-96 w-96 place-content-center bg-zinc-50 bg-opacity-30 backdrop-blur-lg drop-shadow-lg rounded-xl grid content-center gap-3 text-zinc-800 dark:text-zinc-50"
                      }),
                  className: "h-screen bg-cover bg-center bg-[url('/assets/layered-waves.svg')] justify-self-stretch grid justify-center content-center"
                });
    } else {
      return null;
    }
  } else {
    return JsxRuntime.jsx("div", {
                children: JsxRuntime.jsx(Loader.make, {}),
                className: "h-screen grid justify-center content-center"
              });
  }
}

var make = SignIn;

export {
  uiConfig ,
  make ,
}
/* react Not a pure module */

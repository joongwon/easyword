// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Reactfire from "reactfire";
import * as SignInContext from "./SignInContext.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as Caml_js_exceptions from "../node_modules/rescript/lib/es6/caml_js_exceptions.js";
import * as Functions from "firebase/functions";
import * as RescriptReactRouter from "../node_modules/@rescript/react/src/RescriptReactRouter.js";

function NewJargon(props) {
  var match = React.useContext(SignInContext.context);
  var user = match.user;
  var signedIn = match.signedIn;
  React.useEffect((function () {
          if (signedIn) {
            if (user == null) {
              RescriptReactRouter.replace("/logout");
            }
            
          } else {
            RescriptReactRouter.replace("/login");
          }
        }), []);
  var match$1 = React.useState(function () {
        return false;
      });
  var setDisabled = match$1[1];
  var match$2 = React.useState(function () {
        return "";
      });
  var setJargon = match$2[1];
  var english = match$2[0];
  var handleJargonChange = function ($$event) {
    var value = $$event.currentTarget.value;
    setJargon(function (param) {
          return value;
        });
  };
  var match$3 = React.useState(function () {
        return "";
      });
  var setTranslation = match$3[1];
  var korean = match$3[0];
  var handleTranslationChange = function ($$event) {
    var value = $$event.currentTarget.value;
    setTranslation(function (param) {
          return value;
        });
  };
  var match$4 = React.useState(function () {
        return "";
      });
  var setComment = match$4[1];
  var comment = match$4[0];
  var handleCommentChange = function ($$event) {
    var value = $$event.currentTarget.value;
    setComment(function (param) {
          return value;
        });
  };
  var functions = Functions.getFunctions(Reactfire.useFirebaseApp(), "asia-northeast3");
  var addJargon = Functions.httpsCallable(functions, "addJargon");
  var handleSubmit = function ($$event) {
    $$event.preventDefault();
    if (signedIn) {
      if (user == null) {
        return RescriptReactRouter.replace("/logout");
      } else {
        setDisabled(function (param) {
              return true;
            });
        ((async function (param) {
                try {
                  var result = await addJargon({
                        english: english,
                        korean: korean,
                        comment: comment
                      });
                  return RescriptReactRouter.replace("/jargon/" + result.data.jargonID + "");
                }
                catch (raw_e){
                  var e = Caml_js_exceptions.internalToOCamlException(raw_e);
                  console.log(e);
                  return ;
                }
              })(undefined));
        return ;
      }
    } else {
      return RescriptReactRouter.replace("/login");
    }
  };
  if (signedIn) {
    return JsxRuntime.jsxs("div", {
                children: [
                  JsxRuntime.jsx("h1", {
                        children: "쉬운 번역 제안하기"
                      }),
                  JsxRuntime.jsx("form", {
                        children: JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsxs("label", {
                                      children: [
                                        JsxRuntime.jsx("label", {
                                              children: JsxRuntime.jsx("span", {
                                                    children: "원어",
                                                    className: "label-text"
                                                  }),
                                              className: "label"
                                            }),
                                        JsxRuntime.jsx("input", {
                                              className: "input input-bordered w-full",
                                              placeholder: "separated sum",
                                              type: "text",
                                              value: english,
                                              onChange: handleJargonChange
                                            })
                                      ],
                                      className: "block"
                                    }),
                                JsxRuntime.jsxs("label", {
                                      children: [
                                        JsxRuntime.jsx("label", {
                                              children: JsxRuntime.jsx("span", {
                                                    children: "번역",
                                                    className: "label-text"
                                                  }),
                                              className: "label"
                                            }),
                                        JsxRuntime.jsx("input", {
                                              className: "input input-bordered w-full",
                                              placeholder: "출신을 기억하는 합",
                                              type: "text",
                                              value: korean,
                                              onChange: handleTranslationChange
                                            })
                                      ],
                                      className: "block"
                                    }),
                                JsxRuntime.jsxs("label", {
                                      children: [
                                        JsxRuntime.jsx("label", {
                                              children: JsxRuntime.jsx("span", {
                                                    children: "의견",
                                                    className: "label-text"
                                                  }),
                                              className: "label"
                                            }),
                                        JsxRuntime.jsx("textarea", {
                                              className: "textarea textarea-bordered w-full",
                                              placeholder: "첫 댓글로 달려요",
                                              value: comment,
                                              onChange: handleCommentChange
                                            })
                                      ],
                                      className: "block"
                                    }),
                                JsxRuntime.jsx("input", {
                                      className: "btn btn-primary",
                                      disabled: match$1[0],
                                      type: "submit",
                                      value: "제안하기"
                                    })
                              ],
                              className: "grid grid-cols-1 gap-6"
                            }),
                        className: "mt-8 max-w-md",
                        onSubmit: handleSubmit
                      })
                ],
                className: "px-6 py-12 max-w-xl mx-auto md:max-w-4xl prose"
              });
  } else {
    return null;
  }
}

var make = NewJargon;

export {
  make ,
}
/* react Not a pure module */

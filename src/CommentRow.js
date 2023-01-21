// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "../node_modules/rescript/lib/es6/curry.js";
import * as React from "react";
import * as Firebase from "./Firebase.js";
import * as Belt_List from "../node_modules/rescript/lib/es6/belt_List.js";
import * as Reactfire from "reactfire";
import * as Belt_Array from "../node_modules/rescript/lib/es6/belt_Array.js";
import * as Belt_Option from "../node_modules/rescript/lib/es6/belt_Option.js";
import * as Caml_module from "../node_modules/rescript/lib/es6/caml_module.js";
import * as Caml_option from "../node_modules/rescript/lib/es6/caml_option.js";
import * as SignInContext from "./SignInContext.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as Firestore from "firebase/firestore";

var CommentNode = Caml_module.init_mod([
      "CommentRow.res",
      6,
      4
    ], {
      TAG: /* Module */0,
      _0: [[
          /* Function */0,
          "make"
        ]]
    });

var CommentSiblings = Caml_module.init_mod([
      "CommentRow.res",
      118,
      4
    ], {
      TAG: /* Module */0,
      _0: [[
          /* Function */0,
          "make"
        ]]
    });

function CommentRow$CommentNode(props) {
  var match = props.commentNode;
  var comment = match.comment;
  var jargonID = props.jargonID;
  var children = match.children;
  var match$1 = React.useContext(SignInContext.context);
  var user = match$1.user;
  var id = Belt_Option.getExn(Caml_option.undefined_to_opt(comment.id));
  var match$2 = React.useState(function () {
        return false;
      });
  var setShowReply = match$2[1];
  var match$3 = React.useState(function () {
        return true;
      });
  var setShowChildren = match$3[1];
  var match$4 = React.useState(function () {
        return "";
      });
  var setContent = match$4[1];
  var content = match$4[0];
  var handleInputChange = function ($$event) {
    var value = $$event.currentTarget.value;
    Curry._1(setContent, (function (param) {
            return value;
          }));
  };
  var firestore = Reactfire.useFirestore();
  var commentsCollection = Firestore.collection(firestore, "jargons/" + jargonID + "/comments");
  var handleSubmit = function ($$event) {
    $$event.preventDefault();
    if (user !== undefined) {
      var email = Belt_Option.getWithDefault(user.email, Belt_Option.getWithDefault(Belt_Option.flatMap(Belt_Array.get(user.providerData, 0), Firebase.User.email), user.uid));
      Firestore.addDoc(commentsCollection, {
            content: content,
            user: email,
            timestamp: Firestore.Timestamp.fromDate(new Date()),
            parent: id
          });
      return ;
    }
    window.alert("You need to be signed in to comment!");
  };
  return JsxRuntime.jsxs(JsxRuntime.Fragment, {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("div", {
                              children: comment.user
                            }),
                        JsxRuntime.jsx("div", {
                              children: comment.timestamp.toDate().toDateString()
                            }),
                        JsxRuntime.jsx("div", {
                              children: comment.content
                            }),
                        JsxRuntime.jsx("div", {
                              children: JsxRuntime.jsx("button", {
                                    children: "Reply",
                                    className: "px-1 rounded-md bg-zinc-200 hover:bg-zinc-300 text-black",
                                    onClick: (function (param) {
                                        Curry._1(setShowReply, (function (show) {
                                                return !show;
                                              }));
                                      })
                                  })
                            })
                      ],
                      className: "grid grid-cols-2"
                    }),
                match$2[0] ? JsxRuntime.jsx("form", {
                        children: JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("textarea", {
                                      className: "h-24 p-1 border place-self-stretch text-black",
                                      id: "comment" + id,
                                      name: "comment" + id,
                                      placeholder: "여러분의 생각은 어떠신가요?",
                                      value: content,
                                      onChange: handleInputChange
                                    }),
                                JsxRuntime.jsx("input", {
                                      className: "px-1 rounded-md bg-zinc-200 hover:bg-zinc-300 text-black",
                                      type: "submit",
                                      value: "Reply"
                                    })
                              ],
                              className: "p-2 gap-3 grid grid-cols-1 place-items-end"
                            }),
                        onSubmit: handleSubmit
                      }) : null,
                match$3[0] ? JsxRuntime.jsxs("div", {
                        children: [
                          JsxRuntime.jsx("button", {
                                className: "flex-none mr-3 w-3 border-r-[2px] border-zinc-300 hover:border-zinc-600",
                                onClick: (function (param) {
                                    Curry._1(setShowChildren, (function (show) {
                                            return !show;
                                          }));
                                  })
                              }),
                          JsxRuntime.jsx("div", {
                                children: JsxRuntime.jsx(CommentSiblings.make, {
                                      jargonID: jargonID,
                                      siblings: children
                                    }),
                                className: "flex-initial w-full"
                              })
                        ],
                        className: "flex"
                      }) : JsxRuntime.jsxs("div", {
                        children: [
                          JsxRuntime.jsx("button", {
                                className: "flex-none mr-3 w-3 border-r-[2px] border-zinc-300 hover:border-zinc-600",
                                onClick: (function (param) {
                                    Curry._1(setShowChildren, (function (show) {
                                            return !show;
                                          }));
                                  })
                              }),
                          JsxRuntime.jsx("div", {
                                children: "Expand",
                                className: "flex-initial w-full"
                              })
                        ],
                        className: "flex"
                      })
              ]
            });
}

Caml_module.update_mod({
      TAG: /* Module */0,
      _0: [[
          /* Function */0,
          "make"
        ]]
    }, CommentNode, {
      make: CommentRow$CommentNode
    });

function CommentRow$CommentSiblings(props) {
  var jargonID = props.jargonID;
  return Belt_Array.map(Belt_List.toArray(props.siblings), (function (commentNode) {
                return JsxRuntime.jsx("div", {
                            children: JsxRuntime.jsx(CommentNode.make, {
                                  jargonID: jargonID,
                                  commentNode: commentNode
                                })
                          }, Belt_Option.getExn(Caml_option.undefined_to_opt(commentNode.comment.id)));
              }));
}

Caml_module.update_mod({
      TAG: /* Module */0,
      _0: [[
          /* Function */0,
          "make"
        ]]
    }, CommentSiblings, {
      make: CommentRow$CommentSiblings
    });

function CommentRow(props) {
  return JsxRuntime.jsx(CommentSiblings.make, {
              jargonID: props.jargonID,
              siblings: props.siblings
            });
}

var make = CommentRow;

export {
  CommentNode ,
  CommentSiblings ,
  make ,
}
/* CommentNode Not a pure module */

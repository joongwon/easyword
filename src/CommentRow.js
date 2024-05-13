// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Base64 from "./Base64.js";
import * as $$Comment from "./Comment.js";
import * as Core__Date from "../node_modules/@rescript/core/src/Core__Date.js";
import * as Core__List from "../node_modules/@rescript/core/src/Core__List.js";
import * as DateFormat from "./DateFormat.js";
import * as Caml_module from "../node_modules/rescript/lib/es6/caml_module.js";
import * as SignInContext from "./SignInContext.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as BetterReactMathjax from "better-react-mathjax";
import * as RescriptRelay_Mutation from "../node_modules/rescript-relay/src/RescriptRelay_Mutation.js";
import * as CommentRowMutation_graphql from "./__generated__/CommentRowMutation_graphql.js";
import * as Outline from "@heroicons/react/24/outline";

var convertVariables = CommentRowMutation_graphql.Internal.convertVariables;

var convertResponse = CommentRowMutation_graphql.Internal.convertResponse;

var convertWrapRawResponse = CommentRowMutation_graphql.Internal.convertWrapRawResponse;

var commitMutation = RescriptRelay_Mutation.commitMutation(convertVariables, CommentRowMutation_graphql.node, convertResponse, convertWrapRawResponse);

var use = RescriptRelay_Mutation.useMutation(convertVariables, CommentRowMutation_graphql.node, convertResponse, convertWrapRawResponse);

var CommentMutation = {
  Operation: undefined,
  Types: undefined,
  convertVariables: convertVariables,
  convertResponse: convertResponse,
  convertWrapRawResponse: convertWrapRawResponse,
  commitMutation: commitMutation,
  use: use
};

var CommentNode = Caml_module.init_mod([
      "CommentRow.res",
      31,
      4
    ], {
      TAG: "Module",
      _0: [[
          "Function",
          "make"
        ]]
    });

var CommentSiblings = Caml_module.init_mod([
      "CommentRow.res",
      173,
      4
    ], {
      TAG: "Module",
      _0: [[
          "Function",
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
  var match$2 = React.useState(function () {
        return true;
      });
  var setShowChildren = match$2[1];
  var match$3 = React.useState(function () {
        return false;
      });
  var setShowReply = match$3[1];
  var match$4 = React.useState(function () {
        return "";
      });
  var setContent = match$4[1];
  var content = match$4[0];
  var handleInputChange = function ($$event) {
    var value = $$event.currentTarget.value;
    setContent(function (param) {
          return value;
        });
  };
  var match$5 = use();
  var mutate = match$5[0];
  var handleSubmit = function ($$event) {
    $$event.preventDefault();
    if (content.length < 3) {
      window.alert("댓글은 세 글자 이상이어야 해요");
      return ;
    }
    var jargonID$1 = Base64.retrieveOriginalIDString(jargonID);
    var commentID = Base64.retrieveOriginalIDString(comment.id);
    if (user == null) {
      window.alert("로그인해야 합니다.");
    } else if (jargonID$1 !== undefined && commentID !== undefined) {
      mutate({
            authorID: user.uid,
            content: content,
            jargonID: jargonID$1,
            now: new Date().toISOString(),
            parentID: commentID
          }, undefined, undefined, undefined, (function (_response, _errors) {
              ((window.location.reload()));
            }), (function (error) {
              console.error(error);
            }), undefined);
    } else {
      window.alert("현재 댓글을 달 수 없어요");
    }
  };
  var photoURL = comment.userPhotoURL;
  var translation = comment.translation;
  return JsxRuntime.jsxs(JsxRuntime.Fragment, {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("span", {
                                      children: photoURL !== undefined ? JsxRuntime.jsx("img", {
                                              className: "mask mask-squircle h-7 w-7",
                                              src: photoURL
                                            }) : JsxRuntime.jsx(Outline.UserCircleIcon, {
                                              className: "h-7 w-7"
                                            }),
                                      className: "pr-1"
                                    }),
                                JsxRuntime.jsx("span", {
                                      children: comment.userDisplayName,
                                      className: "target:text-teal-600 dark:target:text-teal-300 target:underline decoration-2 text-base-content font-semibold",
                                      id: comment.id
                                    }),
                                translation !== undefined ? JsxRuntime.jsxs(JsxRuntime.Fragment, {
                                        children: [
                                          "·",
                                          JsxRuntime.jsx("span", {
                                                children: translation,
                                                className: "text-teal-600 dark:target:text-teal-300 text-base-content"
                                              })
                                        ]
                                      }) : null,
                                "·",
                                JsxRuntime.jsx("span", {
                                      children: DateFormat.timeAgo(comment.timestamp),
                                      title: comment.timestamp.toDateString()
                                    })
                              ],
                              className: "flex items-center pb-1 gap-x-1 text-xs"
                            }),
                        JsxRuntime.jsx("div", {
                              children: JsxRuntime.jsx(BetterReactMathjax.MathJax, {
                                    children: comment.content
                                  }),
                              className: "pl-3 text-base-content"
                            }),
                        JsxRuntime.jsxs("button", {
                              children: [
                                JsxRuntime.jsx(Outline.ChatBubbleLeftIcon, {
                                      className: "h-5 w-5"
                                    }),
                                "답글"
                              ],
                              className: "btn btn-ghost btn-sm text-xs gap-1",
                              onClick: (function (param) {
                                  setShowReply(function (show) {
                                        return !show;
                                      });
                                })
                            })
                      ],
                      className: "flex flex-col gap-y-1 place-items-start text-zinc-500"
                    }),
                match$3[0] ? JsxRuntime.jsx("form", {
                        children: JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("textarea", {
                                      className: "textarea textarea-ghost textarea-sm focus:outline-0 focus:border-transparent place-self-stretch",
                                      id: "comment" + comment.id,
                                      name: "comment" + comment.id,
                                      placeholder: "여러분의 생각은 어떠신가요?",
                                      value: content,
                                      onChange: handleInputChange
                                    }),
                                JsxRuntime.jsx("input", {
                                      className: "btn btn-neutral btn-sm ml-1 mb-1 disabled:loading",
                                      disabled: match$5[1],
                                      type: "submit",
                                      value: "답글"
                                    })
                              ],
                              className: "rounded-lg border-2 border-zinc-300 focus-within:border-zinc-400 bg-white gap-1 grid grid-cols-1 place-items-start"
                            }),
                        className: "pb-1",
                        onSubmit: handleSubmit
                      }) : null,
                match$2[0] ? JsxRuntime.jsxs("div", {
                        children: [
                          JsxRuntime.jsx("button", {
                                className: "flex-none mr-3 w-3 border-r-[2px] border-zinc-300 hover:border-zinc-600",
                                onClick: (function (param) {
                                    setShowChildren(function (show) {
                                          return !show;
                                        });
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
                          JsxRuntime.jsx("div", {
                                className: "flex-none mr-3 w-3 border-r-[2px] border-zinc-300 group-hover:border-zinc-600"
                              }),
                          JsxRuntime.jsx("div", {
                                children: "댓글 " + $$Comment.countDescendents(children).toString() + "개 열기",
                                className: "flex-initial w-full text-zinc-500 group-hover:text-zinc-600"
                              })
                        ],
                        className: "group flex cursor-pointer border-zinc-300",
                        onClick: (function (param) {
                            setShowChildren(function (show) {
                                  return !show;
                                });
                          })
                      })
              ]
            });
}

Caml_module.update_mod({
      TAG: "Module",
      _0: [[
          "Function",
          "make"
        ]]
    }, CommentNode, {
      make: CommentRow$CommentNode
    });

function CommentRow$CommentSiblings(props) {
  var jargonID = props.jargonID;
  return Core__List.toArray(props.siblings).toSorted(function (a, b) {
                return Core__Date.compare(b.comment.timestamp, a.comment.timestamp);
              }).map(function (commentNode) {
              return JsxRuntime.jsx("div", {
                          children: JsxRuntime.jsx(CommentNode.make, {
                                jargonID: jargonID,
                                commentNode: commentNode
                              }),
                          className: "flex flex-col gap-y-2"
                        }, commentNode.comment.id);
            });
}

Caml_module.update_mod({
      TAG: "Module",
      _0: [[
          "Function",
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
  CommentMutation ,
  CommentNode ,
  CommentSiblings ,
  make ,
}
/* commitMutation Not a pure module */

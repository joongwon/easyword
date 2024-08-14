// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Base64 from "./Base64.js";
import * as SignInContext from "./SignInContext.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as RescriptRelay_Mutation from "rescript-relay/src/RescriptRelay_Mutation.js";
import * as CommentInputMutation_graphql from "./__generated__/CommentInputMutation_graphql.js";

var convertVariables = CommentInputMutation_graphql.Internal.convertVariables;

var convertResponse = CommentInputMutation_graphql.Internal.convertResponse;

var convertWrapRawResponse = CommentInputMutation_graphql.Internal.convertWrapRawResponse;

var commitMutation = RescriptRelay_Mutation.commitMutation(convertVariables, CommentInputMutation_graphql.node, convertResponse, convertWrapRawResponse);

var use = RescriptRelay_Mutation.useMutation(convertVariables, CommentInputMutation_graphql.node, convertResponse, convertWrapRawResponse);

var CommentMutation = {
  Operation: undefined,
  Types: undefined,
  convertVariables: convertVariables,
  convertResponse: convertResponse,
  convertWrapRawResponse: convertWrapRawResponse,
  commitMutation: commitMutation,
  use: use
};

function CommentInput(props) {
  var jargonID = props.jargonID;
  var match = React.useContext(SignInContext.context);
  var user = match.user;
  var match$1 = React.useState(function () {
        return "";
      });
  var setContent = match$1[1];
  var content = match$1[0];
  var handleInputChange = function ($$event) {
    var value = $$event.currentTarget.value;
    setContent(function (param) {
          return value;
        });
  };
  var match$2 = use();
  var mutate = match$2[0];
  var handleSubmit = function ($$event) {
    $$event.preventDefault();
    if (content.length < 3) {
      window.alert("댓글은 세 글자 이상이어야 해요");
      return ;
    }
    var jargonID$1 = Base64.retrieveOriginalIDString(jargonID);
    if (user == null) {
      window.alert("로그인해야 합니다");
    } else if (jargonID$1 !== undefined) {
      mutate({
            authorID: user.uid,
            content: content,
            jargonID: jargonID$1,
            now: new Date().toISOString()
          }, undefined, undefined, undefined, (function (_response, _errors) {
              ((window.location.reload()));
            }), (function (error) {
              console.error(error);
            }), undefined);
    } else {
      window.alert("현재 댓글을 달 수 없어요");
    }
  };
  return JsxRuntime.jsx("form", {
              children: JsxRuntime.jsxs("div", {
                    children: [
                      JsxRuntime.jsx("textarea", {
                            className: "textarea textarea-ghost textarea-sm focus:outline-0 focus:border-transparent place-self-stretch",
                            id: "comment",
                            name: "comment",
                            placeholder: "여러분의 생각은 어떠신가요?",
                            value: content,
                            onChange: handleInputChange
                          }),
                      JsxRuntime.jsx("input", {
                            className: "btn btn-neutral btn-sm ml-1 mb-1 disabled:loading",
                            disabled: match$2[1],
                            type: "submit",
                            value: "댓글"
                          })
                    ],
                    className: "rounded-lg border-2 border-zinc-300 focus-within:border-zinc-400 bg-white gap-1 grid grid-cols-1 place-items-start"
                  }),
              onSubmit: handleSubmit
            });
}

var make = CommentInput;

export {
  CommentMutation ,
  make ,
}
/* commitMutation Not a pure module */

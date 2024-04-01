// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Util from "./Util.js";
import * as React from "react";
import * as Base64 from "./Base64.js";
import * as SignInContext from "./SignInContext.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as RescriptReactRouter from "../node_modules/@rescript/react/src/RescriptReactRouter.js";
import * as RescriptRelay_Query from "../node_modules/rescript-relay/src/RescriptRelay_Query.js";
import * as RescriptRelay_Mutation from "../node_modules/rescript-relay/src/RescriptRelay_Mutation.js";
import * as NewTranslationMutation_graphql from "./__generated__/NewTranslationMutation_graphql.js";
import * as NewTranslationJargonQuery_graphql from "./__generated__/NewTranslationJargonQuery_graphql.js";
import * as NewTranslationCommentMutation_graphql from "./__generated__/NewTranslationCommentMutation_graphql.js";
import * as NewTranslationNewCommentMutation_graphql from "./__generated__/NewTranslationNewCommentMutation_graphql.js";

var convertVariables = NewTranslationJargonQuery_graphql.Internal.convertVariables;

var convertResponse = NewTranslationJargonQuery_graphql.Internal.convertResponse;

var convertWrapRawResponse = NewTranslationJargonQuery_graphql.Internal.convertWrapRawResponse;

var use = RescriptRelay_Query.useQuery(convertVariables, NewTranslationJargonQuery_graphql.node, convertResponse);

var useLoader = RescriptRelay_Query.useLoader(convertVariables, NewTranslationJargonQuery_graphql.node, (function (prim) {
        return prim;
      }));

var usePreloaded = RescriptRelay_Query.usePreloaded(NewTranslationJargonQuery_graphql.node, convertResponse, (function (prim) {
        return prim;
      }));

var $$fetch = RescriptRelay_Query.$$fetch(NewTranslationJargonQuery_graphql.node, convertResponse, convertVariables);

var fetchPromised = RescriptRelay_Query.fetchPromised(NewTranslationJargonQuery_graphql.node, convertResponse, convertVariables);

var retain = RescriptRelay_Query.retain(NewTranslationJargonQuery_graphql.node, convertVariables);

var JargonQuery = {
  Operation: undefined,
  Types: undefined,
  convertVariables: convertVariables,
  convertResponse: convertResponse,
  convertWrapRawResponse: convertWrapRawResponse,
  use: use,
  useLoader: useLoader,
  usePreloaded: usePreloaded,
  $$fetch: $$fetch,
  fetchPromised: fetchPromised,
  retain: retain
};

var convertVariables$1 = NewTranslationNewCommentMutation_graphql.Internal.convertVariables;

var convertResponse$1 = NewTranslationNewCommentMutation_graphql.Internal.convertResponse;

var convertWrapRawResponse$1 = NewTranslationNewCommentMutation_graphql.Internal.convertWrapRawResponse;

var commitMutation = RescriptRelay_Mutation.commitMutation(convertVariables$1, NewTranslationNewCommentMutation_graphql.node, convertResponse$1, convertWrapRawResponse$1);

var use$1 = RescriptRelay_Mutation.useMutation(convertVariables$1, NewTranslationNewCommentMutation_graphql.node, convertResponse$1, convertWrapRawResponse$1);

var NewCommentMutation = {
  Operation: undefined,
  Types: undefined,
  convertVariables: convertVariables$1,
  convertResponse: convertResponse$1,
  convertWrapRawResponse: convertWrapRawResponse$1,
  commitMutation: commitMutation,
  use: use$1
};

var convertVariables$2 = NewTranslationMutation_graphql.Internal.convertVariables;

var convertResponse$2 = NewTranslationMutation_graphql.Internal.convertResponse;

var convertWrapRawResponse$2 = NewTranslationMutation_graphql.Internal.convertWrapRawResponse;

var commitMutation$1 = RescriptRelay_Mutation.commitMutation(convertVariables$2, NewTranslationMutation_graphql.node, convertResponse$2, convertWrapRawResponse$2);

var use$2 = RescriptRelay_Mutation.useMutation(convertVariables$2, NewTranslationMutation_graphql.node, convertResponse$2, convertWrapRawResponse$2);

var TranslationMutation = {
  Operation: undefined,
  Types: undefined,
  convertVariables: convertVariables$2,
  convertResponse: convertResponse$2,
  convertWrapRawResponse: convertWrapRawResponse$2,
  commitMutation: commitMutation$1,
  use: use$2
};

var convertVariables$3 = NewTranslationCommentMutation_graphql.Internal.convertVariables;

var convertResponse$3 = NewTranslationCommentMutation_graphql.Internal.convertResponse;

var convertWrapRawResponse$3 = NewTranslationCommentMutation_graphql.Internal.convertWrapRawResponse;

var commitMutation$2 = RescriptRelay_Mutation.commitMutation(convertVariables$3, NewTranslationCommentMutation_graphql.node, convertResponse$3, convertWrapRawResponse$3);

var use$3 = RescriptRelay_Mutation.useMutation(convertVariables$3, NewTranslationCommentMutation_graphql.node, convertResponse$3, convertWrapRawResponse$3);

var CommentMutation = {
  Operation: undefined,
  Types: undefined,
  convertVariables: convertVariables$3,
  convertResponse: convertResponse$3,
  convertWrapRawResponse: convertWrapRawResponse$3,
  commitMutation: commitMutation$2,
  use: use$3
};

function NewTranslation(props) {
  var jargonID = props.jargonID;
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
        return "";
      });
  var setKorean = match$1[1];
  var korean = match$1[0];
  var handleTranslationChange = function ($$event) {
    var value = $$event.currentTarget.value;
    setKorean(function (param) {
          return value;
        });
  };
  var match$2 = React.useState(function () {
        return "";
      });
  var setComment = match$2[1];
  var comment = match$2[0];
  var handleCommentChange = function ($$event) {
    var value = $$event.currentTarget.value;
    setComment(function (param) {
          return value;
        });
  };
  var match$3 = use$1();
  var newCommentMutate = match$3[0];
  var match$4 = use$2();
  var translationMutate = match$4[0];
  var match$5 = use$3();
  var commentMutate = match$5[0];
  var handleSubmit = function ($$event) {
    $$event.preventDefault();
    if (korean.length < 1) {
      window.alert("번역을 입력해주세요");
      return ;
    }
    if (!signedIn) {
      return RescriptReactRouter.replace("/login");
    }
    if (user == null) {
      return RescriptReactRouter.replace("/logout");
    }
    var comment$1 = comment === "" ? Util.eulLeul(korean) + " 제안합니다." : comment;
    var jargonID$1 = Base64.retrieveOriginalID(jargonID);
    if (jargonID$1 !== undefined) {
      newCommentMutate({
            authorID: user.uid,
            content: comment$1,
            jargonID: jargonID$1
          }, undefined, undefined, undefined, (function (param, _errors) {
              var insert_comment_one = param.insert_comment_one;
              if (insert_comment_one === undefined) {
                return ;
              }
              var commentID = Base64.retrieveOriginalID(insert_comment_one.id);
              if (commentID !== undefined) {
                translationMutate({
                      authorID: user.uid,
                      commentID: commentID,
                      jargonID: jargonID$1,
                      name: korean
                    }, undefined, undefined, undefined, (function (param, _errors) {
                        var insert_translation_one = param.insert_translation_one;
                        if (insert_translation_one !== undefined) {
                          var translationID = Base64.retrieveOriginalID(insert_translation_one.id);
                          if (translationID !== undefined) {
                            commentMutate({
                                  commentID: commentID,
                                  translationID: translationID
                                }, undefined, undefined, undefined, (function (_response, _errors) {
                                    RescriptReactRouter.replace("/jargon/" + jargonID);
                                  }), (function (error) {
                                    console.error(error);
                                  }), undefined);
                            return ;
                          } else {
                            console.error("Translation mutation failed");
                            return RescriptReactRouter.replace("/jargon/" + jargonID);
                          }
                        }
                        console.error("Translation mutation failed");
                        RescriptReactRouter.replace("/jargon/" + jargonID);
                      }), (function (error) {
                        console.error(error);
                      }), undefined);
                return ;
              } else {
                console.error("Comment mutation failed");
                return RescriptReactRouter.replace("/jargon/" + jargonID);
              }
            }), (function (error) {
              console.error(error);
            }), undefined);
      return ;
    }
    
  };
  var match$6 = use({
        id: jargonID
      }, undefined, undefined, undefined);
  var node = match$6.node;
  if (node !== undefined && node.__typename === "jargon" && signedIn) {
    return JsxRuntime.jsxs("div", {
                children: [
                  JsxRuntime.jsx("h2", {
                        children: node.name + "의 쉬운 전문용어 제안하기"
                      }),
                  JsxRuntime.jsx("form", {
                        children: JsxRuntime.jsxs("div", {
                              children: [
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
                                              placeholder: "새 댓글로 달려요",
                                              value: comment,
                                              onChange: handleCommentChange
                                            })
                                      ],
                                      className: "block"
                                    }),
                                JsxRuntime.jsx("input", {
                                      className: "btn btn-primary",
                                      disabled: match$3[1] || match$4[1] || match$5[1],
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

var make = NewTranslation;

export {
  JargonQuery ,
  NewCommentMutation ,
  TranslationMutation ,
  CommentMutation ,
  make ,
}
/* use Not a pure module */

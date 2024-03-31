// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Translation from "./Translation.js";
import * as CommentInput from "./CommentInput.js";
import * as CommentSection from "./CommentSection.js";
import * as Caml_exceptions from "../node_modules/rescript/lib/es6/caml_exceptions.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as RescriptReactRouter from "../node_modules/@rescript/react/src/RescriptReactRouter.js";
import * as RescriptRelay_Query from "../node_modules/rescript-relay/src/RescriptRelay_Query.js";
import * as JargonPostQuery_graphql from "./__generated__/JargonPostQuery_graphql.js";

var convertVariables = JargonPostQuery_graphql.Internal.convertVariables;

var convertResponse = JargonPostQuery_graphql.Internal.convertResponse;

var convertWrapRawResponse = JargonPostQuery_graphql.Internal.convertWrapRawResponse;

var use = RescriptRelay_Query.useQuery(convertVariables, JargonPostQuery_graphql.node, convertResponse);

var useLoader = RescriptRelay_Query.useLoader(convertVariables, JargonPostQuery_graphql.node, (function (prim) {
        return prim;
      }));

var usePreloaded = RescriptRelay_Query.usePreloaded(JargonPostQuery_graphql.node, convertResponse, (function (prim) {
        return prim;
      }));

var $$fetch = RescriptRelay_Query.$$fetch(JargonPostQuery_graphql.node, convertResponse, convertVariables);

var fetchPromised = RescriptRelay_Query.fetchPromised(JargonPostQuery_graphql.node, convertResponse, convertVariables);

var retain = RescriptRelay_Query.retain(JargonPostQuery_graphql.node, convertVariables);

var JargonPostQuery = {
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

var Error404 = /* @__PURE__ */Caml_exceptions.create("JargonPost.Error404");

function JargonPost(props) {
  var jargonID = props.jargonID;
  var match = use({
        id: jargonID
      }, undefined, undefined, undefined);
  var node = match.node;
  if (node === undefined) {
    return null;
  }
  if (node.__typename === "jargon") {
    return JsxRuntime.jsx("div", {
                children: JsxRuntime.jsxs("main", {
                      children: [
                        JsxRuntime.jsx("div", {
                              children: JsxRuntime.jsx("div", {
                                    children: node.name,
                                    className: "text-2xl font-bold"
                                  }),
                              className: "flex flex-col gap-1"
                            }),
                        JsxRuntime.jsx(Translation.make, {
                              translationRefs: node.fragmentRefs
                            }),
                        JsxRuntime.jsx("button", {
                              children: "새 번역 제안하기",
                              className: "btn btn-primary",
                              onClick: (function (param) {
                                  RescriptReactRouter.replace("/new-translation/" + jargonID);
                                })
                            }),
                        JsxRuntime.jsx(CommentInput.make, {
                              jargonID: jargonID
                            }),
                        JsxRuntime.jsx("div", {
                              className: "divider -my-2"
                            }),
                        JsxRuntime.jsx(CommentSection.make, {
                              jargonID: jargonID,
                              commentRefs: node.fragmentRefs
                            })
                      ],
                      className: "flex flex-col p-5 gap-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg"
                    }),
                className: "px-3 max-w-xl mx-auto md:max-w-4xl text-sm"
              });
  }
  throw {
        RE_EXN_ID: Error404,
        Error: new Error()
      };
}

var make = JargonPost;

export {
  JargonPostQuery ,
  Error404 ,
  make ,
}
/* use Not a pure module */

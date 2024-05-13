// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Exc from "./Exc.js";
import * as Translation from "./Translation.js";
import * as CommentInput from "./CommentInput.js";
import * as Core__Option from "../node_modules/@rescript/core/src/Core__Option.js";
import * as CommentSection from "./CommentSection.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as RescriptReactRouter from "../node_modules/@rescript/react/src/RescriptReactRouter.js";
import * as RescriptRelay_Query from "../node_modules/rescript-relay/src/RescriptRelay_Query.js";
import * as JargonPostQuery_graphql from "./__generated__/JargonPostQuery_graphql.js";
import * as Outline from "@heroicons/react/24/outline";

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

function badgify(text) {
  return JsxRuntime.jsx("div", {
              children: text,
              className: "badge badge-md font-semibold"
            }, text);
}

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
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsxs("div", {
                                      children: [
                                        node.jargon_categories.map(function (r) {
                                              return badgify(r.category.acronym);
                                            }),
                                        JsxRuntime.jsx("button", {
                                              children: "+",
                                              className: "badge badge-md font-semibold",
                                              onClick: (function (param) {
                                                  RescriptReactRouter.replace("/edit-categories/" + jargonID);
                                                })
                                            })
                                      ],
                                      className: "flex gap-1"
                                    }),
                                JsxRuntime.jsx("div", {
                                      children: node.name,
                                      className: "text-2xl font-bold"
                                    })
                              ],
                              className: "flex flex-col gap-2"
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
                        JsxRuntime.jsx("div", {
                              className: "divider -mb-2"
                            }),
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx(Outline.ChatBubbleLeftRightIcon, {
                                      className: "w-6 h-6"
                                    }),
                                Core__Option.getOr(Core__Option.map(node.comments_aggregate.aggregate, (function (x) {
                                              return x.count;
                                            })), 0).toString()
                              ],
                              className: "flex gap-1 text-teal-600"
                            }),
                        JsxRuntime.jsx(CommentInput.make, {
                              jargonID: jargonID
                            }),
                        JsxRuntime.jsx(CommentSection.make, {
                              jargonID: jargonID,
                              commentRefs: node.fragmentRefs
                            })
                      ],
                      className: "flex flex-col p-5 gap-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg"
                    }),
                className: "px-3 pb-10 max-w-xl mx-auto md:max-w-4xl text-sm"
              });
  }
  throw {
        RE_EXN_ID: Exc.HTTPError,
        _1: 404,
        _2: node._0,
        Error: new Error()
      };
}

var make = JargonPost;

export {
  JargonPostQuery ,
  badgify ,
  make ,
}
/* use Not a pure module */

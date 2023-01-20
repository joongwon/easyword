// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "../node_modules/rescript/lib/es6/curry.js";
import * as React from "react";
import * as Filter from "./Filter.js";
import * as Navbar from "./Navbar.js";
import * as JargonList from "./JargonList.js";
import * as SignInContext from "./SignInContext.js";
import * as JsxRuntime from "react/jsx-runtime";

function Home$SearchBar(props) {
  return JsxRuntime.jsx("form", {
              children: JsxRuntime.jsx("div", {
                    children: JsxRuntime.jsx("input", {
                          className: "block px-4 h-10 w-full text-base text-zinc-900 bg-zinc-50 rounded-lg border border-solid border-zinc-200 hover:bg-zinc-200 dark:text-zinc-50 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700",
                          placeholder: "정규식: syntax$",
                          type: "search",
                          value: props.query,
                          onChange: props.onChange
                        }),
                    className: "relative"
                  })
            });
}

var SearchBar = {
  make: Home$SearchBar
};

function Home(props) {
  var match = React.useState(function () {
        return "";
      });
  var setQuery = match[1];
  var query = match[0];
  var match$1 = React.useState(function () {
        return [
                /* English */0,
                /* Ascending */0
              ];
      });
  var order = match$1[0];
  var onChange = function ($$event) {
    var value = $$event.currentTarget.value;
    Curry._1(setQuery, (function (param) {
            return value;
          }));
  };
  var signInData = React.useContext(SignInContext.context);
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx(Navbar.make, {
                      signedIn: signInData.signedIn
                    }),
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("div", {
                                      children: JsxRuntime.jsx(Home$SearchBar, {
                                            query: query,
                                            onChange: onChange
                                          }),
                                      className: "flex-auto"
                                    }),
                                JsxRuntime.jsx("div", {
                                      children: JsxRuntime.jsx(Filter.make, {
                                            order: order,
                                            setOrder: match$1[1]
                                          }),
                                      className: "flex-none"
                                    })
                              ],
                              className: "flex items-center space-x-2"
                            }),
                        JsxRuntime.jsx(JargonList.make, {
                              order: order,
                              query: query
                            })
                      ],
                      className: "grid gap-4 p-5"
                    })
              ]
            });
}

var make = Home;

export {
  SearchBar ,
  make ,
}
/* react Not a pure module */

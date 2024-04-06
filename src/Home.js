// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Hooks from "./Hooks.js";
import * as React from "react";
import * as SearchBar from "./SearchBar.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as ReactErrorBoundary from "react-error-boundary";
import * as HomeJargonListSection from "./HomeJargonListSection.js";
import * as Solid from "@heroicons/react/24/solid";

function Home(props) {
  var match = React.useState(function () {
        return "";
      });
  var setSearchTerm = match[1];
  var searchTerm = match[0];
  var debouncedSearchTerm = Hooks.useDebounce(searchTerm, 300);
  var match$1 = React.useState(function () {
        return "Chrono";
      });
  var setAxis = match$1[1];
  var axis = match$1[0];
  var match$2 = React.useState(function () {
        return "desc";
      });
  var setDirection = match$2[1];
  var direction = match$2[0];
  var match$3 = React.useState(function () {
        
      });
  var setResetErrorBoundary = match$3[1];
  var resetErrorBoundary = match$3[0];
  var closeDropdown = Hooks.useClosingDropdown("sort-dropdown-btn");
  var onChange = function ($$event) {
    var value = $$event.currentTarget.value;
    setSearchTerm(function (param) {
          return value;
        });
    if (resetErrorBoundary !== undefined) {
      resetErrorBoundary();
      return setResetErrorBoundary(function (param) {
                  
                });
    }
    
  };
  var tmp;
  tmp = axis === "English" ? (
      direction === "asc" ? JsxRuntime.jsx(Solid.ArrowUpIcon, {
              className: "-ml-2 mr-1 h-5 w-5 text-teal-100"
            }) : JsxRuntime.jsx(Solid.ArrowDownIcon, {
              className: "-ml-2 mr-1 h-5 w-5 text-teal-100"
            })
    ) : null;
  var tmp$1;
  tmp$1 = axis === "English" ? "ABC순" : "최근순";
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("div", {
                              children: JsxRuntime.jsx(SearchBar.make, {
                                    searchTerm: searchTerm,
                                    onChange: onChange
                                  }),
                              className: "flex-auto mt-1"
                            }),
                        JsxRuntime.jsxs("details", {
                              children: [
                                JsxRuntime.jsxs("summary", {
                                      children: [
                                        tmp,
                                        tmp$1,
                                        JsxRuntime.jsx(Solid.ChevronDownIcon, {
                                              className: "ml-2 -mr-1 h-5 w-5"
                                            })
                                      ],
                                      className: "btn btn-primary text-xs"
                                    }),
                                JsxRuntime.jsxs("ul", {
                                      children: [
                                        JsxRuntime.jsx("li", {
                                              children: JsxRuntime.jsx("button", {
                                                    children: "최근순",
                                                    onClick: (function (param) {
                                                        setAxis(function (param) {
                                                              return "Chrono";
                                                            });
                                                        setDirection(function (param) {
                                                              return "desc";
                                                            });
                                                        closeDropdown();
                                                      })
                                                  })
                                            }),
                                        JsxRuntime.jsx("li", {
                                              children: JsxRuntime.jsxs("button", {
                                                    children: [
                                                      "ABC순",
                                                      direction === "asc" ? JsxRuntime.jsx(Solid.ArrowUpIcon, {
                                                              className: "-ml-2 mr-1 h-5 w-5 text-primary"
                                                            }) : JsxRuntime.jsx(Solid.ArrowDownIcon, {
                                                              className: "-ml-2 mr-1 h-5 w-5 text-primary"
                                                            })
                                                    ],
                                                    onClick: (function (param) {
                                                        setAxis(function (param) {
                                                              return "English";
                                                            });
                                                        setDirection(function (direction) {
                                                              if (direction === "asc") {
                                                                return "desc";
                                                              } else {
                                                                return "asc";
                                                              }
                                                            });
                                                        closeDropdown();
                                                      })
                                                  })
                                            })
                                      ],
                                      className: "menu menu-compact dropdown-content text-xs p-1 m-1 w-[6.5rem] shadow bg-teal-50 dark:bg-zinc-800 rounded-box"
                                    })
                              ],
                              className: "dropdown dropdown-hover dropdown-end shadow-lg rounded-lg mt-1",
                              id: "sort-dropdown-btn"
                            })
                      ],
                      className: "flex items-center space-x-2 sticky top-[4rem] md:top-[5.25rem] -mt-5 mb-5 z-40 bg-base-100"
                    }),
                JsxRuntime.jsx(ReactErrorBoundary.ErrorBoundary, {
                      children: JsxRuntime.jsx(HomeJargonListSection.make, {
                            searchTerm: debouncedSearchTerm,
                            axis: axis,
                            direction: direction
                          }),
                      fallbackRender: (function (param) {
                          var resetErrorBoundary = param.resetErrorBoundary;
                          console.error(param.error);
                          setResetErrorBoundary(function (param) {
                                return resetErrorBoundary;
                              });
                          return null;
                        })
                    })
              ],
              className: "grid p-5 text-sm"
            });
}

var make = Home;

export {
  make ,
}
/* Hooks Not a pure module */

// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as JargonList from "./JargonList.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as Solid from "@heroicons/react/24/solid";

function Home$SearchBar(props) {
  var setCaseSensitivity = props.setCaseSensitivity;
  var caseSensitivity = props.caseSensitivity;
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx("input", {
                      className: "input input-bordered w-full rounded-lg text-sm",
                      placeholder: "정규식으로 검색해보세요",
                      type: "search",
                      value: props.query,
                      onChange: props.onChange
                    }),
                JsxRuntime.jsxs("div", {
                      children: [
                        "/re/i",
                        JsxRuntime.jsx("input", {
                              className: "checkbox checkbox-secondary",
                              checked: caseSensitivity,
                              type: "checkbox",
                              onChange: (function (param) {
                                  setCaseSensitivity(function (param) {
                                        return !caseSensitivity;
                                      });
                                })
                            })
                      ],
                      className: "flex flex-col text-xs place-items-center"
                    })
              ],
              className: "relative flex place-items-center gap-1"
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
                /* Chrono */2,
                "desc"
              ];
      });
  var setOrder = match$1[1];
  var order = match$1[0];
  var match$2 = React.useState(function () {
        return false;
      });
  var caseSensitivity = match$2[0];
  var onChange = function ($$event) {
    var value = $$event.currentTarget.value;
    setQuery(function (param) {
          return value;
        });
  };
  var tmp;
  switch (order[0]) {
    case /* English */0 :
        tmp = "영한";
        break;
    case /* Korean */1 :
        tmp = "한영";
        break;
    case /* Chrono */2 :
        tmp = "최근";
        break;
    
  }
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("div", {
                              children: JsxRuntime.jsx(Home$SearchBar, {
                                    query: query,
                                    caseSensitivity: caseSensitivity,
                                    setCaseSensitivity: match$2[1],
                                    onChange: onChange
                                  }),
                              className: "flex-auto"
                            }),
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsxs("label", {
                                      children: [
                                        order[0] >= 2 ? null : (
                                            order[1] === "asc" ? JsxRuntime.jsx(Solid.ArrowUpIcon, {
                                                    className: "-ml-2 mr-1 h-5 w-5 text-teal-100"
                                                  }) : JsxRuntime.jsx(Solid.ArrowDownIcon, {
                                                    className: "-ml-2 mr-1 h-5 w-5 text-teal-100"
                                                  })
                                          ),
                                        tmp,
                                        JsxRuntime.jsx(Solid.ChevronDownIcon, {
                                              className: "ml-2 -mr-1 h-5 w-5"
                                            })
                                      ],
                                      className: "btn btn-primary",
                                      tabIndex: 0,
                                      onClick: (function (param) {
                                          var lang = order[0];
                                          if (lang >= 2) {
                                            return setOrder(function (param) {
                                                        return [
                                                                /* Chrono */2,
                                                                "desc"
                                                              ];
                                                      });
                                          } else if (order[1] === "asc") {
                                            return setOrder(function (param) {
                                                        return [
                                                                lang,
                                                                "desc"
                                                              ];
                                                      });
                                          } else {
                                            return setOrder(function (param) {
                                                        return [
                                                                lang,
                                                                "asc"
                                                              ];
                                                      });
                                          }
                                        })
                                    }),
                                JsxRuntime.jsxs("ul", {
                                      children: [
                                        JsxRuntime.jsx("li", {
                                              children: JsxRuntime.jsx("button", {
                                                    children: "최근",
                                                    onClick: (function (param) {
                                                        setOrder(function (param) {
                                                              return [
                                                                      /* Chrono */2,
                                                                      "desc"
                                                                    ];
                                                            });
                                                      })
                                                  })
                                            }),
                                        JsxRuntime.jsx("li", {
                                              children: JsxRuntime.jsxs("button", {
                                                    children: [
                                                      "한영",
                                                      order[0] !== 1 ? null : (
                                                          order[1] === "asc" ? JsxRuntime.jsx(Solid.ArrowUpIcon, {
                                                                  className: "-ml-2 mr-1 h-5 w-5 text-primary"
                                                                }) : JsxRuntime.jsx(Solid.ArrowDownIcon, {
                                                                  className: "-ml-2 mr-1 h-5 w-5 text-primary"
                                                                })
                                                        )
                                                    ],
                                                    onClick: (function (param) {
                                                        setOrder(function (order) {
                                                              if (order[0] !== 1 || order[1] !== "asc") {
                                                                return [
                                                                        /* Korean */1,
                                                                        "asc"
                                                                      ];
                                                              } else {
                                                                return [
                                                                        /* Korean */1,
                                                                        "desc"
                                                                      ];
                                                              }
                                                            });
                                                      })
                                                  })
                                            }),
                                        JsxRuntime.jsx("li", {
                                              children: JsxRuntime.jsxs("button", {
                                                    children: [
                                                      "영한",
                                                      order[0] !== 0 ? null : (
                                                          order[1] === "asc" ? JsxRuntime.jsx(Solid.ArrowUpIcon, {
                                                                  className: "-ml-2 mr-1 h-5 w-5 text-primary"
                                                                }) : JsxRuntime.jsx(Solid.ArrowDownIcon, {
                                                                  className: "-ml-2 mr-1 h-5 w-5 text-primary"
                                                                })
                                                        )
                                                    ],
                                                    onClick: (function (param) {
                                                        setOrder(function (order) {
                                                              if (order[0] !== 0 || order[1] !== "asc") {
                                                                return [
                                                                        /* English */0,
                                                                        "asc"
                                                                      ];
                                                              } else {
                                                                return [
                                                                        /* English */0,
                                                                        "desc"
                                                                      ];
                                                              }
                                                            });
                                                      })
                                                  })
                                            })
                                      ],
                                      className: "menu menu-compact dropdown-content p-2 w-[6.5rem] shadow bg-teal-50 dark:bg-zinc-800 rounded-box",
                                      tabIndex: 0
                                    })
                              ],
                              className: "dropdown dropdown-hover dropdown-end"
                            })
                      ],
                      className: "flex items-center space-x-2"
                    }),
                JsxRuntime.jsx(JargonList.make, {
                      order: order,
                      query: query,
                      caseSensitivity: caseSensitivity
                    })
              ],
              className: "grid gap-4 p-5 text-sm"
            });
}

var make = Home;

export {
  SearchBar ,
  make ,
}
/* react Not a pure module */

// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "../node_modules/rescript/lib/es6/curry.js";
import * as React from "react";
import * as Loader from "./Loader.js";
import * as Navbar from "./Navbar.js";
import * as Firebase from "./Firebase.js";
import * as Belt_List from "../node_modules/rescript/lib/es6/belt_List.js";
import * as Reactfire from "reactfire";
import * as Belt_Array from "../node_modules/rescript/lib/es6/belt_Array.js";
import * as CommentRow from "./CommentRow.js";
import * as Belt_Option from "../node_modules/rescript/lib/es6/belt_Option.js";
import * as Caml_option from "../node_modules/rescript/lib/es6/caml_option.js";
import * as SignInContext from "./SignInContext.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as Belt_HashMapString from "../node_modules/rescript/lib/es6/belt_HashMapString.js";
import * as Firestore from "firebase/firestore";

function constructForest(comments) {
  var roots = {
    contents: /* [] */0
  };
  var commentNodeTable = Belt_HashMapString.make(10);
  Belt_Array.forEach(comments, (function (comment) {
          var id = Belt_Option.getExn(Caml_option.undefined_to_opt(comment.id));
          var parent = comment.parent;
          var node = {
            comment: comment,
            parent: undefined,
            children: /* [] */0
          };
          Belt_HashMapString.set(commentNodeTable, id, node);
          if (parent === "") {
            roots.contents = Belt_List.add(roots.contents, node);
            return ;
          }
          
        }));
  Belt_HashMapString.forEach(commentNodeTable, (function (param, node) {
          var parent = node.comment.parent;
          if (parent === "") {
            return ;
          }
          var parentNode = Belt_Option.getExn(Belt_HashMapString.get(commentNodeTable, parent));
          parentNode.children = Belt_List.add(parentNode.children, node);
          node.parent = parentNode;
        }));
  return [
          roots,
          commentNodeTable
        ];
}

function JargonPost$CommentInput(props) {
  var user = props.user;
  var match = React.useState(function () {
        return "";
      });
  var setContent = match[1];
  var content = match[0];
  var handleInputChange = function ($$event) {
    var value = $$event.currentTarget.value;
    Curry._1(setContent, (function (param) {
            return value;
          }));
  };
  var firestore = Reactfire.useFirestore();
  var commentsCollection = Firestore.collection(firestore, "jargons/" + props.id + "/comments");
  var handleSubmit = function ($$event) {
    $$event.preventDefault();
    if (user !== undefined) {
      var email = Belt_Option.getWithDefault(user.email, Belt_Option.getWithDefault(Belt_Option.flatMap(Belt_Array.get(user.providerData, 0), Firebase.User.email), user.uid));
      Firestore.addDoc(commentsCollection, {
            content: content,
            user: email,
            timestamp: Firestore.Timestamp.fromDate(new Date()),
            parent: ""
          });
      return ;
    }
    window.alert("You need to be signed in to comment!");
  };
  return JsxRuntime.jsx("form", {
              children: JsxRuntime.jsxs("div", {
                    children: [
                      JsxRuntime.jsx("textarea", {
                            className: "h-24 p-1 border place-self-stretch",
                            id: "comment",
                            name: "comment",
                            placeholder: "여러분의 생각은 어떠신가요?",
                            value: content,
                            onChange: handleInputChange
                          }),
                      JsxRuntime.jsx("input", {
                            className: "px-1 rounded-md bg-zinc-200 hover:bg-zinc-300",
                            type: "submit",
                            value: "Comment"
                          })
                    ],
                    className: "p-2 gap-3 grid grid-cols-1 place-items-end"
                  }),
              onSubmit: handleSubmit
            });
}

var CommentInput = {
  make: JargonPost$CommentInput
};

function JargonPost(props) {
  var id = props.id;
  var firestore = Reactfire.useFirestore();
  var jargonDoc = Firestore.doc(firestore, "jargons/" + id + "");
  var match = Reactfire.useFirestoreDocData(jargonDoc);
  var jargons = match.data;
  var commentsCollection = Firestore.collection(firestore, "jargons/" + id + "/comments");
  var match$1 = Reactfire.useFirestoreCollectionData(Firestore.query(commentsCollection, Firestore.orderBy("timestamp", "asc")), {
        idField: "id"
      });
  var comments = match$1.data;
  var signInData = React.useContext(SignInContext.context);
  if (match.status === "success" && match$1.status === "success") {
    if (jargons === undefined) {
      return null;
    }
    if (comments === undefined) {
      return null;
    }
    var match$2 = constructForest(Caml_option.valFromOption(comments));
    var user = signInData.user;
    return JsxRuntime.jsxs("div", {
                children: [
                  JsxRuntime.jsx(Navbar.make, {
                        signedIn: signInData.signedIn
                      }),
                  JsxRuntime.jsxs("main", {
                        children: [
                          JsxRuntime.jsxs("h1", {
                                children: [
                                  JsxRuntime.jsx("div", {
                                        children: jargons.english,
                                        className: "text-3xl font-bold"
                                      }),
                                  JsxRuntime.jsx("div", {
                                        children: jargons.korean,
                                        className: "text-2xl font-medium"
                                      })
                                ],
                                className: "grid gap-1"
                              }),
                          JsxRuntime.jsx(JargonPost$CommentInput, {
                                id: id,
                                user: user
                              }),
                          JsxRuntime.jsx("div", {
                                children: JsxRuntime.jsx(CommentRow.make, {
                                      jargonID: id,
                                      siblings: match$2[0].contents,
                                      user: user
                                    })
                              })
                        ],
                        className: "grid p-5 gap-3 dark:text-white"
                      })
                ]
              });
  }
  return JsxRuntime.jsx("div", {
              children: JsxRuntime.jsx(Loader.make, {}),
              className: "h-screen grid justify-center content-center"
            });
}

var make = JargonPost;

export {
  constructForest ,
  CommentInput ,
  make ,
}
/* react Not a pure module */

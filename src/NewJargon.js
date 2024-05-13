// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Util from "./Util.js";
import * as Uuid from "uuid";
import * as React from "react";
import * as Base64 from "./Base64.js";
import * as Core__Array from "../node_modules/@rescript/core/src/Core__Array.js";
import ReactSelect from "react-select";
import * as SignInContext from "./SignInContext.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as RescriptReactRouter from "../node_modules/@rescript/react/src/RescriptReactRouter.js";
import * as RescriptRelay_Query from "../node_modules/rescript-relay/src/RescriptRelay_Query.js";
import * as RescriptRelay_Mutation from "../node_modules/rescript-relay/src/RescriptRelay_Mutation.js";
import * as NewJargonMutation_graphql from "./__generated__/NewJargonMutation_graphql.js";
import * as NewJargonCategoryQuery_graphql from "./__generated__/NewJargonCategoryQuery_graphql.js";
import * as NewJargonWithoutTranslationMutation_graphql from "./__generated__/NewJargonWithoutTranslationMutation_graphql.js";

var convertVariables = NewJargonMutation_graphql.Internal.convertVariables;

var convertResponse = NewJargonMutation_graphql.Internal.convertResponse;

var convertWrapRawResponse = NewJargonMutation_graphql.Internal.convertWrapRawResponse;

var commitMutation = RescriptRelay_Mutation.commitMutation(convertVariables, NewJargonMutation_graphql.node, convertResponse, convertWrapRawResponse);

var use = RescriptRelay_Mutation.useMutation(convertVariables, NewJargonMutation_graphql.node, convertResponse, convertWrapRawResponse);

var NewJargonMutation_category_constraint_decode = NewJargonMutation_graphql.Utils.category_constraint_decode;

var NewJargonMutation_category_constraint_fromString = NewJargonMutation_graphql.Utils.category_constraint_fromString;

var NewJargonMutation_category_update_column_decode = NewJargonMutation_graphql.Utils.category_update_column_decode;

var NewJargonMutation_category_update_column_fromString = NewJargonMutation_graphql.Utils.category_update_column_fromString;

var NewJargonMutation_comment_constraint_decode = NewJargonMutation_graphql.Utils.comment_constraint_decode;

var NewJargonMutation_comment_constraint_fromString = NewJargonMutation_graphql.Utils.comment_constraint_fromString;

var NewJargonMutation_comment_select_column_decode = NewJargonMutation_graphql.Utils.comment_select_column_decode;

var NewJargonMutation_comment_select_column_fromString = NewJargonMutation_graphql.Utils.comment_select_column_fromString;

var NewJargonMutation_comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_decode = NewJargonMutation_graphql.Utils.comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_decode;

var NewJargonMutation_comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_fromString = NewJargonMutation_graphql.Utils.comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_fromString;

var NewJargonMutation_comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_decode = NewJargonMutation_graphql.Utils.comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_decode;

var NewJargonMutation_comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_fromString = NewJargonMutation_graphql.Utils.comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_fromString;

var NewJargonMutation_comment_update_column_decode = NewJargonMutation_graphql.Utils.comment_update_column_decode;

var NewJargonMutation_comment_update_column_fromString = NewJargonMutation_graphql.Utils.comment_update_column_fromString;

var NewJargonMutation_jargon_category_constraint_decode = NewJargonMutation_graphql.Utils.jargon_category_constraint_decode;

var NewJargonMutation_jargon_category_constraint_fromString = NewJargonMutation_graphql.Utils.jargon_category_constraint_fromString;

var NewJargonMutation_jargon_category_select_column_decode = NewJargonMutation_graphql.Utils.jargon_category_select_column_decode;

var NewJargonMutation_jargon_category_select_column_fromString = NewJargonMutation_graphql.Utils.jargon_category_select_column_fromString;

var NewJargonMutation_jargon_category_update_column_decode = NewJargonMutation_graphql.Utils.jargon_category_update_column_decode;

var NewJargonMutation_jargon_category_update_column_fromString = NewJargonMutation_graphql.Utils.jargon_category_update_column_fromString;

var NewJargonMutation_jargon_constraint_decode = NewJargonMutation_graphql.Utils.jargon_constraint_decode;

var NewJargonMutation_jargon_constraint_fromString = NewJargonMutation_graphql.Utils.jargon_constraint_fromString;

var NewJargonMutation_jargon_select_column_decode = NewJargonMutation_graphql.Utils.jargon_select_column_decode;

var NewJargonMutation_jargon_select_column_fromString = NewJargonMutation_graphql.Utils.jargon_select_column_fromString;

var NewJargonMutation_jargon_update_column_decode = NewJargonMutation_graphql.Utils.jargon_update_column_decode;

var NewJargonMutation_jargon_update_column_fromString = NewJargonMutation_graphql.Utils.jargon_update_column_fromString;

var NewJargonMutation_translation_constraint_decode = NewJargonMutation_graphql.Utils.translation_constraint_decode;

var NewJargonMutation_translation_constraint_fromString = NewJargonMutation_graphql.Utils.translation_constraint_fromString;

var NewJargonMutation_translation_select_column_decode = NewJargonMutation_graphql.Utils.translation_select_column_decode;

var NewJargonMutation_translation_select_column_fromString = NewJargonMutation_graphql.Utils.translation_select_column_fromString;

var NewJargonMutation_translation_update_column_decode = NewJargonMutation_graphql.Utils.translation_update_column_decode;

var NewJargonMutation_translation_update_column_fromString = NewJargonMutation_graphql.Utils.translation_update_column_fromString;

var NewJargonMutation_user_constraint_decode = NewJargonMutation_graphql.Utils.user_constraint_decode;

var NewJargonMutation_user_constraint_fromString = NewJargonMutation_graphql.Utils.user_constraint_fromString;

var NewJargonMutation_user_update_column_decode = NewJargonMutation_graphql.Utils.user_update_column_decode;

var NewJargonMutation_user_update_column_fromString = NewJargonMutation_graphql.Utils.user_update_column_fromString;

var NewJargonMutation = {
  category_constraint_decode: NewJargonMutation_category_constraint_decode,
  category_constraint_fromString: NewJargonMutation_category_constraint_fromString,
  category_update_column_decode: NewJargonMutation_category_update_column_decode,
  category_update_column_fromString: NewJargonMutation_category_update_column_fromString,
  comment_constraint_decode: NewJargonMutation_comment_constraint_decode,
  comment_constraint_fromString: NewJargonMutation_comment_constraint_fromString,
  comment_select_column_decode: NewJargonMutation_comment_select_column_decode,
  comment_select_column_fromString: NewJargonMutation_comment_select_column_fromString,
  comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_decode: NewJargonMutation_comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_decode,
  comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_fromString: NewJargonMutation_comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_fromString,
  comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_decode: NewJargonMutation_comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_decode,
  comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_fromString: NewJargonMutation_comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_fromString,
  comment_update_column_decode: NewJargonMutation_comment_update_column_decode,
  comment_update_column_fromString: NewJargonMutation_comment_update_column_fromString,
  jargon_category_constraint_decode: NewJargonMutation_jargon_category_constraint_decode,
  jargon_category_constraint_fromString: NewJargonMutation_jargon_category_constraint_fromString,
  jargon_category_select_column_decode: NewJargonMutation_jargon_category_select_column_decode,
  jargon_category_select_column_fromString: NewJargonMutation_jargon_category_select_column_fromString,
  jargon_category_update_column_decode: NewJargonMutation_jargon_category_update_column_decode,
  jargon_category_update_column_fromString: NewJargonMutation_jargon_category_update_column_fromString,
  jargon_constraint_decode: NewJargonMutation_jargon_constraint_decode,
  jargon_constraint_fromString: NewJargonMutation_jargon_constraint_fromString,
  jargon_select_column_decode: NewJargonMutation_jargon_select_column_decode,
  jargon_select_column_fromString: NewJargonMutation_jargon_select_column_fromString,
  jargon_update_column_decode: NewJargonMutation_jargon_update_column_decode,
  jargon_update_column_fromString: NewJargonMutation_jargon_update_column_fromString,
  translation_constraint_decode: NewJargonMutation_translation_constraint_decode,
  translation_constraint_fromString: NewJargonMutation_translation_constraint_fromString,
  translation_select_column_decode: NewJargonMutation_translation_select_column_decode,
  translation_select_column_fromString: NewJargonMutation_translation_select_column_fromString,
  translation_update_column_decode: NewJargonMutation_translation_update_column_decode,
  translation_update_column_fromString: NewJargonMutation_translation_update_column_fromString,
  user_constraint_decode: NewJargonMutation_user_constraint_decode,
  user_constraint_fromString: NewJargonMutation_user_constraint_fromString,
  user_update_column_decode: NewJargonMutation_user_update_column_decode,
  user_update_column_fromString: NewJargonMutation_user_update_column_fromString,
  Operation: undefined,
  Types: undefined,
  convertVariables: convertVariables,
  convertResponse: convertResponse,
  convertWrapRawResponse: convertWrapRawResponse,
  commitMutation: commitMutation,
  use: use
};

var convertVariables$1 = NewJargonWithoutTranslationMutation_graphql.Internal.convertVariables;

var convertResponse$1 = NewJargonWithoutTranslationMutation_graphql.Internal.convertResponse;

var convertWrapRawResponse$1 = NewJargonWithoutTranslationMutation_graphql.Internal.convertWrapRawResponse;

var commitMutation$1 = RescriptRelay_Mutation.commitMutation(convertVariables$1, NewJargonWithoutTranslationMutation_graphql.node, convertResponse$1, convertWrapRawResponse$1);

var use$1 = RescriptRelay_Mutation.useMutation(convertVariables$1, NewJargonWithoutTranslationMutation_graphql.node, convertResponse$1, convertWrapRawResponse$1);

var NewJargonWithoutTranslationMutation_category_constraint_decode = NewJargonWithoutTranslationMutation_graphql.Utils.category_constraint_decode;

var NewJargonWithoutTranslationMutation_category_constraint_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.category_constraint_fromString;

var NewJargonWithoutTranslationMutation_category_update_column_decode = NewJargonWithoutTranslationMutation_graphql.Utils.category_update_column_decode;

var NewJargonWithoutTranslationMutation_category_update_column_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.category_update_column_fromString;

var NewJargonWithoutTranslationMutation_comment_constraint_decode = NewJargonWithoutTranslationMutation_graphql.Utils.comment_constraint_decode;

var NewJargonWithoutTranslationMutation_comment_constraint_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.comment_constraint_fromString;

var NewJargonWithoutTranslationMutation_comment_select_column_decode = NewJargonWithoutTranslationMutation_graphql.Utils.comment_select_column_decode;

var NewJargonWithoutTranslationMutation_comment_select_column_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.comment_select_column_fromString;

var NewJargonWithoutTranslationMutation_comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_decode = NewJargonWithoutTranslationMutation_graphql.Utils.comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_decode;

var NewJargonWithoutTranslationMutation_comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_fromString;

var NewJargonWithoutTranslationMutation_comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_decode = NewJargonWithoutTranslationMutation_graphql.Utils.comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_decode;

var NewJargonWithoutTranslationMutation_comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_fromString;

var NewJargonWithoutTranslationMutation_comment_update_column_decode = NewJargonWithoutTranslationMutation_graphql.Utils.comment_update_column_decode;

var NewJargonWithoutTranslationMutation_comment_update_column_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.comment_update_column_fromString;

var NewJargonWithoutTranslationMutation_jargon_category_constraint_decode = NewJargonWithoutTranslationMutation_graphql.Utils.jargon_category_constraint_decode;

var NewJargonWithoutTranslationMutation_jargon_category_constraint_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.jargon_category_constraint_fromString;

var NewJargonWithoutTranslationMutation_jargon_category_select_column_decode = NewJargonWithoutTranslationMutation_graphql.Utils.jargon_category_select_column_decode;

var NewJargonWithoutTranslationMutation_jargon_category_select_column_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.jargon_category_select_column_fromString;

var NewJargonWithoutTranslationMutation_jargon_category_update_column_decode = NewJargonWithoutTranslationMutation_graphql.Utils.jargon_category_update_column_decode;

var NewJargonWithoutTranslationMutation_jargon_category_update_column_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.jargon_category_update_column_fromString;

var NewJargonWithoutTranslationMutation_jargon_constraint_decode = NewJargonWithoutTranslationMutation_graphql.Utils.jargon_constraint_decode;

var NewJargonWithoutTranslationMutation_jargon_constraint_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.jargon_constraint_fromString;

var NewJargonWithoutTranslationMutation_jargon_select_column_decode = NewJargonWithoutTranslationMutation_graphql.Utils.jargon_select_column_decode;

var NewJargonWithoutTranslationMutation_jargon_select_column_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.jargon_select_column_fromString;

var NewJargonWithoutTranslationMutation_jargon_update_column_decode = NewJargonWithoutTranslationMutation_graphql.Utils.jargon_update_column_decode;

var NewJargonWithoutTranslationMutation_jargon_update_column_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.jargon_update_column_fromString;

var NewJargonWithoutTranslationMutation_translation_constraint_decode = NewJargonWithoutTranslationMutation_graphql.Utils.translation_constraint_decode;

var NewJargonWithoutTranslationMutation_translation_constraint_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.translation_constraint_fromString;

var NewJargonWithoutTranslationMutation_translation_select_column_decode = NewJargonWithoutTranslationMutation_graphql.Utils.translation_select_column_decode;

var NewJargonWithoutTranslationMutation_translation_select_column_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.translation_select_column_fromString;

var NewJargonWithoutTranslationMutation_translation_update_column_decode = NewJargonWithoutTranslationMutation_graphql.Utils.translation_update_column_decode;

var NewJargonWithoutTranslationMutation_translation_update_column_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.translation_update_column_fromString;

var NewJargonWithoutTranslationMutation_user_constraint_decode = NewJargonWithoutTranslationMutation_graphql.Utils.user_constraint_decode;

var NewJargonWithoutTranslationMutation_user_constraint_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.user_constraint_fromString;

var NewJargonWithoutTranslationMutation_user_update_column_decode = NewJargonWithoutTranslationMutation_graphql.Utils.user_update_column_decode;

var NewJargonWithoutTranslationMutation_user_update_column_fromString = NewJargonWithoutTranslationMutation_graphql.Utils.user_update_column_fromString;

var NewJargonWithoutTranslationMutation = {
  category_constraint_decode: NewJargonWithoutTranslationMutation_category_constraint_decode,
  category_constraint_fromString: NewJargonWithoutTranslationMutation_category_constraint_fromString,
  category_update_column_decode: NewJargonWithoutTranslationMutation_category_update_column_decode,
  category_update_column_fromString: NewJargonWithoutTranslationMutation_category_update_column_fromString,
  comment_constraint_decode: NewJargonWithoutTranslationMutation_comment_constraint_decode,
  comment_constraint_fromString: NewJargonWithoutTranslationMutation_comment_constraint_fromString,
  comment_select_column_decode: NewJargonWithoutTranslationMutation_comment_select_column_decode,
  comment_select_column_fromString: NewJargonWithoutTranslationMutation_comment_select_column_fromString,
  comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_decode: NewJargonWithoutTranslationMutation_comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_decode,
  comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_fromString: NewJargonWithoutTranslationMutation_comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_fromString,
  comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_decode: NewJargonWithoutTranslationMutation_comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_decode,
  comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_fromString: NewJargonWithoutTranslationMutation_comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_fromString,
  comment_update_column_decode: NewJargonWithoutTranslationMutation_comment_update_column_decode,
  comment_update_column_fromString: NewJargonWithoutTranslationMutation_comment_update_column_fromString,
  jargon_category_constraint_decode: NewJargonWithoutTranslationMutation_jargon_category_constraint_decode,
  jargon_category_constraint_fromString: NewJargonWithoutTranslationMutation_jargon_category_constraint_fromString,
  jargon_category_select_column_decode: NewJargonWithoutTranslationMutation_jargon_category_select_column_decode,
  jargon_category_select_column_fromString: NewJargonWithoutTranslationMutation_jargon_category_select_column_fromString,
  jargon_category_update_column_decode: NewJargonWithoutTranslationMutation_jargon_category_update_column_decode,
  jargon_category_update_column_fromString: NewJargonWithoutTranslationMutation_jargon_category_update_column_fromString,
  jargon_constraint_decode: NewJargonWithoutTranslationMutation_jargon_constraint_decode,
  jargon_constraint_fromString: NewJargonWithoutTranslationMutation_jargon_constraint_fromString,
  jargon_select_column_decode: NewJargonWithoutTranslationMutation_jargon_select_column_decode,
  jargon_select_column_fromString: NewJargonWithoutTranslationMutation_jargon_select_column_fromString,
  jargon_update_column_decode: NewJargonWithoutTranslationMutation_jargon_update_column_decode,
  jargon_update_column_fromString: NewJargonWithoutTranslationMutation_jargon_update_column_fromString,
  translation_constraint_decode: NewJargonWithoutTranslationMutation_translation_constraint_decode,
  translation_constraint_fromString: NewJargonWithoutTranslationMutation_translation_constraint_fromString,
  translation_select_column_decode: NewJargonWithoutTranslationMutation_translation_select_column_decode,
  translation_select_column_fromString: NewJargonWithoutTranslationMutation_translation_select_column_fromString,
  translation_update_column_decode: NewJargonWithoutTranslationMutation_translation_update_column_decode,
  translation_update_column_fromString: NewJargonWithoutTranslationMutation_translation_update_column_fromString,
  user_constraint_decode: NewJargonWithoutTranslationMutation_user_constraint_decode,
  user_constraint_fromString: NewJargonWithoutTranslationMutation_user_constraint_fromString,
  user_update_column_decode: NewJargonWithoutTranslationMutation_user_update_column_decode,
  user_update_column_fromString: NewJargonWithoutTranslationMutation_user_update_column_fromString,
  Operation: undefined,
  Types: undefined,
  convertVariables: convertVariables$1,
  convertResponse: convertResponse$1,
  convertWrapRawResponse: convertWrapRawResponse$1,
  commitMutation: commitMutation$1,
  use: use$1
};

var convertVariables$2 = NewJargonCategoryQuery_graphql.Internal.convertVariables;

var convertResponse$2 = NewJargonCategoryQuery_graphql.Internal.convertResponse;

var convertWrapRawResponse$2 = NewJargonCategoryQuery_graphql.Internal.convertWrapRawResponse;

var use$2 = RescriptRelay_Query.useQuery(convertVariables$2, NewJargonCategoryQuery_graphql.node, convertResponse$2);

var useLoader = RescriptRelay_Query.useLoader(convertVariables$2, NewJargonCategoryQuery_graphql.node, (function (prim) {
        return prim;
      }));

var usePreloaded = RescriptRelay_Query.usePreloaded(NewJargonCategoryQuery_graphql.node, convertResponse$2, (function (prim) {
        return prim;
      }));

var $$fetch = RescriptRelay_Query.$$fetch(NewJargonCategoryQuery_graphql.node, convertResponse$2, convertVariables$2);

var fetchPromised = RescriptRelay_Query.fetchPromised(NewJargonCategoryQuery_graphql.node, convertResponse$2, convertVariables$2);

var retain = RescriptRelay_Query.retain(NewJargonCategoryQuery_graphql.node, convertVariables$2);

var NewJargonCategoryQuery = {
  Operation: undefined,
  Types: undefined,
  convertVariables: convertVariables$2,
  convertResponse: convertResponse$2,
  convertWrapRawResponse: convertWrapRawResponse$2,
  use: use$2,
  useLoader: useLoader,
  usePreloaded: usePreloaded,
  $$fetch: $$fetch,
  fetchPromised: fetchPromised,
  retain: retain
};

function NewJargon$MultiValueLabel(props) {
  var acronym = props.children.split(" ")[0];
  return JsxRuntime.jsx("div", {
              children: acronym,
              className: "badge badge-md ml-1"
            });
}

var MultiValueLabel = {
  make: NewJargon$MultiValueLabel
};

function jargonAndCategoryIDToGraphQLInput(jargonID) {
  return function (categoryID) {
    return {
            category_id: categoryID,
            jargon_id: jargonID
          };
  };
}

function NewJargon(props) {
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
  var setEnglish = match$1[1];
  var english = match$1[0];
  var handleJargonChange = function ($$event) {
    var value = $$event.currentTarget.value;
    setEnglish(function (param) {
          return value;
        });
  };
  var match$2 = React.useState(function () {
        return "";
      });
  var setKorean = match$2[1];
  var korean = match$2[0];
  var handleTranslationChange = function ($$event) {
    var value = $$event.currentTarget.value;
    setKorean(function (param) {
          return value;
        });
  };
  var sanitizedEnglish = Util.sanitize(english);
  var sanitizedKorean = Util.sanitize(korean);
  var match$3 = React.useState(function () {
        return false;
      });
  var setWithoutKorean = match$3[1];
  var withoutKorean = match$3[0];
  var match$4 = React.useState(function () {
        return [];
      });
  var setCategoryIDs = match$4[1];
  var categoryIDs = match$4[0];
  var match$5 = React.useState(function () {
        return "";
      });
  var setComment = match$5[1];
  var comment = match$5[0];
  var handleCommentChange = function ($$event) {
    var value = $$event.currentTarget.value;
    setComment(function (param) {
          return value;
        });
  };
  var match$6 = use();
  var newJargonMutate = match$6[0];
  var match$7 = use$1();
  var newJargonWithoutTranslationMutate = match$7[0];
  var match$8 = use$2(undefined, undefined, undefined, undefined);
  var options = match$8.category_connection.edges.map(function (edge) {
        var match = edge.node;
        return {
                label: match.acronym + " (" + match.name + ")",
                value: match.id
              };
      });
  var handleSubmit = function ($$event) {
    $$event.preventDefault();
    if (sanitizedEnglish.length < 1) {
      window.alert("용어를 입력해주세요");
      return ;
    }
    if (!withoutKorean && sanitizedKorean.length < 1) {
      window.alert("번역을 입력해주세요");
      return ;
    }
    if (!signedIn) {
      return RescriptReactRouter.replace("/login");
    }
    if (user == null) {
      return RescriptReactRouter.replace("/logout");
    }
    var comment$1 = comment === "" ? (
        withoutKorean ? "\"" + sanitizedEnglish + "\" 용어의 번역이 필요합니다." : Util.eulLeul(sanitizedKorean) + " 제안합니다."
      ) : comment;
    var jargonID = Uuid.v4();
    var translationID = Uuid.v4();
    var commentID = Uuid.v4();
    var categoryIDToGraphQLInput = jargonAndCategoryIDToGraphQLInput(jargonID);
    if (withoutKorean) {
      newJargonWithoutTranslationMutate({
            authorID: user.uid,
            comment: comment$1,
            commentID: commentID,
            id: jargonID,
            jargon_categories: categoryIDs.map(categoryIDToGraphQLInput),
            name: sanitizedEnglish
          }, undefined, undefined, undefined, (function (param, _errors) {
              var insert_jargon_one = param.insert_jargon_one;
              if (insert_jargon_one !== undefined) {
                return RescriptReactRouter.replace("/jargon/" + insert_jargon_one.id);
              }
              
            }), (function (error) {
              console.error(error);
            }), undefined);
    } else {
      newJargonMutate({
            authorID: user.uid,
            comment: comment$1,
            commentID: commentID,
            id: jargonID,
            jargon_categories: categoryIDs.map(categoryIDToGraphQLInput),
            name: sanitizedEnglish,
            translation: sanitizedKorean,
            translationID: translationID
          }, undefined, undefined, undefined, (function (param, _errors) {
              var insert_jargon_one = param.insert_jargon_one;
              if (insert_jargon_one !== undefined) {
                return RescriptReactRouter.replace("/jargon/" + insert_jargon_one.id);
              }
              
            }), (function (error) {
              console.error(error);
            }), undefined);
    }
  };
  if (signedIn) {
    return JsxRuntime.jsxs("div", {
                children: [
                  JsxRuntime.jsx("h1", {
                        children: "쉬운 전문용어 제안하기"
                      }),
                  JsxRuntime.jsx("form", {
                        children: JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsxs("label", {
                                      children: [
                                        JsxRuntime.jsx("label", {
                                              children: JsxRuntime.jsx("span", {
                                                    children: "원어",
                                                    className: "label-text"
                                                  }),
                                              className: "label"
                                            }),
                                        JsxRuntime.jsx("input", {
                                              className: "input input-bordered w-full",
                                              placeholder: "separated sum",
                                              type: "text",
                                              value: english,
                                              onChange: handleJargonChange
                                            })
                                      ],
                                      className: "block"
                                    }),
                                JsxRuntime.jsxs("label", {
                                      children: [
                                        JsxRuntime.jsxs("label", {
                                              children: [
                                                JsxRuntime.jsx("span", {
                                                      children: "번역",
                                                      className: "label-text"
                                                    }),
                                                React.cloneElement(JsxRuntime.jsxs("div", {
                                                          children: [
                                                            JsxRuntime.jsx("input", {
                                                                  className: "checkbox checkbox-secondary",
                                                                  checked: withoutKorean,
                                                                  type: "checkbox",
                                                                  onChange: (function (param) {
                                                                      setWithoutKorean(function (v) {
                                                                            return !v;
                                                                          });
                                                                    })
                                                                }),
                                                            "번역 없이 제안하기"
                                                          ],
                                                          className: "flex gap-1 text-xs place-items-center tooltip tooltip-bottom"
                                                        }), {
                                                      "data-tip": "번역을 제안하지 않고 용어를 추가해보세요"
                                                    })
                                              ],
                                              className: "label"
                                            }),
                                        JsxRuntime.jsx("input", {
                                              className: "input input-bordered w-full",
                                              disabled: withoutKorean,
                                              placeholder: "출신을 기억하는 합",
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
                                                    children: "분야",
                                                    className: "label-text"
                                                  }),
                                              className: "label"
                                            }),
                                        JsxRuntime.jsx(ReactSelect, {
                                              classNames: {
                                                control: (function (param) {
                                                    return "rounded-btn border text-base border-base-content/20 px-4 py-2";
                                                  }),
                                                menuList: (function (param) {
                                                    return "focus:cursor-pointer menu bg-zinc-50 dark:bg-zinc-800 rounded-box px-2 py-2 mt-1 text-base shadow-lg";
                                                  }),
                                                option: (function (param) {
                                                    return "cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-600 px-2 py-1 rounded-box";
                                                  })
                                              },
                                              components: {
                                                MultiValueLabel: NewJargon$MultiValueLabel
                                              },
                                              onChange: (function (options) {
                                                  setCategoryIDs(function (param) {
                                                        return Core__Array.filterMap(options, (function (param) {
                                                                      return Base64.retrieveOriginalIDInt(param.value);
                                                                    }));
                                                      });
                                                }),
                                              options: options,
                                              isSearchable: false,
                                              isMulti: true,
                                              unstyled: true,
                                              placeholder: "분야를 선택해주세요",
                                              noOptionsMessage: (function (param) {
                                                  return "더 이상의 분야가 없어요";
                                                })
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
                                              placeholder: "첫 댓글로 달려요",
                                              value: comment,
                                              onChange: handleCommentChange
                                            })
                                      ],
                                      className: "block"
                                    }),
                                JsxRuntime.jsx("input", {
                                      className: "btn btn-primary",
                                      disabled: match$6[1] || match$7[1],
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

var make = NewJargon;

export {
  NewJargonMutation ,
  NewJargonWithoutTranslationMutation ,
  NewJargonCategoryQuery ,
  MultiValueLabel ,
  jargonAndCategoryIDToGraphQLInput ,
  make ,
}
/* commitMutation Not a pure module */

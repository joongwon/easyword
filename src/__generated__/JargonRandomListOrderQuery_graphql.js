// Generated by ReScript, PLEASE EDIT WITH CARE
/* @generated */

import * as Caml_option from "../../node_modules/rescript/lib/es6/caml_option.js";
import * as ReactRelay from "react-relay";
import * as RescriptRelay from "../../node_modules/rescript-relay/src/RescriptRelay.js";

function makeRefetchVariables(categoriesFilter, seed) {
  return {
          categoriesFilter: categoriesFilter,
          seed: seed
        };
}

var Types = {
  makeRefetchVariables: makeRefetchVariables
};

var variablesConverter = {"string_comparison_exp":{},"int_comparison_exp":{},"comment_aggregate_bool_exp_count":{"predicate":{"r":"int_comparison_exp"},"filter":{"r":"comment_bool_exp"}},"comment_aggregate_bool_exp_bool_or":{"predicate":{"r":"boolean_comparison_exp"},"filter":{"r":"comment_bool_exp"}},"category_bool_exp":{"name":{"r":"string_comparison_exp"},"jargon_categories_aggregate":{"r":"jargon_category_aggregate_bool_exp"},"jargon_categories":{"r":"jargon_category_bool_exp"},"id":{"r":"int_comparison_exp"},"acronym":{"r":"string_comparison_exp"},"_or":{"r":"category_bool_exp"},"_not":{"r":"category_bool_exp"},"_and":{"r":"category_bool_exp"}},"timestamptz_comparison_exp":{"_nin":{"b":"a"},"_neq":{"b":""},"_lte":{"b":""},"_lt":{"b":""},"_in":{"b":"a"},"_gte":{"b":""},"_gt":{"b":""},"_eq":{"b":""}},"jargon_category_bool_exp":{"jargon_id":{"r":"uuid_comparison_exp"},"jargon":{"r":"jargon_bool_exp"},"category_id":{"r":"int_comparison_exp"},"category":{"r":"category_bool_exp"},"_or":{"r":"jargon_category_bool_exp"},"_not":{"r":"jargon_category_bool_exp"},"_and":{"r":"jargon_category_bool_exp"}},"jargon_category_aggregate_bool_exp_count":{"predicate":{"r":"int_comparison_exp"},"filter":{"r":"jargon_category_bool_exp"}},"comment_aggregate_bool_exp":{"count":{"r":"comment_aggregate_bool_exp_count"},"bool_or":{"r":"comment_aggregate_bool_exp_bool_or"},"bool_and":{"r":"comment_aggregate_bool_exp_bool_and"}},"jargon_category_aggregate_bool_exp":{"count":{"r":"jargon_category_aggregate_bool_exp_count"}},"translation_bool_exp":{"updated_at":{"r":"timestamptz_comparison_exp"},"name_lower_no_spaces":{"r":"string_comparison_exp"},"name":{"r":"string_comparison_exp"},"jargon_id":{"r":"uuid_comparison_exp"},"jargon":{"r":"jargon_bool_exp"},"id":{"r":"uuid_comparison_exp"},"created_at":{"r":"timestamptz_comparison_exp"},"comment_id":{"r":"uuid_comparison_exp"},"comment":{"r":"comment_bool_exp"},"author_id":{"r":"string_comparison_exp"},"author":{"r":"user_bool_exp"},"_or":{"r":"translation_bool_exp"},"_not":{"r":"translation_bool_exp"},"_and":{"r":"translation_bool_exp"}},"translation_aggregate_bool_exp_count":{"predicate":{"r":"int_comparison_exp"},"filter":{"r":"translation_bool_exp"}},"user_bool_exp":{"translations_aggregate":{"r":"translation_aggregate_bool_exp"},"translations":{"r":"translation_bool_exp"},"photo_url":{"r":"string_comparison_exp"},"last_seen":{"r":"timestamptz_comparison_exp"},"jargons_aggregate":{"r":"jargon_aggregate_bool_exp"},"jargons":{"r":"jargon_bool_exp"},"id":{"r":"string_comparison_exp"},"email":{"r":"string_comparison_exp"},"display_name":{"r":"string_comparison_exp"},"comments_aggregate":{"r":"comment_aggregate_bool_exp"},"comments":{"r":"comment_bool_exp"},"_or":{"r":"user_bool_exp"},"_not":{"r":"user_bool_exp"},"_and":{"r":"user_bool_exp"}},"boolean_comparison_exp":{},"translation_aggregate_bool_exp":{"count":{"r":"translation_aggregate_bool_exp_count"}},"uuid_comparison_exp":{"_nin":{"b":"a"},"_neq":{"b":""},"_lte":{"b":""},"_lt":{"b":""},"_in":{"b":"a"},"_gte":{"b":""},"_gt":{"b":""},"_eq":{"b":""}},"comment_bool_exp":{"updated_at":{"r":"timestamptz_comparison_exp"},"translation_id":{"r":"uuid_comparison_exp"},"translation":{"r":"translation_bool_exp"},"removed":{"r":"boolean_comparison_exp"},"parent_id":{"r":"uuid_comparison_exp"},"parent":{"r":"comment_bool_exp"},"jargon_id":{"r":"uuid_comparison_exp"},"jargon":{"r":"jargon_bool_exp"},"id":{"r":"uuid_comparison_exp"},"created_at":{"r":"timestamptz_comparison_exp"},"content":{"r":"string_comparison_exp"},"children_aggregate":{"r":"comment_aggregate_bool_exp"},"children":{"r":"comment_bool_exp"},"author_id":{"r":"string_comparison_exp"},"author":{"r":"user_bool_exp"},"_or":{"r":"comment_bool_exp"},"_not":{"r":"comment_bool_exp"},"_and":{"r":"comment_bool_exp"}},"jargon_aggregate_bool_exp":{"count":{"r":"jargon_aggregate_bool_exp_count"}},"jargon_aggregate_bool_exp_count":{"predicate":{"r":"int_comparison_exp"},"filter":{"r":"jargon_bool_exp"}},"jargon_bool_exp":{"updated_at":{"r":"timestamptz_comparison_exp"},"translations_aggregate":{"r":"translation_aggregate_bool_exp"},"translations":{"r":"translation_bool_exp"},"name_lower_no_spaces":{"r":"string_comparison_exp"},"name_lower":{"r":"string_comparison_exp"},"name":{"r":"string_comparison_exp"},"jargon_categories_aggregate":{"r":"jargon_category_aggregate_bool_exp"},"jargon_categories":{"r":"jargon_category_bool_exp"},"id":{"r":"uuid_comparison_exp"},"created_at":{"r":"timestamptz_comparison_exp"},"comments_aggregate":{"r":"comment_aggregate_bool_exp"},"comments":{"r":"comment_bool_exp"},"author_id":{"r":"string_comparison_exp"},"author":{"r":"user_bool_exp"},"_or":{"r":"jargon_bool_exp"},"_not":{"r":"jargon_bool_exp"},"_and":{"r":"jargon_bool_exp"}},"comment_aggregate_bool_exp_bool_and":{"predicate":{"r":"boolean_comparison_exp"},"filter":{"r":"comment_bool_exp"}},"__root":{"seed":{"b":""},"categoriesFilter":{"r":"jargon_bool_exp"}}};

function convertVariables(v) {
  return RescriptRelay.convertObj(v, variablesConverter, undefined, undefined);
}

var wrapResponseConverter = {"__root":{"list_jargon_random_connection_edges_node":{"f":""}}};

function convertWrapResponse(v) {
  return RescriptRelay.convertObj(v, wrapResponseConverter, undefined, null);
}

var responseConverter = {"__root":{"list_jargon_random_connection_edges_node":{"f":""}}};

function convertResponse(v) {
  return RescriptRelay.convertObj(v, responseConverter, undefined, undefined);
}

var Internal = {
  variablesConverter: variablesConverter,
  variablesConverterMap: undefined,
  convertVariables: convertVariables,
  wrapResponseConverter: wrapResponseConverter,
  wrapResponseConverterMap: undefined,
  convertWrapResponse: convertWrapResponse,
  responseConverter: responseConverter,
  responseConverterMap: undefined,
  convertResponse: convertResponse,
  convertWrapRawResponse: convertWrapResponse,
  convertRawResponse: convertResponse
};

function comment_select_column_decode($$enum) {
  if ($$enum === "translation_id" || $$enum === "removed" || $$enum === "parent_id" || $$enum === "jargon_id" || $$enum === "id" || $$enum === "created_at" || $$enum === "content" || $$enum === "author_id" || $$enum === "updated_at") {
    return $$enum;
  }
  
}

function comment_select_column_fromString(str) {
  return comment_select_column_decode(str);
}

function comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_decode($$enum) {
  if ($$enum === "removed") {
    return $$enum;
  }
  
}

function comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_fromString(str) {
  return comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_decode(str);
}

function comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_decode($$enum) {
  if ($$enum === "removed") {
    return $$enum;
  }
  
}

function comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_fromString(str) {
  return comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_decode(str);
}

function jargon_category_select_column_decode($$enum) {
  if ($$enum === "category_id" || $$enum === "jargon_id") {
    return $$enum;
  }
  
}

function jargon_category_select_column_fromString(str) {
  return jargon_category_select_column_decode(str);
}

function jargon_select_column_decode($$enum) {
  if ($$enum === "name" || $$enum === "id" || $$enum === "created_at" || $$enum === "author_id" || $$enum === "updated_at") {
    return $$enum;
  }
  
}

function jargon_select_column_fromString(str) {
  return jargon_select_column_decode(str);
}

function translation_select_column_decode($$enum) {
  if ($$enum === "name" || $$enum === "jargon_id" || $$enum === "id" || $$enum === "created_at" || $$enum === "comment_id" || $$enum === "author_id" || $$enum === "updated_at") {
    return $$enum;
  }
  
}

function translation_select_column_fromString(str) {
  return translation_select_column_decode(str);
}

var Utils = {
  comment_select_column_decode: comment_select_column_decode,
  comment_select_column_fromString: comment_select_column_fromString,
  comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_decode: comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_decode,
  comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_fromString: comment_select_column_comment_aggregate_bool_exp_bool_and_arguments_columns_fromString,
  comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_decode: comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_decode,
  comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_fromString: comment_select_column_comment_aggregate_bool_exp_bool_or_arguments_columns_fromString,
  jargon_category_select_column_decode: jargon_category_select_column_decode,
  jargon_category_select_column_fromString: jargon_category_select_column_fromString,
  jargon_select_column_decode: jargon_select_column_decode,
  jargon_select_column_fromString: jargon_select_column_fromString,
  translation_select_column_decode: translation_select_column_decode,
  translation_select_column_fromString: translation_select_column_fromString
};

var node = ((function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "categoriesFilter"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "seed"
},
v2 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "seed",
        "variableName": "seed"
      }
    ],
    "kind": "ObjectValue",
    "name": "args"
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 40
  },
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "_and",
        "variableName": "categoriesFilter"
      }
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "name": "asc"
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "JargonRandomListOrderQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "jargonConnection",
        "kind": "LinkedField",
        "name": "list_jargon_random_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "jargonEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "jargon",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "JargonCard_jargon"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "JargonRandomListOrderQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "jargonConnection",
        "kind": "LinkedField",
        "name": "list_jargon_random_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "jargonEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "jargon",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "updated_at",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "order_by",
                        "value": {
                          "category": (v5/*: any*/)
                        }
                      }
                    ],
                    "concreteType": "jargon_category",
                    "kind": "LinkedField",
                    "name": "jargon_categories",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "category",
                        "kind": "LinkedField",
                        "name": "category",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "acronym",
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ],
                    "storageKey": "jargon_categories(order_by:{\"category\":{\"name\":\"asc\"}})"
                  },
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "limit",
                        "value": 20
                      },
                      {
                        "kind": "Literal",
                        "name": "order_by",
                        "value": (v5/*: any*/)
                      }
                    ],
                    "concreteType": "translation",
                    "kind": "LinkedField",
                    "name": "translations",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": "translations(limit:20,order_by:{\"name\":\"asc\"})"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "comment_aggregate",
                    "kind": "LinkedField",
                    "name": "comments_aggregate",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "comment_aggregate_fields",
                        "kind": "LinkedField",
                        "name": "aggregate",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "count",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6794a7c986c9f6abe275990327b0a12b",
    "id": null,
    "metadata": {},
    "name": "JargonRandomListOrderQuery",
    "operationKind": "query",
    "text": "query JargonRandomListOrderQuery(\n  $seed: seed_float!\n  $categoriesFilter: [jargon_bool_exp!]!\n) {\n  list_jargon_random_connection(args: {seed: $seed}, where: {_and: $categoriesFilter}, first: 40) {\n    edges {\n      node {\n        id\n        ...JargonCard_jargon\n      }\n    }\n  }\n}\n\nfragment JargonCard_jargon on jargon {\n  id\n  name\n  updated_at\n  jargon_categories(order_by: {category: {name: asc}}) {\n    category {\n      acronym\n      id\n    }\n    id\n  }\n  translations(order_by: {name: asc}, limit: 20) {\n    id\n    name\n  }\n  comments_aggregate {\n    aggregate {\n      count\n    }\n  }\n}\n"
  }
};
})());

function load(environment, variables, fetchPolicy, fetchKey, networkCacheConfig) {
  return ReactRelay.loadQuery(environment, node, convertVariables(variables), {
              fetchKey: fetchKey,
              fetchPolicy: fetchPolicy,
              networkCacheConfig: networkCacheConfig
            });
}

function queryRefToObservable(token) {
  return Caml_option.nullable_to_opt(token.source);
}

function queryRefToPromise(token) {
  return new Promise((function (resolve, param) {
                var o = queryRefToObservable(token);
                if (o !== undefined) {
                  Caml_option.valFromOption(o).subscribe({
                        complete: (function () {
                            resolve({
                                  TAG: "Ok",
                                  _0: undefined
                                });
                          })
                      });
                  return ;
                } else {
                  return resolve({
                              TAG: "Error",
                              _0: undefined
                            });
                }
              }));
}

export {
  Types ,
  Internal ,
  Utils ,
  node ,
  load ,
  queryRefToObservable ,
  queryRefToPromise ,
}
/* node Not a pure module */

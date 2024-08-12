// Generated by ReScript, PLEASE EDIT WITH CARE
/* @generated */

import * as Caml_option from "../../node_modules/rescript/lib/es6/caml_option.js";
import * as ReactRelay from "react-relay";
import * as RescriptRelay from "../../node_modules/rescript-relay/src/RescriptRelay.js";

function makeRefetchVariables(categoriesFilter, count, cursor, directions, searchTerm) {
  return {
          categoriesFilter: categoriesFilter,
          count: count,
          cursor: cursor,
          directions: directions,
          searchTerm: searchTerm
        };
}

var Types = {
  makeRefetchVariables: makeRefetchVariables
};

var variablesConverter = {"jargon_min_order_by":{},"jargon_category_aggregate_order_by":{"variance":{"r":"jargon_category_variance_order_by"},"var_samp":{"r":"jargon_category_var_samp_order_by"},"var_pop":{"r":"jargon_category_var_pop_order_by"},"sum":{"r":"jargon_category_sum_order_by"},"stddev_samp":{"r":"jargon_category_stddev_samp_order_by"},"stddev_pop":{"r":"jargon_category_stddev_pop_order_by"},"stddev":{"r":"jargon_category_stddev_order_by"},"min":{"r":"jargon_category_min_order_by"},"max":{"r":"jargon_category_max_order_by"},"avg":{"r":"jargon_category_avg_order_by"}},"jargon_category_variance_order_by":{},"jargon_category_var_pop_order_by":{},"comment_aggregate_bool_exp_bool_or":{"predicate":{"r":"boolean_comparison_exp"},"filter":{"r":"comment_bool_exp"}},"category_bool_exp":{"name":{"r":"string_comparison_exp"},"jargon_categories_aggregate":{"r":"jargon_category_aggregate_bool_exp"},"jargon_categories":{"r":"jargon_category_bool_exp"},"id":{"r":"int_comparison_exp"},"acronym":{"r":"string_comparison_exp"},"_or":{"r":"category_bool_exp"},"_not":{"r":"category_bool_exp"},"_and":{"r":"category_bool_exp"}},"timestamptz_comparison_exp":{"_nin":{"b":"a"},"_neq":{"b":""},"_lte":{"b":""},"_lt":{"b":""},"_in":{"b":"a"},"_gte":{"b":""},"_gt":{"b":""},"_eq":{"b":""}},"jargon_category_aggregate_bool_exp_count":{"predicate":{"r":"int_comparison_exp"},"filter":{"r":"jargon_category_bool_exp"}},"user_order_by":{"translations_aggregate":{"r":"translation_aggregate_order_by"},"jargons_aggregate":{"r":"jargon_aggregate_order_by"},"comments_aggregate":{"r":"comment_aggregate_order_by"}},"jargon_category_aggregate_bool_exp":{"count":{"r":"jargon_category_aggregate_bool_exp_count"}},"comment_max_order_by":{},"jargon_category_stddev_order_by":{},"jargon_order_by":{"translations_aggregate":{"r":"translation_aggregate_order_by"},"jargon_categories_aggregate":{"r":"jargon_category_aggregate_order_by"},"comments_aggregate":{"r":"comment_aggregate_order_by"},"author":{"r":"user_order_by"}},"uuid_comparison_exp":{"_nin":{"b":"a"},"_neq":{"b":""},"_lte":{"b":""},"_lt":{"b":""},"_in":{"b":"a"},"_gte":{"b":""},"_gt":{"b":""},"_eq":{"b":""}},"comment_bool_exp":{"updated_at":{"r":"timestamptz_comparison_exp"},"translation_id":{"r":"uuid_comparison_exp"},"translation":{"r":"translation_bool_exp"},"removed":{"r":"boolean_comparison_exp"},"parent_id":{"r":"uuid_comparison_exp"},"parent":{"r":"comment_bool_exp"},"jargon_id":{"r":"uuid_comparison_exp"},"jargon":{"r":"jargon_bool_exp"},"id":{"r":"uuid_comparison_exp"},"created_at":{"r":"timestamptz_comparison_exp"},"content":{"r":"string_comparison_exp"},"children_aggregate":{"r":"comment_aggregate_bool_exp"},"children":{"r":"comment_bool_exp"},"author_id":{"r":"string_comparison_exp"},"author":{"r":"user_bool_exp"},"_or":{"r":"comment_bool_exp"},"_not":{"r":"comment_bool_exp"},"_and":{"r":"comment_bool_exp"}},"jargon_aggregate_bool_exp_count":{"predicate":{"r":"int_comparison_exp"},"filter":{"r":"jargon_bool_exp"}},"jargon_category_var_samp_order_by":{},"comment_min_order_by":{},"string_comparison_exp":{},"int_comparison_exp":{},"comment_aggregate_bool_exp_count":{"predicate":{"r":"int_comparison_exp"},"filter":{"r":"comment_bool_exp"}},"comment_aggregate_order_by":{"min":{"r":"comment_min_order_by"},"max":{"r":"comment_max_order_by"}},"translation_max_order_by":{},"translation_min_order_by":{},"jargon_category_stddev_samp_order_by":{},"jargon_category_bool_exp":{"jargon_id":{"r":"uuid_comparison_exp"},"jargon":{"r":"jargon_bool_exp"},"category_id":{"r":"int_comparison_exp"},"category":{"r":"category_bool_exp"},"_or":{"r":"jargon_category_bool_exp"},"_not":{"r":"jargon_category_bool_exp"},"_and":{"r":"jargon_category_bool_exp"}},"translation_aggregate_order_by":{"min":{"r":"translation_min_order_by"},"max":{"r":"translation_max_order_by"}},"jargon_max_order_by":{},"comment_aggregate_bool_exp":{"count":{"r":"comment_aggregate_bool_exp_count"},"bool_or":{"r":"comment_aggregate_bool_exp_bool_or"},"bool_and":{"r":"comment_aggregate_bool_exp_bool_and"}},"jargon_category_sum_order_by":{},"translation_bool_exp":{"updated_at":{"r":"timestamptz_comparison_exp"},"name_lower_no_spaces":{"r":"string_comparison_exp"},"name":{"r":"string_comparison_exp"},"jargon_id":{"r":"uuid_comparison_exp"},"jargon":{"r":"jargon_bool_exp"},"id":{"r":"uuid_comparison_exp"},"created_at":{"r":"timestamptz_comparison_exp"},"comment_id":{"r":"uuid_comparison_exp"},"comment":{"r":"comment_bool_exp"},"author_id":{"r":"string_comparison_exp"},"author":{"r":"user_bool_exp"},"_or":{"r":"translation_bool_exp"},"_not":{"r":"translation_bool_exp"},"_and":{"r":"translation_bool_exp"}},"translation_aggregate_bool_exp_count":{"predicate":{"r":"int_comparison_exp"},"filter":{"r":"translation_bool_exp"}},"jargon_category_min_order_by":{},"user_bool_exp":{"translations_aggregate":{"r":"translation_aggregate_bool_exp"},"translations":{"r":"translation_bool_exp"},"photo_url":{"r":"string_comparison_exp"},"last_seen":{"r":"timestamptz_comparison_exp"},"jargons_aggregate":{"r":"jargon_aggregate_bool_exp"},"jargons":{"r":"jargon_bool_exp"},"id":{"r":"string_comparison_exp"},"email":{"r":"string_comparison_exp"},"display_name":{"r":"string_comparison_exp"},"comments_aggregate":{"r":"comment_aggregate_bool_exp"},"comments":{"r":"comment_bool_exp"},"_or":{"r":"user_bool_exp"},"_not":{"r":"user_bool_exp"},"_and":{"r":"user_bool_exp"}},"boolean_comparison_exp":{},"translation_aggregate_bool_exp":{"count":{"r":"translation_aggregate_bool_exp_count"}},"jargon_aggregate_bool_exp":{"count":{"r":"jargon_aggregate_bool_exp_count"}},"jargon_aggregate_order_by":{"min":{"r":"jargon_min_order_by"},"max":{"r":"jargon_max_order_by"}},"jargon_category_avg_order_by":{},"jargon_category_stddev_pop_order_by":{},"jargon_bool_exp":{"updated_at":{"r":"timestamptz_comparison_exp"},"translations_aggregate":{"r":"translation_aggregate_bool_exp"},"translations":{"r":"translation_bool_exp"},"name_lower_no_spaces":{"r":"string_comparison_exp"},"name_lower":{"r":"string_comparison_exp"},"name":{"r":"string_comparison_exp"},"jargon_categories_aggregate":{"r":"jargon_category_aggregate_bool_exp"},"jargon_categories":{"r":"jargon_category_bool_exp"},"id":{"r":"uuid_comparison_exp"},"created_at":{"r":"timestamptz_comparison_exp"},"comments_aggregate":{"r":"comment_aggregate_bool_exp"},"comments":{"r":"comment_bool_exp"},"author_id":{"r":"string_comparison_exp"},"author":{"r":"user_bool_exp"},"_or":{"r":"jargon_bool_exp"},"_not":{"r":"jargon_bool_exp"},"_and":{"r":"jargon_bool_exp"}},"jargon_category_max_order_by":{},"comment_aggregate_bool_exp_bool_and":{"predicate":{"r":"boolean_comparison_exp"},"filter":{"r":"comment_bool_exp"}},"__root":{"directions":{"r":"jargon_order_by"},"categoriesFilter":{"r":"jargon_bool_exp"}}};

function convertVariables(v) {
  return RescriptRelay.convertObj(v, variablesConverter, undefined, undefined);
}

var wrapResponseConverter = {"__root":{"":{"f":""}}};

function convertWrapResponse(v) {
  return RescriptRelay.convertObj(v, wrapResponseConverter, undefined, null);
}

var responseConverter = {"__root":{"":{"f":""}}};

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

function order_by_decode($$enum) {
  if ($$enum === "desc_nulls_first" || $$enum === "desc" || $$enum === "asc_nulls_last" || $$enum === "asc_nulls_first" || $$enum === "asc" || $$enum === "desc_nulls_last") {
    return $$enum;
  }
  
}

function order_by_fromString(str) {
  return order_by_decode(str);
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
  order_by_decode: order_by_decode,
  order_by_fromString: order_by_fromString,
  translation_select_column_decode: translation_select_column_decode,
  translation_select_column_fromString: translation_select_column_fromString
};

var node = ((function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "categoriesFilter"
  },
  {
    "defaultValue": 40,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "directions"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "searchTerm"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "_iregex",
        "variableName": "searchTerm"
      }
    ],
    "kind": "ObjectValue",
    "name": "name_lower_no_spaces"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  {
    "kind": "Variable",
    "name": "order_by",
    "variableName": "directions"
  },
  {
    "fields": [
      {
        "items": [
          {
            "fields": [
              {
                "items": [
                  {
                    "fields": (v1/*: any*/),
                    "kind": "ObjectValue",
                    "name": "_or.0"
                  },
                  {
                    "fields": [
                      {
                        "fields": (v1/*: any*/),
                        "kind": "ObjectValue",
                        "name": "translations"
                      }
                    ],
                    "kind": "ObjectValue",
                    "name": "_or.1"
                  }
                ],
                "kind": "ListValue",
                "name": "_or"
              }
            ],
            "kind": "ObjectValue",
            "name": "_and.0"
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
            "name": "_and.1"
          }
        ],
        "kind": "ListValue",
        "name": "_and"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "JargonListOrderRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          }
        ],
        "kind": "FragmentSpread",
        "name": "JargonListOrderQuery"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "JargonListOrderRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "jargonConnection",
        "kind": "LinkedField",
        "name": "jargon_connection",
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": [
          "order_by",
          "where"
        ],
        "handle": "connection",
        "key": "JargonListOrderQuery_jargon_connection",
        "kind": "LinkedHandle",
        "name": "jargon_connection"
      }
    ]
  },
  "params": {
    "cacheID": "992565801f718bcf6dbb1b6b819b3b46",
    "id": null,
    "metadata": {},
    "name": "JargonListOrderRefetchQuery",
    "operationKind": "query",
    "text": "query JargonListOrderRefetchQuery(\n  $categoriesFilter: [jargon_bool_exp!]\n  $count: Int = 40\n  $cursor: String\n  $directions: [jargon_order_by!]\n  $searchTerm: String\n) {\n  ...JargonListOrderQuery_1G22uz\n}\n\nfragment JargonCard_jargon on jargon {\n  id\n  name\n  updated_at\n  jargon_categories(order_by: {category: {name: asc}}) {\n    category {\n      acronym\n      id\n    }\n    id\n  }\n  translations(order_by: {name: asc}, limit: 20) {\n    id\n    name\n  }\n  comments_aggregate {\n    aggregate {\n      count\n    }\n  }\n}\n\nfragment JargonListOrderQuery_1G22uz on query_root {\n  jargon_connection(order_by: $directions, first: $count, after: $cursor, where: {_and: [{_or: [{name_lower_no_spaces: {_iregex: $searchTerm}}, {translations: {name_lower_no_spaces: {_iregex: $searchTerm}}}]}, {_and: $categoriesFilter}]}) {\n    edges {\n      node {\n        id\n        ...JargonCard_jargon\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
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

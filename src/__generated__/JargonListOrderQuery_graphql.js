// Generated by ReScript, PLEASE EDIT WITH CARE
/* @generated */

import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.js";
import * as RelayRuntime from "relay-runtime";
import * as JargonListOrderRefetchQuery_graphql from "./JargonListOrderRefetchQuery_graphql.js";

var Types = {};

var fragmentConverter = {"__root":{"jargon_connection_edges_node":{"f":""}}};

function convertFragment(v) {
  return RescriptRelay.convertObj(v, fragmentConverter, undefined, undefined);
}

var Internal = {
  fragmentConverter: fragmentConverter,
  fragmentConverterMap: undefined,
  convertFragment: convertFragment
};

function makeConnectionId(connectionParentDataId, directions, searchTerm, categoryIDs) {
  var args = {
    order_by: directions,
    where: {
      _and: [
        {
          _or: [
            {
              name_lower_no_spaces: {
                _iregex: searchTerm
              }
            },
            {
              translations: {
                name_lower_no_spaces: {
                  _iregex: searchTerm
                }
              }
            }
          ]
        },
        {
          _or: [
            {
              jargon_categories: {
                category_id: {
                  _in: categoryIDs
                }
              }
            },
            {
              _not: {
                jargon_categories: {
                  _and: []
                }
              }
            }
          ]
        }
      ]
    }
  };
  return RelayRuntime.ConnectionHandler.getConnectionID(connectionParentDataId, "JargonListOrderQuery_jargon_connection", args);
}

function getConnectionNodes(connection) {
  return Belt_Array.keepMap(connection.edges, (function (edge) {
                return edge.node;
              }));
}

var Utils = {
  getConnectionNodes: getConnectionNodes
};

function makeNode(rescript_graphql_node_JargonListOrderRefetchQuery) {
  return ((function(){
var v0 = [
  "jargon_connection"
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
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "categoryIDs"
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
      "kind": "RootArgument",
      "name": "directions"
    },
    {
      "kind": "RootArgument",
      "name": "searchTerm"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": rescript_graphql_node_JargonListOrderRefetchQuery
    }
  },
  "name": "JargonListOrderQuery",
  "selections": [
    {
      "alias": "jargon_connection",
      "args": [
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
                      "items": [
                        {
                          "fields": [
                            {
                              "fields": [
                                {
                                  "fields": [
                                    {
                                      "kind": "Variable",
                                      "name": "_in",
                                      "variableName": "categoryIDs"
                                    }
                                  ],
                                  "kind": "ObjectValue",
                                  "name": "category_id"
                                }
                              ],
                              "kind": "ObjectValue",
                              "name": "jargon_categories"
                            }
                          ],
                          "kind": "ObjectValue",
                          "name": "_or.0"
                        },
                        {
                          "kind": "Literal",
                          "name": "_or.1",
                          "value": {
                            "_not": {
                              "jargon_categories": {
                                "_and": []
                              }
                            }
                          }
                        }
                      ],
                      "kind": "ListValue",
                      "name": "_or"
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
      "concreteType": "jargonConnection",
      "kind": "LinkedField",
      "name": "__JargonListOrderQuery_jargon_connection_connection",
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "JargonCard_jargon"
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
    }
  ],
  "type": "query_root",
  "abstractKey": null
};
})());
}

var node = makeNode(JargonListOrderRefetchQuery_graphql.node);

export {
  Types ,
  Internal ,
  makeConnectionId ,
  Utils ,
  node ,
}
/* node Not a pure module */

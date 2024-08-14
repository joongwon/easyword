// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Loader from "./Loader.js";
import * as JargonCard from "./JargonCard.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as RescriptRelay_Fragment from "rescript-relay/src/RescriptRelay_Fragment.js";
import * as JargonListOrderQuery_graphql from "./__generated__/JargonListOrderQuery_graphql.js";
import ReactInfiniteScrollComponent from "react-infinite-scroll-component";
import * as JargonListOrderRefetchQuery_graphql from "./__generated__/JargonListOrderRefetchQuery_graphql.js";

var getConnectionNodes = JargonListOrderQuery_graphql.Utils.getConnectionNodes;

var convertFragment = JargonListOrderQuery_graphql.Internal.convertFragment;

function use(fRef) {
  return RescriptRelay_Fragment.useFragment(JargonListOrderQuery_graphql.node, convertFragment, fRef);
}

function useOpt(fRef) {
  return RescriptRelay_Fragment.useFragmentOpt(fRef !== undefined ? Caml_option.some(Caml_option.valFromOption(fRef)) : undefined, JargonListOrderQuery_graphql.node, convertFragment);
}

var makeRefetchVariables = JargonListOrderRefetchQuery_graphql.Types.makeRefetchVariables;

var convertRefetchVariables = JargonListOrderRefetchQuery_graphql.Internal.convertVariables;

function useRefetchable(fRef) {
  return RescriptRelay_Fragment.useRefetchableFragment(JargonListOrderQuery_graphql.node, convertFragment, convertRefetchVariables, fRef);
}

function usePagination(fRef) {
  return RescriptRelay_Fragment.usePaginationFragment(JargonListOrderQuery_graphql.node, fRef, convertFragment, convertRefetchVariables);
}

function useBlockingPagination(fRef) {
  return RescriptRelay_Fragment.useBlockingPaginationFragment(JargonListOrderQuery_graphql.node, fRef, convertFragment, convertRefetchVariables);
}

var JargonListOrderQuery = {
  getConnectionNodes: getConnectionNodes,
  Types: undefined,
  Operation: undefined,
  convertFragment: convertFragment,
  use: use,
  useOpt: useOpt,
  makeRefetchVariables: makeRefetchVariables,
  convertRefetchVariables: convertRefetchVariables,
  useRefetchable: useRefetchable,
  usePagination: usePagination,
  useBlockingPagination: useBlockingPagination
};

function JargonList(props) {
  var match = usePagination(props.query);
  var loadNext = match.loadNext;
  var rows = getConnectionNodes(match.data.jargon_connection).map(function (node) {
        return [
                node.id,
                node.fragmentRefs
              ];
      });
  return JsxRuntime.jsx(ReactInfiniteScrollComponent, {
              className: "grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-2 pb-10",
              dataLength: rows.length,
              next: (function () {
                  loadNext(40, undefined);
                }),
              hasMore: match.hasNext,
              loader: JsxRuntime.jsx("div", {
                    children: JsxRuntime.jsx(Loader.make, {}),
                    className: "grid justify-center content-center"
                  }),
              children: rows.map(function (param) {
                    return JsxRuntime.jsx("li", {
                                children: JsxRuntime.jsx(JargonCard.make, {
                                      jargonCardRef: param[1]
                                    }),
                                className: "flex flex-col gap-y-2 group cursor-pointer bg-white hover:bg-teal-50 rounded-xl shadow-md dark:bg-zinc-900 dark:hover:bg-teal-900"
                              }, param[0]);
                  })
            });
}

var make = JargonList;

export {
  JargonListOrderQuery ,
  make ,
}
/* Loader Not a pure module */

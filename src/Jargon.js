// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Js_dict from "../node_modules/rescript/lib/es6/js_dict.js";
import * as Belt_Array from "../node_modules/rescript/lib/es6/belt_Array.js";

function joinTranslations(translations) {
  return Belt_Array.map(Js_dict.entries(translations).sort(function (param, param$1) {
                    var v2 = param$1[1];
                    var v1 = param[1];
                    if ((v2 - v1 | 0) !== 0) {
                      return v2 - v1 | 0;
                    }
                    var k2 = param$1[0];
                    var k1 = param[0];
                    if (k1 > k2) {
                      return 1;
                    } else if (k1 < k2) {
                      return -1;
                    } else {
                      return 0;
                    }
                  }), (function (param) {
                  return param[0];
                })).join(",");
}

export {
  joinTranslations ,
}
/* No side effect */

"use strict";
var utils_request = require("../utils/request.js");
function fetchBannerList(data) {
  var _a, _b;
  return (_b = (_a = utils_request.request) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a, "/banner/getBanner", data, {
    noAuth: true
  });
}
exports.fetchBannerList = fetchBannerList;

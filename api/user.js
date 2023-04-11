"use strict";
var utils_request = require("../utils/request.js");
function fetchUserInfo() {
  var _a, _b;
  return (_b = (_a = utils_request.request) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a, "/user/userInfo", {}, { noAuth: true });
}
exports.fetchUserInfo = fetchUserInfo;

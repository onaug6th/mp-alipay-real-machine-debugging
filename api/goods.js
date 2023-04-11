"use strict";
var utils_request = require("../utils/request.js");
function fetchRecommendGoodsList(data) {
  var _a, _b;
  return (_b = (_a = utils_request.request) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a, "/product/recommend", data, { noAuth: true });
}
function fetchGoodsDetail(data) {
  var _a, _b;
  return (_b = (_a = utils_request.request) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a, "/product/detail", data, { noAuth: true });
}
exports.fetchGoodsDetail = fetchGoodsDetail;
exports.fetchRecommendGoodsList = fetchRecommendGoodsList;

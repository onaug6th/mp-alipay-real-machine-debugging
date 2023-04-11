"use strict";
var common_vendor = require("../common/vendor.js");
var config_app = require("../config/app.js");
function baseRequest(url, method, data, { noAuth = false, noVerify = false }, params) {
  const store = common_vendor.useStore();
  const token = store.state.app.token;
  const Url = config_app.HTTP_REQUEST_URL;
  let header = JSON.parse(JSON.stringify(config_app.HEADER));
  if (params != void 0) {
    header = config_app.HEADERPARAMS;
  }
  if (!noAuth) {
    if (!token) {
      return Promise.reject({
        msg: "\u672A\u767B\u5F55"
      });
    }
    if (token && token !== "null")
      header[config_app.TOKENNAME] = "Bearer " + token;
  }
  return new Promise((reslove, reject) => {
    common_vendor.index.request({
      url: Url + url,
      method: method || "GET",
      header,
      data: data || {},
      success: (res) => {
        console.log("res", res);
        common_vendor.index.hideLoading();
        res.data.token && res.data.token !== "null" && store.commit("LOGIN", {
          token: res.data.token
        });
        if (noVerify) {
          reslove(res);
        } else if (res.statusCode === 200) {
          reslove(res.data);
        } else {
          reject(res.data.message || "\u7CFB\u7EDF\u9519\u8BEF");
        }
      },
      fail: (msg) => {
        common_vendor.index.hideLoading();
        reject("\u8BF7\u6C42\u5931\u8D25");
      }
    });
  });
}
const requestOptions = [
  "options",
  "get",
  "post",
  "put",
  "head",
  "delete",
  "trace",
  "connect"
];
const request = {};
requestOptions.forEach((method) => {
  if (method && typeof method === "string") {
    const m = method.toUpperCase;
    request[method] = (api, data, opt, params) => baseRequest(api, m, data, opt || {}, params);
  }
});
exports.request = request;

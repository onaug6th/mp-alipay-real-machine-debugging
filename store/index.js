"use strict";
var common_vendor = require("../common/vendor.js");
var store_modules_app_index = require("./modules/app/index.js");
var store_modules_banner_index = require("./modules/banner/index.js");
var store_getters = require("./getters.js");
const store = common_vendor.createStore({
  modules: {
    app: store_modules_app_index.store,
    banner: store_modules_banner_index.store
  },
  getters: store_getters.getters
});
exports.store = store;

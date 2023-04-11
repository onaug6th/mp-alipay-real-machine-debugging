"use strict";
var store_modules_app_state = require("./state.js");
var store_modules_app_ations = require("./ations.js");
var store_modules_app_mutations = require("./mutations.js");
const store = {
  state: store_modules_app_state.state,
  actions: store_modules_app_ations.actions,
  mutations: store_modules_app_mutations.mutations
};
exports.store = store;

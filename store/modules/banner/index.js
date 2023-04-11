"use strict";
var store_modules_banner_state = require("./state.js");
var store_modules_banner_ations = require("./ations.js");
var store_modules_banner_mutations = require("./mutations.js");
const store = {
  state: store_modules_banner_state.state,
  actions: store_modules_banner_ations.actions,
  mutations: store_modules_banner_mutations.mutations
};
exports.store = store;

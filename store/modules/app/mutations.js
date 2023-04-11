"use strict";
var store_modules_app_mutationTypes = require("./mutation-types.js");
const mutations = {
  [store_modules_app_mutationTypes.AppMutationTypes.SET_TOKEN](state, token) {
    state.token = token;
  }
};
exports.mutations = mutations;

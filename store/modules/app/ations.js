"use strict";
var store_modules_app_actionTypes = require("./action-types.js");
var store_modules_app_mutationTypes = require("./mutation-types.js");
const actions = {
  [store_modules_app_actionTypes.AppActionTypes.ACTION_LOGIN]({ commit }, token) {
    commit(store_modules_app_mutationTypes.AppMutationTypes.SET_TOKEN, token);
  },
  [store_modules_app_actionTypes.AppActionTypes.ACTION_RESET_TOKEN]({ commit }) {
    commit(store_modules_app_mutationTypes.AppMutationTypes.SET_TOKEN, "");
  }
};
exports.actions = actions;

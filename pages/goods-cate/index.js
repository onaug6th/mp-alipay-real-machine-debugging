"use strict";
var common_vendor = require("../../common/vendor.js");
var store_modules_app_actionTypes = require("../../store/modules/app/action-types.js");
var api_user = require("../../api/user.js");
require("../../utils/request.js");
require("../../config/app.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const title = common_vendor.ref("\u5206\u7C7B");
    const store = common_vendor.useStore();
    const setToken = () => {
      store.dispatch(store_modules_app_actionTypes.AppActionTypes.ACTION_LOGIN, "token");
      title.value = store.state.app.token;
    };
    api_user.fetchUserInfo().then((r) => {
      console.log("r", r);
    }).catch((err) => console.log(err));
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.o(setToken)
      };
    };
  }
});
my.createPage(_sfc_main);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var store_index = require("./store/index.js");
require("./store/modules/app/index.js");
require("./store/modules/app/state.js");
require("./store/modules/app/ations.js");
require("./store/modules/app/action-types.js");
require("./store/modules/app/mutation-types.js");
require("./store/modules/app/mutations.js");
require("./store/modules/banner/index.js");
require("./store/modules/banner/state.js");
require("./store/modules/banner/ations.js");
require("./api/banner.js");
require("./utils/request.js");
require("./config/app.js");
require("./store/modules/banner/action-types.js");
require("./store/modules/banner/mutation-types.js");
require("./store/modules/banner/mutations.js");
require("./store/getters.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/goods/index.js";
  "./pages/goods-cate/index.js";
  "./pages/goods/goodsDetail.js";
  "./pages/shopping-cart/index.js";
  "./pages/user/index.js";
  "./pages/discover-home/index.js";
  "./userA/pages/orderList/index.js";
  "./userB/pages/orderList/index.js";
  "./userC/pages/orderList/index.js";
  "./temp/pages/orderList/index.js";
  "./pages/discover/activity.js";
  "./pages/my/memberCenter.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    common_vendor.onLaunch(() => {
      console.log("App Launch");
    });
    common_vendor.onShow(() => {
      console.log("App Show");
    });
    common_vendor.onHide(() => {
      console.log("App Hide");
    });
    return () => {
    };
  }
});
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  common_vendor.index.getSystemInfo({
    success: function(e) {
      app.config.globalProperties.$windowHeight = e.windowHeight;
      app.config.globalProperties.$navHeight = e.statusBarHeight * (750 / e.windowWidth) + 91;
      app.config.globalProperties.$SystemInfo = e;
    }
  });
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;

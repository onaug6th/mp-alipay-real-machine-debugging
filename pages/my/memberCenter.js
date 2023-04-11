"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  ProductListGrid();
}
const ProductListGrid = () => "../../components/product-list-grid/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    common_vendor.ref(true);
    let userInfo = common_vendor.reactive({
      pic: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8SiagBMUuLZ7USibVCmnJBvy87ib8gT8gl1wrCwwZRVDsv9a6t4lbGLHcoiacKDxjvgw0v374xE3UkQ/132",
      nickName: "coboy",
      memberLevelVO: "Lv1",
      userMobile: "1382550699x"
    });
    const toPage = (path) => {
      console.log("toPage");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(userInfo).pic,
        b: common_vendor.o(($event) => toPage()),
        c: common_vendor.t(common_vendor.unref(userInfo).nickName),
        d: common_vendor.t(common_vendor.unref(userInfo).memberLevelVO ? common_vendor.unref(userInfo).memberLevelVO : "LV0"),
        e: common_vendor.unref(userInfo).userMobile
      }, common_vendor.unref(userInfo).userMobile ? {
        f: common_vendor.t(common_vendor.unref(userInfo).userMobile || "")
      } : {
        g: common_vendor.o(($event) => toPage())
      });
    };
  }
});
my.createPage(_sfc_main);

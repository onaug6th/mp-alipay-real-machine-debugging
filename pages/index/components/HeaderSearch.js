"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  name: "HeaderSearch",
  setup() {
    const { proxy } = common_vendor.getCurrentInstance();
    const sysHeight = common_vendor.ref(proxy.$CustomBar);
    const goPage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/goods/goods-search/index"
      });
    };
    return {
      sysHeight,
      goPage
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.sysHeight + "px"
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createComponent(Component);

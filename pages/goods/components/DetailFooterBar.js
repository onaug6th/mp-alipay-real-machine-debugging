"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  name: "DetailFooterBar",
  emits: ["setIsOpenAttrWindow"],
  setup(props, { emit }) {
    let cartCount = common_vendor.ref(0);
    let isFavorite = common_vendor.ref(false);
    const openAttrWindow = () => {
      emit("setIsOpenAttrWindow", true);
    };
    const gotoHandler = () => {
      console.log("gotoHandler");
    };
    const toggleFavourite = () => {
      console.log("toggleFavourite");
    };
    const joinCart = () => {
      openAttrWindow();
    };
    const buyNowAction = () => {
      openAttrWindow();
    };
    return {
      cartCount,
      isFavorite,
      gotoHandler,
      toggleFavourite,
      joinCart,
      buyNowAction
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => _ctx.gotoHandler && _ctx.gotoHandler(...args)),
    b: !_ctx.isFavorite
  }, !_ctx.isFavorite ? {} : {}, {
    c: common_vendor.o((...args) => _ctx.toggleFavourite && _ctx.toggleFavourite(...args)),
    d: _ctx.cartCount > 0
  }, _ctx.cartCount > 0 ? {
    e: common_vendor.t(_ctx.cartCount > 99 ? "99+" : _ctx.cartCount)
  } : {}, {
    f: common_vendor.o((...args) => _ctx.joinCart && _ctx.joinCart(...args)),
    g: common_vendor.o((...args) => _ctx.buyNowAction && _ctx.buyNowAction(...args))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6e75cd6b"]]);
my.createComponent(Component);

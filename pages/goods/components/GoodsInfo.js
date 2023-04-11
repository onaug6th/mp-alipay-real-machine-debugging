"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    goodsInfo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  emits: ["openShare"],
  setup(__props, { emit: emits }) {
    const openShare = () => {
      emits("openShare");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.goodsInfo.price),
        b: common_vendor.o(openShare),
        c: common_vendor.t(__props.goodsInfo.marketPrice),
        d: common_vendor.t(__props.goodsInfo.prodName),
        e: common_vendor.t(__props.goodsInfo.brief)
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-632cb5e8"]]);
my.createComponent(Component);

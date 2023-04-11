"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  emits: ["closeMessage"],
  setup(__props, { emit: emits }) {
    const closeMessage = () => {
      emits("closeMessage");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(closeMessage)
      };
    };
  }
});
my.createComponent(_sfc_main);

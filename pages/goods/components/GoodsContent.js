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
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.goodsInfo.content
      };
    };
  }
});
my.createComponent(_sfc_main);

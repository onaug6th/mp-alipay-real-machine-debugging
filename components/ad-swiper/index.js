"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  name: "AdSwiper",
  props: {
    imgUrls: {
      type: Array,
      default: () => {
        return [];
      }
    },
    current: {
      type: Number,
      default: 0
    },
    imageH: {
      type: Number,
      default: 600
    },
    radius: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: "aspectFill"
    },
    imgKey: {
      type: String,
      default: "src"
    },
    indicatorDots: {
      type: Boolean,
      default: true
    },
    disableTouch: {
      type: Boolean,
      default: false
    }
  },
  emits: ["open", "update:current"],
  setup(props, { emit }) {
    let state = common_vendor.reactive({
      circular: true,
      autoplay: true,
      interval: 3e3,
      duration: 500,
      currents: 1,
      controls: true
    });
    const bindPause = function() {
      state.autoplay = false;
    };
    const change = (e) => {
      emit("update:current", e.detail.current);
      state.currents = e.detail.current + 1;
    };
    const openLink = (i) => {
      emit("open", i);
    };
    const bindPlay = () => {
      state.autoplay = false;
    };
    const bindEnd = () => {
      state.autoplay = true;
    };
    const goToGoods = (link) => {
      if (link) {
        common_vendor.index.navigateTo({
          url: link
        });
      }
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(state)), {
      bindPause,
      change,
      openLink,
      bindPlay,
      bindEnd,
      goToGoods
    });
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.imgUrls, (item, index, i0) => {
      return common_vendor.e({
        a: item.type == "video"
      }, item.type == "video" ? {
        b: item.src,
        c: common_vendor.o((...args) => _ctx.bindPlay && _ctx.bindPlay(...args)),
        d: common_vendor.o((...args) => _ctx.bindEnd && _ctx.bindEnd(...args)),
        e: common_vendor.o((...args) => _ctx.bindPause && _ctx.bindPause(...args)),
        f: common_vendor.s("height:" + _ctx.imageH + "rpx;")
      } : {
        g: item[_ctx.imgKey],
        h: _ctx.mode,
        i: common_vendor.s("height:" + _ctx.imageH + "rpx;"),
        j: common_vendor.n(_ctx.radius ? "image-radius" : ""),
        k: common_vendor.o(($event) => _ctx.openLink(index))
      }, {
        l: index
      });
    }),
    b: _ctx.indicatorDots,
    c: _ctx.autoplay,
    d: _ctx.circular,
    e: _ctx.disableTouch,
    f: _ctx.current,
    g: _ctx.interval,
    h: _ctx.duration,
    i: common_vendor.s("height:" + _ctx.imageH + "rpx;"),
    j: common_vendor.o((...args) => _ctx.change && _ctx.change(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b0f2e4f6"]]);
my.createComponent(Component);

"use strict";
var common_vendor = require("../../common/vendor.js");
var _imports_0 = "/static/images/stop.png";
const _sfc_main = common_vendor.defineComponent({
  name: "ProductDetailSwiper",
  props: {
    imgUrls: {
      type: Array,
      default: () => {
        return [];
      }
    },
    videoline: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    let state = common_vendor.reactive({
      indicatorDots: true,
      circular: true,
      autoplay: true,
      interval: 3e3,
      duration: 500,
      currents: 1,
      controls: true,
      isPlay: true,
      videoContext: ""
    });
    const videoPause = (e) => {
      console.log("e");
    };
    const bindPause = () => {
      state.videoContext.play();
      state.controls = false;
      state.autoplay = false;
    };
    const change = (e) => {
      state.currents = e.detail.current + 1;
    };
    common_vendor.onMounted(() => {
    });
    return {
      state,
      change,
      bindPause,
      videoPause
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.videoline
  }, _ctx.videoline ? {
    b: _ctx.videoline,
    c: _ctx.imgUrls[0],
    d: common_vendor.o((...args) => _ctx.videoPause && _ctx.videoPause(...args)),
    e: !_ctx.state.controls,
    f: _ctx.imgUrls[0],
    g: _ctx.state.controls,
    h: _imports_0,
    i: _ctx.state.controls,
    j: common_vendor.o((...args) => _ctx.bindPause && _ctx.bindPause(...args))
  } : {}, {
    k: common_vendor.f(_ctx.imgUrls, (item, index, i0) => {
      return {
        a: item,
        b: index
      };
    }),
    l: _ctx.state.indicatorDots,
    m: _ctx.state.autoplay,
    n: _ctx.state.circular,
    o: _ctx.state.interval,
    p: _ctx.state.duration,
    q: common_vendor.o((...args) => _ctx.change && _ctx.change(...args))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e35d378e"]]);
my.createComponent(Component);

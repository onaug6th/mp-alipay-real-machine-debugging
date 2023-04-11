"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  name: "MenusComp",
  props: {
    menusConfig: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  setup(props) {
    const menus = common_vendor.computed$1(() => {
      let m = props.menusConfig;
      m.forEach((item) => {
        item.url = "../" + item.url;
      });
      return m;
    });
    const menusTap = (url) => {
      if (url.indexOf("http") != -1)
        ;
      else {
        common_vendor.index.navigateTo({
          url
        });
      }
    };
    return {
      menus,
      menusTap
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.menus.length
  }, _ctx.menus.length ? {
    b: common_vendor.f(_ctx.menus, (item, index, i0) => {
      return {
        a: item.url,
        b: common_vendor.t(item.title),
        c: common_vendor.o(($event) => _ctx.menusTap(item.path)),
        d: index
      };
    })
  } : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createComponent(Component);

"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  name: "AttrWindow",
  props: {
    attr: {
      type: Object,
      default: () => {
        return {};
      }
    },
    isGroupBuying: {
      type: Number,
      default: 0
    },
    iSplus: {
      type: Number,
      default: 0
    },
    iScart: {
      type: Number,
      default: 0
    },
    iSbnt: {
      type: Number,
      default: 0
    },
    pointsMode: {
      type: Number,
      default: () => void 0
    }
  },
  emits: ["confirm", "iptCartNum", "closeWindow", "changeCartNum", "selectAttrVal"],
  setup(props, { emit }) {
    let cartNum = common_vendor.computed$1({
      get: () => props.attr.productSelect.cart_num,
      set: (val) => emit("iptCartNum", val)
    });
    const confirm = () => {
      emit("confirm");
    };
    const bindCode = (e) => {
      emit("iptCartNum", props.attr.productSelect.cart_num);
    };
    const closeWindow = () => {
      emit("closeWindow");
    };
    const cartNumDes = () => {
      emit("changeCartNum", false);
    };
    const cartNumAdd = () => {
      emit("changeCartNum", true);
    };
    const tapAttr = (attrval, attrid) => {
      emit("selectAttrVal", attrval, attrid);
    };
    return {
      cartNum,
      confirm,
      bindCode,
      closeWindow,
      cartNumDes,
      cartNumAdd,
      tapAttr
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.attr.productSelect.image,
    b: common_vendor.t(_ctx.attr.productSelect.storeName),
    c: common_vendor.t(_ctx.attr.productSelect.price),
    d: common_vendor.t(_ctx.attr.productSelect.limits ? "\u9650\u91CF" : "\u5E93\u5B58"),
    e: common_vendor.t(_ctx.attr.productSelect.stock),
    f: common_vendor.o((...args) => _ctx.closeWindow && _ctx.closeWindow(...args)),
    g: common_vendor.f(_ctx.attr.productAttr, (item, indexw, i0) => {
      return {
        a: common_vendor.t(item.attrName),
        b: common_vendor.f(item.attrValues, (itemChild, indexChild, i1) => {
          return {
            a: common_vendor.t(itemChild.val),
            b: indexChild,
            c: common_vendor.n(itemChild.isSelect ? "on" : ""),
            d: common_vendor.o(($event) => _ctx.tapAttr(itemChild, item.attrId))
          };
        }),
        c: indexw
      };
    }),
    h: common_vendor.n(_ctx.attr.productSelect.cart_num <= 1 ? "on" : ""),
    i: common_vendor.o((...args) => _ctx.cartNumDes && _ctx.cartNumDes(...args)),
    j: common_vendor.o([($event) => _ctx.cartNum = $event.detail.value, ($event) => _ctx.bindCode(_ctx.attr.productSelect.cart_num)]),
    k: _ctx.cartNum,
    l: _ctx.iSplus
  }, _ctx.iSplus ? {
    m: common_vendor.n(_ctx.attr.productSelect.cart_num >= _ctx.attr.productSelect.stock ? "on" : ""),
    n: common_vendor.o((...args) => _ctx.cartNumAdd && _ctx.cartNumAdd(...args))
  } : {
    o: common_vendor.n(_ctx.attr.productSelect.cart_num >= _ctx.attr.productSelect.quota || _ctx.attr.productSelect.cart_num >= _ctx.attr.productSelect.stock || _ctx.attr.productSelect.cart_num >= _ctx.attr.productSelect.num ? "on" : ""),
    p: common_vendor.o((...args) => _ctx.cartNumAdd && _ctx.cartNumAdd(...args))
  }, {
    q: _ctx.isGroupBuying && _ctx.attr.productSelect.stock
  }, _ctx.isGroupBuying && _ctx.attr.productSelect.stock ? {
    r: common_vendor.o((...args) => _ctx.confirm && _ctx.confirm(...args))
  } : _ctx.iSbnt && _ctx.attr.productSelect.quota <= 0 || _ctx.iSbnt && _ctx.attr.productSelect.stock <= 0 ? {} : {}, {
    s: _ctx.iSbnt && _ctx.attr.productSelect.quota <= 0 || _ctx.iSbnt && _ctx.attr.productSelect.stock <= 0,
    t: _ctx.iScart && _ctx.attr.productSelect.stock
  }, _ctx.iScart && _ctx.attr.productSelect.stock ? {
    v: common_vendor.o((...args) => _ctx.confirm && _ctx.confirm(...args))
  } : _ctx.iScart && !_ctx.attr.productSelect.stock ? {} : {}, {
    w: _ctx.iScart && !_ctx.attr.productSelect.stock,
    x: common_vendor.n((_ctx.attr.isOpenAttrWindow === true ? "on" : "") + " " + (_ctx.iSbnt ? "join" : "") + " " + (_ctx.iScart ? "joinCart" : "")),
    y: _ctx.attr.isOpenAttrWindow === false,
    z: common_vendor.o(() => {
    }),
    A: common_vendor.o((...args) => _ctx.closeWindow && _ctx.closeWindow(...args))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5f4a5e22"]]);
my.createComponent(Component);

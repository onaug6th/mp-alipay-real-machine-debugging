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
var api_goods = require("../../api/goods.js");
require("../../utils/request.js");
require("../../config/app.js");
const ProductDetailSwiper = () => "../../components/product-detail-swiper/index.js";
const AttrWindow = () => "../../components/attr-window/index.js";
const GoodsInfo = () => "./components/GoodsInfo.js";
const GoodsContent = () => "./components/GoodsContent.js";
const DetailFooterBar = () => "./components/DetailFooterBar.js";
const GoodsCurriculum = () => "./components/GoodsCurriculum.js";
const GoodsTeacher = () => "./components/GoodsTeacher.js";
const _sfc_main = common_vendor.defineComponent({
  name: "GoodsDetail",
  components: {
    ProductDetailSwiper,
    AttrWindow,
    GoodsInfo,
    GoodsContent,
    DetailFooterBar,
    GoodsCurriculum,
    GoodsTeacher
  },
  setup() {
    let state = common_vendor.reactive({
      goodsInfo: {},
      sliderImage: [],
      attr: {
        isOpenAttrWindow: true,
        productAttr: [],
        productSelect: {}
      },
      isBuyNow: false,
      cart_num: 0,
      attrValue: "",
      attrTxt: "\u8BF7\u9009\u62E9"
    });
    const getGoodsDetail = () => {
      api_goods.fetchGoodsDetail({}).then((r) => {
        console.log("r", r);
        state.goodsInfo = r.data.data;
        state.sliderImage = state.goodsInfo.sliderImage;
        state.attr.productAttr = state.goodsInfo.productAttr;
        state.goodsInfo.content = state.goodsInfo.content.replace(/<img/gi, "<img class='richImg' style='width:auto!important;height:auto!important;max-height:100%;width:100%;'");
        state.goodsInfo.content = state.goodsInfo.content.replace(/&nbsp;/g, "&ensp;");
        setDefaultAttrSelect(state.goodsInfo.minHeap);
      }).catch((err) => console.log("err", err));
    };
    const setDefaultAttrSelect = (data) => {
      state.attr.productSelect.storeName = state.goodsInfo.prodName;
      state.attr.productSelect.image = data.pic;
      state.attr.productSelect.price = data.price;
      state.attr.productSelect.actualStocks = data.actualStocks;
      state.attr.productSelect.limits = data.limits;
      state.attr.productSelect.cart_num = 1;
      state.attrValue = "";
      state.attrTxt = "\u5DF2\u9009\u62E9";
      if (data.properties) {
        const properties = JSON.parse(data.properties);
        Object.keys(properties).forEach((v) => {
          setAttrVal(properties[v], v);
        });
      }
    };
    const setIsOpenAttrWindow = (flag) => {
      state.attr.isOpenAttrWindow = flag;
    };
    const setIsBuyNow = (flag) => {
      state.isBuyNow = flag;
    };
    const closeWindow = () => {
      setIsBuyNow(false);
      setIsOpenAttrWindow(false);
    };
    const confirm = () => {
      const { proxy } = common_vendor.getCurrentInstance();
      const { buyNow, addCart, groupBuyingNow } = proxy.$refs.detailFooterBar;
      setIsOpenAttrWindow(false);
      state.isBuyNow ? buyNow() : addCart();
      setIsBuyNow(false);
    };
    const changeCartNum = (changeValue) => {
      let stock = state.attr.productSelect.stock || 0;
      let num = state.attr.productSelect;
      if (changeValue) {
        num.cart_num++;
        if (num.cart_num > stock) {
          state.attr.productSelect.cart_num = stock;
          state.cart_num = stock;
        }
      } else {
        num.cart_num--;
        if (num.cart_num < 1) {
          state.attr.productSelect.cart_num = 1;
          state.cart_num = 1;
        }
      }
    };
    const selectAttrVal = (attrval, attrid) => {
      setAttrVal(attrval, attrid);
      const goods = {};
      if (goods) {
        state.attr.productSelect.image = goods.productSkuVO.pic;
        state.attr.productSelect.price = goods.productSkuVO.price;
        state.attr.productSelect.stock = goods.productSkuVO.actualStocks;
      }
    };
    const setAttrVal = (attrval, attrid) => {
      state.attr.productAttr = state.attr.productAttr.map((o) => {
        o.attrValues.map((v) => {
          if (attrval.val === v.val || attrval === v.val) {
            if (v.isSelect) {
              v.isSelect = false;
            } else {
              v.isSelect = true;
            }
          } else if (o.attrId === attrid) {
            v.isSelect = false;
          }
          return v;
        });
        return o;
      });
    };
    const iptCartNum = (e) => {
      state.attr.productSelect.cart_num = e || 1;
    };
    const openShare = () => {
      console.log("openShare");
    };
    common_vendor.onShow(() => {
      getGoodsDetail();
    });
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(state)), {
      setIsOpenAttrWindow,
      iptCartNum,
      changeCartNum,
      selectAttrVal,
      closeWindow,
      confirm,
      openShare
    });
  }
});
if (!Array) {
  const _component_ProductDetailSwiper = common_vendor.resolveComponent("ProductDetailSwiper");
  const _component_goodsInfo = common_vendor.resolveComponent("goodsInfo");
  const _component_GoodsCurriculum = common_vendor.resolveComponent("GoodsCurriculum");
  const _component_GoodsTeacher = common_vendor.resolveComponent("GoodsTeacher");
  const _component_GoodsContent = common_vendor.resolveComponent("GoodsContent");
  const _component_DetailFooterBar = common_vendor.resolveComponent("DetailFooterBar");
  const _component_AttrWindow = common_vendor.resolveComponent("AttrWindow");
  (_component_ProductDetailSwiper + _component_goodsInfo + _component_GoodsCurriculum + _component_GoodsTeacher + _component_GoodsContent + _component_DetailFooterBar + _component_AttrWindow)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["img-urls"]: _ctx.sliderImage,
      videoline: _ctx.goodsInfo.videoLink
    }),
    b: common_vendor.o(_ctx.openShare),
    c: common_vendor.p({
      ["goods-info"]: _ctx.goodsInfo
    }),
    d: common_vendor.p({
      ["goods-info"]: _ctx.goodsInfo
    }),
    e: common_vendor.o(_ctx.setIsOpenAttrWindow),
    f: common_vendor.o(_ctx.closeWindow),
    g: common_vendor.o(_ctx.changeCartNum),
    h: common_vendor.o(_ctx.selectAttrVal),
    i: common_vendor.o(_ctx.iptCartNum),
    j: common_vendor.o(_ctx.confirm),
    k: common_vendor.p({
      attr: _ctx.attr,
      ["i-splus"]: 1,
      ["i-scart"]: 1
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-671bb93a"]]);
my.createPage(MiniProgramPage);

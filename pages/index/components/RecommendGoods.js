"use strict";
var common_vendor = require("../../../common/vendor.js");
var api_goods = require("../../../api/goods.js");
var utils_constant = require("../../../utils/constant.js");
var utils_util = require("../../../utils/util.js");
require("../../../utils/request.js");
require("../../../config/app.js");
const _sfc_main = common_vendor.defineComponent({
  name: "NewGoods",
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    let newGoodsList = common_vendor.ref([]);
    const goDetail = (item) => {
      utils_util.Tips(`/pages/goods/goodsDetail?productId=${item.productId}&type=${utils_constant.goodsTypes.NEW_USER_ONLY}`);
    };
    const gopage = (url) => {
      utils_util.Tips(url);
    };
    const getNewGoodsList = () => {
      const params = {
        pageNum: 0,
        pageSize: 10
      };
      api_goods.fetchRecommendGoodsList(params).then((r) => {
        console.log("r", r);
        newGoodsList.value = r.data;
        console.log("newGoodsList", newGoodsList);
      }).catch((err) => console.log(err));
    };
    common_vendor.onLoad(() => {
      getNewGoodsList();
    });
    return {
      newGoodsList,
      goDetail,
      gopage
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.isShow
  }, _ctx.isShow ? common_vendor.e({
    b: !_ctx.newGoodsList.length
  }, !_ctx.newGoodsList.length ? {} : {
    c: common_vendor.f(_ctx.newGoodsList, (item, index, i0) => {
      return {
        a: item.pic,
        b: common_vendor.t(item.prodName),
        c: common_vendor.t(item.price),
        d: common_vendor.o(($event) => _ctx.goDetail(item)),
        e: index
      };
    })
  }) : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5c737d62"]]);
my.createComponent(Component);

"use strict";
var common_vendor = require("../../common/vendor.js");
var api_goods = require("../../api/goods.js");
require("../../utils/request.js");
require("../../config/app.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    let goodsList = common_vendor.ref([]);
    const getNewGoodsList = () => {
      const params = {
        pageNum: 0,
        pageSize: 10
      };
      api_goods.fetchRecommendGoodsList(params).then((r) => {
        console.log("r", r);
        goodsList.value = r.data;
        console.log("newGoodsList", goodsList.value);
      }).catch((err) => console.log(err));
    };
    common_vendor.onLoad(() => {
      getNewGoodsList();
    });
    let loading = common_vendor.ref(false);
    let loadTitle = common_vendor.ref("\u52A0\u8F7D\u66F4\u591A");
    const goDetail = (item) => {
      common_vendor.index.navigateTo({
        url: `/pages/goods/goodsDetail?productId=${item.id}&shopId=${item.shopId}`
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(goodsList).length
      }, common_vendor.unref(goodsList).length ? {
        b: common_vendor.f(common_vendor.unref(goodsList), (item, index, i0) => {
          return {
            a: item.pic,
            b: common_vendor.t(item.prodName),
            c: common_vendor.t(item.price),
            d: index,
            e: common_vendor.o(($event) => goDetail(item))
          };
        })
      } : {}, {
        c: common_vendor.unref(goodsList).length > 0
      }, common_vendor.unref(goodsList).length > 0 ? {
        d: common_vendor.unref(loading) == false,
        e: common_vendor.t(common_vendor.unref(loadTitle))
      } : {}, {
        f: !common_vendor.unref(goodsList).length
      }, !common_vendor.unref(goodsList).length ? {} : {});
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-383614cc"]]);
my.createComponent(Component);

"use strict";
var common_vendor = require("../../../common/vendor.js");
var api_goods = require("../../../api/goods.js");
require("../../../utils/request.js");
require("../../../config/app.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    let newGoodsList = common_vendor.ref([]);
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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(newGoodsList), (item, index, i0) => {
          return {
            a: index
          };
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-593615b3"]]);
my.createComponent(Component);

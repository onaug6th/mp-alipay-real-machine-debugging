"use strict";
var common_vendor = require("../../../common/vendor.js");
var api_goods = require("../../../api/goods.js");
require("../../../utils/request.js");
require("../../../config/app.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    let list = common_vendor.ref([]);
    const getEventReservationList = () => {
      const params = {
        pageNum: 0,
        pageSize: 5
      };
      api_goods.fetchRecommendGoodsList(params).then((r) => {
        list.value = r.data;
      }).catch((err) => console.log(err));
    };
    common_vendor.onLoad(() => {
      getEventReservationList();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(list), (item, index, i0) => {
          return {
            a: item.pic,
            b: common_vendor.t(item.prodName),
            c: index
          };
        })
      };
    };
  }
});
my.createComponent(_sfc_main);

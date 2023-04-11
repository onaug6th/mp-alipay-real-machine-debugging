"use strict";
var common_vendor = require("../../common/vendor.js");
var store_modules_banner_actionTypes = require("../../store/modules/banner/action-types.js");
if (!Math) {
  (AdSwiper + GoodsListColumnStyle + ProductListGrid)();
}
const AdSwiper = () => "../../components/ad-swiper/index.js";
const ProductListGrid = () => "../../components/product-list-grid/index.js";
const GoodsListColumnStyle = () => "./components/GoodsListColumnStyle.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const navList = common_vendor.ref([
      { name: "\u7CBE\u54C1\u8BFE\u7A0B", id: 1 },
      { name: "\u6C34\u57F9\u5546\u54C1", id: 2 },
      { name: "\u5176\u4ED6\u5546\u54C1", id: 3 }
    ]);
    const currNavId = common_vendor.ref(1);
    const navHandler = (id) => {
      currNavId.value = id;
    };
    const store = common_vendor.useStore();
    const fetchBanner = common_vendor.mapActions(["banner", store_modules_banner_actionTypes.BannerActionTypes.ACTION_GET_BANNER]).ACTION_GET_BANNER.bind({
      $store: store
    });
    fetchBanner();
    const indexBanner = common_vendor.computed$1(() => store.state.banner.indexBanner);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(navList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.n(item.id === currNavId.value ? "on" : ""),
            c: common_vendor.o(($event) => navHandler(item.id)),
            d: item.id
          };
        }),
        b: common_vendor.p({
          ["img-urls"]: common_vendor.unref(indexBanner),
          ["image-h"]: 173
        }),
        c: currNavId.value === 1,
        d: currNavId.value === 2,
        e: currNavId.value === 3
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cd663cf6"]]);
my.createPage(MiniProgramPage);

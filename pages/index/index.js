"use strict";
var common_vendor = require("../../common/vendor.js");
var store_modules_banner_actionTypes = require("../../store/modules/banner/action-types.js");
var config_app = require("../../config/app.js");
const AdSwiper = () => "../../components/ad-swiper/index.js";
const HeaderSearch = () => "./components/HeaderSearch.js";
const MessageComp = () => "./components/MessageComp.js";
const MenusComp = () => "./components/MenusComp.js";
const MenusTwo = () => "./components/MenusTwo.js";
const RecommendGoods = () => "./components/RecommendGoods.js";
const EventReservation = () => "./components/EventReservation.js";
const QuestionsAndAnswers = () => "./components/QuestionsAndAnswers.js";
const _sfc_main = common_vendor.defineComponent({
  name: "IndexPage",
  components: {
    AdSwiper,
    HeaderSearch,
    MessageComp,
    MenusComp,
    MenusTwo,
    RecommendGoods,
    EventReservation,
    QuestionsAndAnswers
  },
  onPageScroll() {
  },
  setup() {
    const state = common_vendor.reactive({
      imageUrl: config_app.IMAGE_URL,
      showBg: false,
      display: "block",
      navTop: 0,
      navHeight: 40,
      currentCity: "\u4F5B\u5C71\u5E02",
      quickMenu: [
        {
          url: "../../static/images/skip/activity.png",
          title: "\u6D3B\u52A8",
          path: "/pages/discover/activity"
        },
        {
          url: "../../static/images/skip/curriculum.png",
          title: "\u8BFE\u7A0B",
          path: "/pages/goods/goods-search/index?isSelected=true"
        },
        {
          url: "../../static/images/skip/AAndQ.png",
          title: "\u7B54\u7591",
          path: "/pages/living/index"
        },
        {
          url: "../../static/images/skip/brand.png",
          title: "\u54C1\u724C",
          path: "/pages/coupon/list"
        },
        {
          url: "../../static/images/skip/cooperate.png",
          title: "\u5408\u4F5C",
          path: "/pages/shop/near-shop/index"
        }
      ]
    });
    const title = common_vendor.ref(config_app.APP_NAME);
    let isShowMessage = common_vendor.ref(true);
    const closeMessage = () => {
      isShowMessage.value = false;
    };
    const store = common_vendor.useStore();
    const fetchBanner = common_vendor.mapActions(["banner", store_modules_banner_actionTypes.BannerActionTypes.ACTION_GET_BANNER]).ACTION_GET_BANNER.bind({
      $store: store
    });
    fetchBanner();
    const indexBanner = common_vendor.computed$1(() => store.state.banner.indexBanner);
    const { proxy } = common_vendor.getCurrentInstance();
    const scroll = function(e) {
      const scrollY = e.scrollTop;
      state.showBg = scrollY > 40 ? true : false;
      state.display = scrollY > 40 ? "none" : "block";
    };
    console.log("onPageScroll", common_vendor.onPageScroll);
    common_vendor.onPageScroll((e) => {
      scroll(e);
    });
    common_vendor.onReachBottom(() => {
    });
    common_vendor.onShow(() => {
      console.log("index onShow");
    });
    common_vendor.onLoad(() => {
      state.navTop = proxy.$StatusBar;
    });
    return {
      state,
      title,
      indexBanner,
      isShowMessage,
      closeMessage
    };
  }
});
if (!Array) {
  const _component_ad_swiper = common_vendor.resolveComponent("ad-swiper");
  const _component_HeaderSearch = common_vendor.resolveComponent("HeaderSearch");
  const _component_MessageComp = common_vendor.resolveComponent("MessageComp");
  const _component_menus_comp = common_vendor.resolveComponent("menus-comp");
  const _component_MenusTwo = common_vendor.resolveComponent("MenusTwo");
  const _component_RecommendGoods = common_vendor.resolveComponent("RecommendGoods");
  const _component_EventReservation = common_vendor.resolveComponent("EventReservation");
  const _component_QuestionsAndAnswers = common_vendor.resolveComponent("QuestionsAndAnswers");
  (_component_ad_swiper + _component_HeaderSearch + _component_MessageComp + _component_menus_comp + _component_MenusTwo + _component_RecommendGoods + _component_EventReservation + _component_QuestionsAndAnswers)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.state.currentCity
  }, _ctx.state.currentCity ? {
    b: common_vendor.t(_ctx.state.currentCity)
  } : {}, {
    c: common_vendor.t(_ctx.title),
    d: common_vendor.s("padding-top:" + _ctx.state.navTop + "px;height:" + _ctx.state.navHeight + "px"),
    e: _ctx.state.showBg ? 1 : "",
    f: common_vendor.p({
      ["img-urls"]: _ctx.indexBanner
    }),
    g: _ctx.state.display,
    h: _ctx.isShowMessage
  }, _ctx.isShowMessage ? {
    i: common_vendor.o(_ctx.closeMessage)
  } : {}, {
    j: common_vendor.p({
      ["menus-config"]: _ctx.state.quickMenu
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
my.createPage(MiniProgramPage);

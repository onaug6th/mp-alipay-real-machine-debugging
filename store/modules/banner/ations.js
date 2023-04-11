"use strict";
var api_banner = require("../../../api/banner.js");
var store_modules_banner_actionTypes = require("./action-types.js");
var store_modules_banner_mutationTypes = require("./mutation-types.js");
const actions = {
  async [store_modules_banner_actionTypes.BannerActionTypes.ACTION_GET_BANNER]({ commit, state }, bannerAddress = 10) {
    if (state.isLoaded)
      return;
    console.log("getbanner");
    await api_banner.fetchBannerList({ bannerAddress }).then((res) => {
      commit(store_modules_banner_mutationTypes.BannerMutationTypes.SET_IS_LOADED, true);
      const bannerList = res.data.map((item) => {
        let link = "";
        if (item.linkForm == 10) {
          const temp = JSON.parse(item.linkAddress);
          link = `/pages/goods/goodsDetail?productId=${temp.id}&shopId=${temp.shopId}`;
        }
        return {
          bannerAddress: item.bannerAddress,
          src: item.img,
          type: item.linkForm == 20 ? "video" : "image",
          link
        };
      });
      bannerList.forEach((item) => {
        if (item.bannerAddress == 10) {
          commit(store_modules_banner_mutationTypes.BannerMutationTypes.SET_INDEX_BANNER, item);
        } else if (item.bannerAddress == 20) {
          commit(store_modules_banner_mutationTypes.BannerMutationTypes.SET_SECKILL_BANNER, item);
        } else if (item.bannerAddress == 30) {
          commit(store_modules_banner_mutationTypes.BannerMutationTypes.SET_GROUP_BANNER, item);
        } else if (item.bannerAddress == 40) {
          commit(store_modules_banner_mutationTypes.BannerMutationTypes.SET_FULL_MINUSS_BANNER, item);
        } else if (item.bannerAddress == 50) {
          commit(store_modules_banner_mutationTypes.BannerMutationTypes.SET_NEWS_GOODS_BANNER, item);
        } else if (item.bannerAddress == 60) {
          commit(store_modules_banner_mutationTypes.BannerMutationTypes.SET_SPECIAL_PRICE_BANNER, item);
        } else if (item.bannerAddress == 70) {
          commit(store_modules_banner_mutationTypes.BannerMutationTypes.SET_RANK_BANNER, item);
        } else if (item.bannerAddress == 80) {
          commit(store_modules_banner_mutationTypes.BannerMutationTypes.SET_INTEGRAL_BANNER, item);
        }
      });
    });
  }
};
exports.actions = actions;

"use strict";
var store_modules_banner_mutationTypes = require("./mutation-types.js");
const mutations = {
  [store_modules_banner_mutationTypes.BannerMutationTypes.SET_INDEX_BANNER](state, value) {
    state.indexBanner.push(value);
  },
  [store_modules_banner_mutationTypes.BannerMutationTypes.SET_SECKILL_BANNER](state, value) {
    state.seckillBanner.push(value);
  },
  [store_modules_banner_mutationTypes.BannerMutationTypes.SET_GROUP_BANNER](state, value) {
    state.groupBanner.push(value);
  },
  [store_modules_banner_mutationTypes.BannerMutationTypes.SET_FULL_MINUSS_BANNER](state, value) {
    state.fullMinussBanner.push(value);
  },
  [store_modules_banner_mutationTypes.BannerMutationTypes.SET_NEWS_GOODS_BANNER](state, value) {
    state.newsGoodsBanner.push(value);
  },
  [store_modules_banner_mutationTypes.BannerMutationTypes.SET_SPECIAL_PRICE_BANNER](state, value) {
    state.specialPriceBanner.push(value);
  },
  [store_modules_banner_mutationTypes.BannerMutationTypes.SET_RANK_BANNER](state, value) {
    state.rankBanner.push(value);
  },
  [store_modules_banner_mutationTypes.BannerMutationTypes.SET_INTEGRAL_BANNER](state, value) {
    state.integralBanner.push(value);
  },
  [store_modules_banner_mutationTypes.BannerMutationTypes.SET_IS_LOADED](state, value) {
    state.isLoaded = value;
  }
};
exports.mutations = mutations;

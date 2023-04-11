"use strict";
var common_vendor = require("../common/vendor.js");
const Tips = function(opt, to_url) {
  if (typeof opt == "string") {
    to_url = opt;
    opt = {};
  }
  const title = opt.title || "", icon = opt.icon || "none", endtime = opt.endtime || 2e3, success = opt.success;
  if (title)
    common_vendor.index.showToast({
      title,
      icon,
      duration: endtime,
      success
    });
  if (to_url != void 0) {
    if (typeof to_url == "object") {
      const tab = to_url.tab || 1, url = to_url.url || "";
      switch (tab) {
        case 1:
          setTimeout(function() {
            common_vendor.index.switchTab({
              url
            });
          }, endtime);
          break;
        case 2:
          setTimeout(function() {
            common_vendor.index.navigateTo({
              url
            });
          }, endtime);
          break;
        case 3:
          setTimeout(function() {
            common_vendor.index.navigateBack({
              delta: parseInt(url)
            });
          }, endtime);
          break;
        case 4:
          setTimeout(function() {
            common_vendor.index.reLaunch({
              url
            });
          }, endtime);
          break;
        case 5:
          setTimeout(function() {
            common_vendor.index.redirectTo({
              url
            });
          }, endtime);
          break;
      }
    } else if (typeof to_url == "function") {
      setTimeout(function() {
        to_url && to_url();
      }, endtime);
    } else {
      setTimeout(function() {
        common_vendor.index.navigateTo({
          url: to_url
        });
      }, title ? endtime : 0);
    }
  }
};
exports.Tips = Tips;

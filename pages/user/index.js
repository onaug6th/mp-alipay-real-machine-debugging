"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    let isLogin = common_vendor.ref(true);
    let userInfo = common_vendor.reactive({
      pic: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8SiagBMUuLZ7USibVCmnJBvy87ib8gT8gl1wrCwwZRVDsv9a6t4lbGLHcoiacKDxjvgw0v374xE3UkQ/132",
      nickName: "coboy",
      memberLevelVO: "Lv1",
      userMobile: "1382550699x"
    });
    let orderCounts = common_vendor.ref({});
    const toPage = (path) => {
      console.log("toPage");
    };
    const goLogin = () => {
      console.log("goLogin");
    };
    const gotoMemberCenter = () => {
      common_vendor.index.navigateTo({
        url: `/pages/my/memberCenter`
      });
    };
    function userA() {
      common_vendor.index.navigateTo({
        url: `/userA/pages/orderList/index`
      });
    }
    function userB() {
      common_vendor.index.navigateTo({
        url: `/userB/pages/orderList/index`
      });
    }
    function userC() {
      common_vendor.index.navigateTo({
        url: `/userC/pages/orderList/index`
      });
    }
    function temp() {
      common_vendor.index.navigateTo({
        url: `/temp/pages/orderList/index`
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(userA),
        b: common_vendor.o(userB),
        c: common_vendor.o(userC),
        d: common_vendor.o(temp),
        e: common_vendor.unref(isLogin)
      }, common_vendor.unref(isLogin) ? common_vendor.e({
        f: common_vendor.unref(userInfo).pic,
        g: common_vendor.o(($event) => toPage()),
        h: common_vendor.t(common_vendor.unref(userInfo).nickName),
        i: common_vendor.t(common_vendor.unref(userInfo).memberLevelVO ? common_vendor.unref(userInfo).memberLevelVO : "LV0"),
        j: common_vendor.unref(userInfo).userMobile
      }, common_vendor.unref(userInfo).userMobile ? {
        k: common_vendor.t(common_vendor.unref(userInfo).userMobile || "")
      } : {
        l: common_vendor.o(($event) => toPage())
      }) : {
        m: common_vendor.o(goLogin),
        n: common_vendor.o(goLogin),
        o: common_vendor.o(goLogin)
      }, {
        p: common_vendor.o(gotoMemberCenter),
        q: common_vendor.o((...args) => _ctx.toOrderList && _ctx.toOrderList(...args)),
        r: common_vendor.unref(orderCounts).unauditedOrderCounts > 0
      }, common_vendor.unref(orderCounts).unauditedOrderCounts > 0 ? {
        s: common_vendor.t(common_vendor.unref(orderCounts).unauditedOrderCounts > 99 ? "99+" : common_vendor.unref(orderCounts).unauditedOrderCounts)
      } : {}, {
        t: common_vendor.unref(orderCounts).unauditedOrderCounts > 0
      }, common_vendor.unref(orderCounts).unauditedOrderCounts > 0 ? {
        v: common_vendor.t(common_vendor.unref(orderCounts).unauditedOrderCounts > 99 ? "99+" : common_vendor.unref(orderCounts).unauditedOrderCounts)
      } : {}, {
        w: common_vendor.unref(orderCounts).unauditedOrderCounts > 0
      }, common_vendor.unref(orderCounts).unauditedOrderCounts > 0 ? {
        x: common_vendor.t(common_vendor.unref(orderCounts).unauditedOrderCounts > 99 ? "99+" : common_vendor.unref(orderCounts).unauditedOrderCounts)
      } : {}, {
        y: common_vendor.unref(orderCounts).unsignedOrderCounts > 0
      }, common_vendor.unref(orderCounts).unsignedOrderCounts > 0 ? {
        z: common_vendor.t(common_vendor.unref(orderCounts).unsignedOrderCounts > 99 ? "99+" : common_vendor.unref(orderCounts).unsignedOrderCounts)
      } : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4070cfdc"]]);
my.createPage(MiniProgramPage);

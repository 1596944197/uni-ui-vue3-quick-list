"use strict";
const common_vendor = require("../../common/vendor.js");
const components_QuickList_utils = require("../../components/QuickList/utils.js");
if (!Array) {
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  (_easycom_uni_col2 + _easycom_uni_row2)();
}
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
if (!Math) {
  (_easycom_uni_col + _easycom_uni_row + QuickList)();
}
const QuickList = () => "../../components/QuickList/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const domains = components_QuickList_utils.generate([
      {
        key: "2323",
        disabled: false,
        title: "\u6D4B\u8BD51",
        subTitle: "\u5B50\u6807\u9898",
        checked: false
      },
      {
        key: "23232323",
        disabled: false,
        title: "\u6D4B\u8BD52",
        subTitle: "\u5B50\u6807\u9898",
        checked: false,
        abc: 2323
      },
      {
        title: "\u6D4B\u8BD53",
        subTitle: "ccccccccccccc",
        showCheckbox: true,
        key: "fffff2323"
      },
      {
        title: "\u6D4B\u8BD54cccccccccccccccccccccccccccccccccccccccccccccccccccc",
        subTitle: "ccccccccccccc",
        showCheckbox: true,
        key: "ffff12312312f"
      },
      {
        title: "\u6D4B\u8BD55",
        subTitle: "ccccccccccccc",
        showCheckbox: true,
        key: "ffff123213f234234565786897987734213"
      },
      {
        title: "\u6D4B\u8BD55",
        subTitle: "ccccccccccccc",
        showCheckbox: true,
        key: Math.random().toString()
      },
      {
        title: "\u6D4B\u8BD55",
        subTitle: "ccccccccccccc",
        showCheckbox: true,
        key: Math.random().toString()
      },
      {
        title: "\u6D4B\u8BD55",
        subTitle: "ccccccccccccc",
        showCheckbox: true,
        key: Math.random().toString()
      }
    ]);
    const loading = common_vendor.ref(false);
    const onScrollDown = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 1e3);
    };
    const onDelete = (id) => {
      common_vendor.index.showToast({
        title: `\u9009\u4E2D\u7684key\u503C\u4E3A${id}`,
        icon: "none"
      });
    };
    const onCardTap = (target) => {
      console.log(target);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.w(({
          record,
          currentIndex
        }, s0, i0) => {
          return {
            a: common_vendor.t(record.key),
            b: "bc680206-2-" + i0 + "," + ("bc680206-1-" + i0),
            c: common_vendor.t(currentIndex),
            d: "bc680206-3-" + i0 + "," + ("bc680206-1-" + i0),
            e: "bc680206-1-" + i0 + ",bc680206-0",
            f: common_vendor.t(record.showCheckbox || "-"),
            g: "bc680206-5-" + i0 + "," + ("bc680206-4-" + i0),
            h: "bc680206-4-" + i0 + ",bc680206-0",
            i: i0,
            j: s0
          };
        }, {
          name: "content",
          path: "a",
          vueId: "bc680206-0"
        }),
        b: common_vendor.p({
          span: 12
        }),
        c: common_vendor.p({
          span: 12
        }),
        d: common_vendor.p({
          span: 12
        }),
        e: common_vendor.o(onScrollDown),
        f: common_vendor.o(onDelete),
        g: common_vendor.o(onCardTap),
        h: common_vendor.p({
          list: common_vendor.unref(domains),
          loading: loading.value
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code/mini-app/uni-preset-vue-vite-ts/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

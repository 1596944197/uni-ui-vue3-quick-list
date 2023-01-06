"use strict";
const common_vendor = require("../../common/vendor.js");
const components_QuickList_utils = require("../../components/QuickList/utils.js");
if (!Math) {
  QuickList();
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
            a: common_vendor.t(currentIndex),
            b: common_vendor.t(record.key),
            c: common_vendor.t(record.showCheckbox || "-"),
            d: i0,
            e: s0
          };
        }, {
          name: "content",
          path: "a",
          vueId: "bc680206-0"
        }),
        b: common_vendor.o(onScrollDown),
        c: common_vendor.o(onDelete),
        d: common_vendor.o(onCardTap),
        e: common_vendor.p({
          list: common_vendor.unref(domains),
          loading: loading.value
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code/mini-app/uni-preset-vue-vite-ts/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

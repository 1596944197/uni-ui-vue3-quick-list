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
        key: "fffff"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: common_vendor.unref(domains)
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code/mini-app/uni-preset-vue-vite-ts/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

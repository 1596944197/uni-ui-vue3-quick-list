"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_card2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _easycom_uni_load_more2)();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action + _easycom_uni_load_more)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    list: { type: null, required: true }
  },
  emits: ["checkboxChange", "delete", "cardClick"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const swipeActionOptions = [
      {
        text: "\u5220\u9664",
        style: {
          backgroundColor: "#f56c6c"
        }
      }
    ];
    const iconStatus = common_vendor.ref("noMore");
    const onScrollDown = () => {
    };
    const onCardClick = (a, b) => {
      if (a.target.id === "checkbox")
        return;
      emits("cardClick", b);
    };
    const onCheckBoxChange = ({
      detail: { value }
    }) => {
      props.list.forEach((item) => {
        value.includes(item.key) ? item.checked = true : item.checked = false;
      });
      emits("checkboxChange", value);
    };
    const onDelete = (id) => {
      emits("delete", id);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.list, (item, k0, i0) => {
          return common_vendor.e({
            a: item.showCheckbox
          }, item.showCheckbox ? {
            b: item.checked,
            c: item.key
          } : {}, {
            d: common_vendor.o(($event) => onCardClick($event, item), item.key),
            e: "5e8ef572-2-" + i0 + "," + ("5e8ef572-1-" + i0),
            f: common_vendor.p({
              title: item.title,
              ["sub-title"]: item.subTitle
            }),
            g: common_vendor.o(($event) => onDelete(item.key), item.key),
            h: item.key,
            i: "5e8ef572-1-" + i0 + ",5e8ef572-0",
            j: common_vendor.p({
              ["right-options"]: swipeActionOptions,
              disabled: item.disabled,
              ["auto-close"]: true
            })
          });
        }),
        b: common_vendor.o(onCheckBoxChange),
        c: common_vendor.p({
          status: iconStatus.value
        }),
        d: common_vendor.o(onScrollDown)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code/mini-app/uni-preset-vue-vite-ts/src/components/QuickList/index.vue"]]);
wx.createComponent(Component);

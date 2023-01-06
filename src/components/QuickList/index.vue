<template>
  <view class="container">
    <scroll-view
      ref="scrollView"
      @scrolltolower="onScrollDown"
      :style="scrollViewStyle || { height: '90vh' }"
      :scroll-y="true"
      :scroll-with-animation="true"
    >
      <uni-swipe-action>
        <checkbox-group @change="onCheckBoxChange">
          <uni-swipe-action-item
            @click="onDelete(item.key)"
            v-for="(item, index) in props.list"
            :key="item.key"
            :right-options="swipeActionOptions"
            :disabled="item.disabled"
            :auto-close="true"
          >
            <view class="checkbox-content">
              <uni-card
                @tap="onCardClick($event, item)"
                :title="item.title"
                :sub-title="item.subTitle"
              >
                <checkbox
                  id="checkbox"
                  class="checkbox-item"
                  :checked="item.checked"
                  :value="item.key"
                  v-if="item.showCheckbox"
                ></checkbox>
                <slot name="content" :record="item" :currentIndex="index">
                  <text> 标题: 测试插槽1 </text>
                </slot>
              </uni-card>
            </view>
          </uni-swipe-action-item>
        </checkbox-group>
      </uni-swipe-action>
      <uni-load-more :status="iconStatus" style="margin-bottom: 20px" />
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import type { DomainsType, IconStatus } from "./type";

const props = defineProps<{
  list: DomainsType;
  scrollViewStyle?: Partial<HTMLElement["style"]>;
  loading?: boolean;
}>();

const emits = defineEmits<{
  (e: "checkboxChange", ids: string[]): void;
  (e: "delete", id: string): void;
  (e: "cardClick", event: DomainsType[0]): void;
  (e: "onScrollDown"): void;
}>();

const swipeActionOptions = [
  {
    text: "删除",
    style: {
      backgroundColor: "#f56c6c",
    },
  },
];

const iconStatus = ref<IconStatus>(props.loading ? "loading" : "noMore");

watchEffect(() => {
  if (props.loading) iconStatus.value = "loading";
  else iconStatus.value = "noMore";
});

// # methods
const onScrollDown = () => {
  emits("onScrollDown");
};
const onCardClick = (a: AnyObj, b: DomainsType[0]) => {
  if (a.target.id === "checkbox") return;
  emits("cardClick", b);
};
const onCheckBoxChange: (ev: { detail: { value: string[] } }) => void = ({
  detail: { value },
}) => {
  props.list.forEach((item) => {
    value.includes(item.key) ? (item.checked = true) : (item.checked = false);
  });
  emits("checkboxChange", value);
};
const onDelete = (id: string) => {
  emits("delete", id);
};
</script>

<style lang="scss">
.checkbox-content {
  position: relative;
  .checkbox-item {
    position: absolute;
    top: 10px;
    right: 5%;
    z-index: 50;
  }
}
</style>

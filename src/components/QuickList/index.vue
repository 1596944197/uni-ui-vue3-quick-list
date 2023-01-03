<template>
  <view class="container">
    <scroll-view
      ref="scrollView"
      @scrolltolower="onScrollDown"
      style="height: 100%"
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
                <view class="grid-body-parent">
                  <checkbox
                    id="checkbox"
                    class="checkbox-item"
                    :checked="item.checked"
                    :value="item.key"
                    v-if="item.showCheckbox"
                  ></checkbox>
                  <slot name="content" :record="item" :currentIndex="index">
                    <text> 标题: <text>测试插槽1</text> </text>
                    <text> 标题: <text>测试插槽2</text> </text>
                  </slot>
                </view>
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
import { ref } from "vue";
import type { DomainsType, IconStatus } from "./type";

const props = defineProps<{
  list: DomainsType;
}>();

const emits = defineEmits<{
  (e: "checkboxChange", event: string[]): void;
  (e: "delete", event: string): void;
  (e: "cardClick", event: DomainsType[0]): void;
}>();

const swipeActionOptions = [
  {
    text: "删除",
    style: {
      backgroundColor: "#f56c6c",
    },
  },
];

const iconStatus = ref<IconStatus>("noMore");

// # methods
const onScrollDown = () => {};
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
.grid-body-parent > view {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20rpx;
  font-size: 24rpx;
  text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text {
      font-weight: 600;
    }
  }
}
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

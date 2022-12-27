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
            v-for="item in domains"
            :key="item.key"
            :right-options="swipeActionOptions"
            :disabled="item.disabled"
            :auto-close="true"
          >
            <uni-card
              @click.native="onCardClick($event, item)"
              :title="item.title"
              :sub-title="item.subTitle"
            >
              <view class="grid-body checkbox-content">
                <checkbox
                  id="checkbox"
                  class="checkbox-item"
                  :checked="item.checked"
                  :value="item.key"
                ></checkbox>
              </view>
            </uni-card>
          </uni-swipe-action-item>
        </checkbox-group>
      </uni-swipe-action>
      <uni-load-more :status="iconStatus" style="margin-bottom: 20px" />
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { DomainsType, IconStatus } from "./type";

const swipeActionOptions = [
  {
    text: "删除",
    style: {
      backgroundColor: "#f56c6c",
    },
  },
];

const options = [
  {
    text: "取消",
    style: {
      backgroundColor: "#007aff",
    },
  },
  {
    text: "确认",
    style: {
      backgroundColor: "#dd524d",
    },
  },
];
const isNoMore = ref(false);

const domains = reactive<DomainsType>([
  {
    key: "2323",
    disabled: false,
    title: "测试1",
    subTitle: "子标题",
    checked: false,
  },
  {
    key: "23232323",
    disabled: false,
    title: "测试2",
    subTitle: "子标题",
    checked: false,
  },
]);

const iconStatus = ref<IconStatus>("noMore");

// # methods
const onScrollDown = () => {};
const onCardClick = (a: unknown, b: unknown) => {};
const onCheckBoxChange = () => {};
const onDelete = (id: string) => {};
</script>

<style lang="scss">
.grid-body {
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
    top: -60px;
    right: 0;
    z-index: 50;
  }
}
</style>

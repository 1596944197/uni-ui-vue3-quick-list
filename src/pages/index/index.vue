<template>
  <view class="content">
    <QuickList />
  </view>
</template>

<script setup lang="ts">
import QuickList from "../../components/QuickList/index.vue";
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
</script>

<template>
  <view class="content">
    <QuickList :list="domains" />
  </view>
</template>

<script setup lang="ts">
import QuickList from "../../components/QuickList/index.vue";
import { generate } from "../../components/QuickList/utils";

const domains = generate([
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
    abc: 2323,
  },
  {
    title: "测试3",
    subTitle: "ccccccccccccc",
    showCheckbox: true,
    key: "fffff2323",
  },
  {
    title: "测试4",
    subTitle: "ccccccccccccc",
    showCheckbox: true,
    key: "ffff12312312f",
  },
  {
    title: "测试5",
    subTitle: "ccccccccccccc",
    showCheckbox: true,
    key: "ffff123213f",
  },
]);
</script>

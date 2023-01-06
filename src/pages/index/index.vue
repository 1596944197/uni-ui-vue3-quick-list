<template>
  <view class="content">
    <QuickList
      :list="domains"
      :loading="loading"
      @on-scroll-down="onScrollDown"
      @delete="onDelete"
      @card-click="onCardTap"
    >
      <template #content="{ record, currentIndex }">
        <view class="grid-body">
          <text
            >当前索引为：<text>{{ currentIndex }}</text></text
          >
          <text>
            当前键值为：<text>{{ record.key }}</text>
          </text>
          <text>
            是否显示选择框：<text>{{ record.showCheckbox || "-" }}</text>
          </text>
        </view>
      </template>
    </QuickList>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
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
    title: "测试4cccccccccccccccccccccccccccccccccccccccccccccccccccc",
    subTitle: "ccccccccccccc",
    showCheckbox: true,
    key: "ffff12312312f",
  },
  {
    title: "测试5",
    subTitle: "ccccccccccccc",
    showCheckbox: true,
    key: "ffff123213f234234565786897987734213",
  },
  {
    title: "测试5",
    subTitle: "ccccccccccccc",
    showCheckbox: true,
    key: Math.random().toString(),
  },
  {
    title: "测试5",
    subTitle: "ccccccccccccc",
    showCheckbox: true,
    key: Math.random().toString(),
  },
  {
    title: "测试5",
    subTitle: "ccccccccccccc",
    showCheckbox: true,
    key: Math.random().toString(),
  },
]);

const loading = ref(false);

const onScrollDown = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 1000);
};

const onDelete = (id: string) => {
  uni.showToast({
    title: `选中的key值为${id}`,
    icon: "none",
  });
  // domains.splice(
  //   domains.findIndex((v) => v.key === id),
  //   1
  // );
};

const onCardTap = (target: any) => {
  console.log(target);
};
</script>

<style lang="scss">
@import "/src/components/QuickList/QuickListStyle";

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
</style>

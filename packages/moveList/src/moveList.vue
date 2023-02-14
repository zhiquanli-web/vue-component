<template>
  <section class="sy-movelist-box" ref="syMoveListBoxRef" v-if="defList.length > 0">
    <ul class="sy-list" ref="syListRef">
      <li
        v-for="item in defList"
        :class="[
          'sy-list-item',
          `${HS_PREFIX_ITEM}${item.value}`,
          modelValue === item.value && 'active'
        ]"
        :key="item.value"
        :style="{ width: `${itemWidth}px` }"
        @click="moveDistance(item)"
      >
        {{ item.label }}
      </li>
    </ul>
    <div class="right-icon" :style="{ width: `${rightBtnWidth}px` }" v-if="showIcon">
      <slot> </slot>
    </div>
  </section>
</template>

<script setup lang="ts" name="SyMoveList">
import { IMoveListItem, IMoveItem } from './types';
import { useMoveList } from './useMoveList';

interface IProps {
  list: IMoveItem[];
  showIcon?: boolean; // 是否展示右侧按钮
  modelValue: string | number; // 双向绑定的值
  rightBtnWidth?: number; // 右侧按钮宽度
  itemWidth?: number; // 单个 item 的宽度
}

const prop = withDefaults(defineProps<IProps>(), {
  rightBtnWidth: 50,
  itemWidth: 122
});
const emit = defineEmits(['update:modelValue']);

const defList = ref<IMoveListItem[]>([]);

watchEffect(() => {
  defList.value = prop.list.map((item, index) => ({ index, ...item }));
});

const { HS_PREFIX_ITEM, syMoveListBoxRef, syListRef, moveDistance } = useMoveList(
  prop,
  emit,
  defList
);
</script>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.sy-movelist-box {
  position: relative;
  background-color: #fff;
  height: 36px;
  overflow: hidden;
  border-radius: 18px;
  .sy-list {
    display: flex;
    background-color: #fff;
    height: 36px;
    border-radius: 18px;
    flex-wrap: nowrap;
    transition: all 0.15s ease;
    .sy-list-item {
      box-sizing: border-box;
      padding: 0 4px;
      flex-shrink: 0;
      height: 100%;
      line-height: 36px;
      text-align: center;
      border-radius: 18px;
      color: #5a607f;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &.active,
      &:hover {
        color: #fff;
        background-image: linear-gradient(to right, #5b5dff, #8690ff);
      }
    }
  }
  .right-icon {
    position: absolute;
    right: -1px;
    top: 0;
    height: 36px;
    cursor: pointer;
    background-color: #fff;
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    box-shadow: -1px 0 4px 0 #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: #7b82ff;
      color: #fff;
    }
  }
}
</style>

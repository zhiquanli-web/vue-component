<template>
  <li
    :class="['sy-menu-item', activeValue == value && 'active']"
    :data-value="value"
    :data-label="label"
  >
    <slot> {{ label }} </slot>
  </li>
</template>

<script setup lang="ts" name="SyMenuItem">
interface IProps {
  label?: string | number;
  value: string | number;
  [propName: string]: any;
}
defineProps<IProps>();
const activeValue = inject('activeValue');
</script>

<style lang="scss" scoped>
.sy-menu-item {
  white-space: nowrap;
  padding: 5px 12px;
  color: #000;
  font-size: 14px;
  cursor: pointer;
  line-height: 22px;
  transition: all 0.3s;
  &:hover,
  &.active {
    background-color: #f5f5f5;
    color: #50a6ff;
  }
}
</style>

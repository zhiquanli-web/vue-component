<template>
  <ul class="sy-menu" @click="handleClick">
    <slot />
  </ul>
</template>

<script setup lang="ts" name="SyMenu">
interface IProps {
  defaultActive: string | number;
}

const prop = defineProps<IProps>();
const emit = defineEmits(['change']);

const defActive = ref(prop.defaultActive);
provide('activeValue', defActive);

const handleClick = (e: MouseEvent) => {
  const { dataset } = e.target as any;
  defActive.value = dataset.value;
  emit('change', dataset);
};
</script>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sy-menu {
  position: relative;
  padding: 4px 0;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  background-color: #fff;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
}
</style>

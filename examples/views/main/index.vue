<template>
  <SyMoveList :list="list" v-model="active" showIcon :itemWidth="200" :rightBtnWidth="50">
    <SyDropdown ref="dropDownRef" @click="handleClick">
      <span class="text">
        <i-sy-arrowDown width="13" height="13" />
      </span>
      <template #dropdown>
        <SyMenu :default-active="active" @change="handleChange">
          <SyMenuItem
            v-for="item in list"
            :key="item.value"
            :value="item.value"
            :class="[active === item.value && 'active', `drop_item_${item.value}`]"
          >
            {{ item.label }}
          </SyMenuItem>
        </SyMenu>
      </template>
    </SyDropdown>
  </SyMoveList>
</template>

<script setup lang="ts">
// import DropDown from '@packages/dropdown';
// import SyMenu from '@packages/menu';
// import SyMenuItem from '@packages/menuItem';
// import SyMoveList from '@packages/moveList';
// import { SyDropDown, SyMenu, SyMenuItem, SyMoveList } from '@packages/index';

const active = ref<number | string>('');
const dropDownRef = ref();

interface IList {
  label: string;
  value: string;
}
const list = ref<IList[]>([]);
for (let index = 0; index < 10; index++) {
  list.value.push({
    label: `item-${index}`,
    value: `item_${index}`
  });
}
active.value = list.value[0].value;
const handleChange = (obj: Record<string, any>) => {
  active.value = obj.value;
};
const handleClick = () => {
  if (dropDownRef.value.visible) {
    nextTick(() => {
      const activeDom = document.querySelectorAll(`.drop_item_${active.value}`)[0];
      setTimeout(() => {
        activeDom.scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        });
      }, 100);
    });
  }
};
</script>

<style lang="scss" scoped>
:deep(.sy-drop-link .text) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 36px;
  color: #000;
  &:hover {
    color: #fff;
  }
}
.sy-menu {
  max-height: 250px;
  overflow-y: auto;
}
</style>

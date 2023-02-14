<template>
  <OnClickOutside @trigger="visible = false" :options="{ ignore: ['.sy-dropdown-content'] }">
    <a class="sy-drop-link" @click="changVisibleDropdown" ref="syDropLinkRef">
      <slot />
    </a>
    <teleport to="body">
      <Transition name="slide-fade">
        <div class="sy-popper" v-if="visible">
          <div
            class="sy-dropdown-content"
            :style="{
              left: `${dropdownPosition.left}px`,
              top: `${dropdownPosition.top}px`,
              minWidth: `${dropdownPosition.width}px`
            }"
            ref="syDropdownContentRef"
          >
            <div class="sy-dropdown-list" @click="changVisibleDropdown">
              <slot name="dropdown" />
            </div>
          </div>
        </div>
      </Transition>
    </teleport>
  </OnClickOutside>
</template>

<script setup lang="ts" name="SyDropdown">
import { OnClickOutside } from '@vueuse/components';
const visible = ref(false);
// 触发元素Dom
const syDropLinkRef = ref<HTMLDivElement>();
// 下拉列表Dom
const syDropdownContentRef = ref<HTMLDivElement>();

const dropdownPosition = reactive({
  left: 0,
  top: 0,
  width: 0
});

const changVisibleDropdown = () => {
  visible.value = !visible.value;
  const { clientHeight, clientWidth } = document.body;
  const { width, height, left, top } = syDropLinkRef.value!.getBoundingClientRect();
  dropdownPosition.width = width;
  dropdownPosition.top = top + height + 4;
  nextTick(() => {
    if (syDropdownContentRef.value) {
      const { offsetWidth, offsetHeight } = syDropdownContentRef.value;
      dropdownPosition.left = left - (offsetWidth - width) / 2;
      // 1. left
      if (offsetWidth >= clientWidth || dropdownPosition.left <= 0) {
        dropdownPosition.left = 0;
      } else if (dropdownPosition.left + offsetWidth > clientWidth) {
        dropdownPosition.left = clientWidth - offsetWidth;
      }
      // 2. top
      if (offsetHeight >= clientHeight) {
        dropdownPosition.top = 0;
      } else if (dropdownPosition.top + offsetHeight > clientHeight) {
        if (offsetHeight > dropdownPosition.top) {
          dropdownPosition.top = 0;
        } else {
          dropdownPosition.top = top - offsetHeight < 0 ? 0 : top - offsetHeight;
        }
      }
    }
  });
};
defineExpose({
  visible
});
</script>
<style lang="scss" scoped>
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sy-drop-link {
  display: inline-block;
  color: #1890ff;
  &:hover {
    color: #40a9ff;
  }
}
.sy-popper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 0;
  z-index: 9999;
}
.sy-dropdown-content {
  position: absolute;
}
.sy-dropdown-list {
  position: relative;
  padding: 4px 0;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  background-color: #fff;
  border-radius: 2px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>

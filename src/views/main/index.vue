<template>
  <div class="main-container">
    <button @click="handleSignout">登出</button>
  </div>
</template>

<script setup lang="ts">
import localCache from '@/utils/localCache';

const handleSignout = () => {
  localCache.clearCache();
  window.location.reload();
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="login-container">
    <button @click="handleLogin">login</button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store';
const store = useStore();

const handleLogin = async () => {
  await store.user.loginAction({ username: 'admin', password: 'admin' });
};
</script>

<style lang="scss" scoped></style>

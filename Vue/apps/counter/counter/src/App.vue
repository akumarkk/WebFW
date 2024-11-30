<script setup lang="ts">
import { ref, onMounted } from 'vue';
const count = ref(0)
function increment() { return count.value++;}
</script>

<template>
  <div>
    <button @click="increment"> you clicked at {{count}} times </button>
  </div>
</template>

<style scoped>
</style>

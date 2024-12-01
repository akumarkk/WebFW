<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TodoList from './components/TodoList.vue'
//const count = ref(0)

//let count = 0;
const count = ref(0) // causes re-render
function increment() {
  console.log(count.value);
 return count.value++; }
</script>

<template>
  <div>
    <button @click="increment"> you clicked at {{count}} times </button>
    <TodoList />
  </div>
</template>

<style scoped>
</style>

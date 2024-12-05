import { watchEffect, ref } from './vue.mjs';
const count = ref(1);
let doubleCount;
watchEffect(() => (doubleCount = count.value * 2));

console.log(doubleCount); // 2

count.value = 2;
console.log(doubleCount); // 4

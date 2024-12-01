<template>
    <input type="text" @input="handleInput"/>

</template>
<script setup lang="ts">
// function handleInput(event) {
//     console.log(event);
//     this.$emit('display-text', event.target.value)
// }
// const handleInput = (event) => {
//     console.log(event);
//     this.$emit('display-text', event.target.value)
// }

// const emit

const emit = defineEmits(['display-text']);
const handleInput = (event) => {
    console.log(event.target.value);
    emit('display-text', event.target.value)
}
</script>
<style>

</style>

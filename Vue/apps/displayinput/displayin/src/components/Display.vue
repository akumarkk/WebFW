<template>
    <div>
        <DisplayItem @display-text="handleInput">

        </DisplayItem>
        <p>
            you entered - {{ message }}!
        </p>
    </div>
    <!-- <input type="text" @input="handleInput"/> -->

</template>
<script setup lang="ts">
import { ref } from 'vue';
import DisplayItem from './DisplayItem.vue';

const message = ref('empty message')
const handleInput = (value) => {
    console.log(value);
    message.value = value;
    // this.$emit('display-text', event.target.value)
}

</script>
<style>

</style>

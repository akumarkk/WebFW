##### Vue
JS framework that makes building interactive and reactive frontends easier.
Vue follows Single Page Component with the below components - 
- template (html)
- script (js)
    - data {}
    - methods {}
    - components {}
- styling

ref is a function imported from the vue library that creates a reactive reference to a value. When you use ref(null), you're creating a ref that initially holds a null value. This ref can be used to store and update values reactively within your Vue component.

DOM Element References: While ref can be used for general value storage, it's commonly used to reference DOM elements. In this case, you would assign the ref to an element in your template using the ref attribute.
```
<template>
  <input ref="myInput" type="text">
  <button @click="focusInput">Focus Input</button>
</template>

<script>
import { ref, onMounted } from 'vue';

const myInput = ref(null);

onMounted(() => {
  myInput.value.focus();
});

const focusInput = () => {
  myInput.value.focus();
};
</script>
```

- could be used to build multi-page as well as single page sites

- vuejs browser side js- what the user sees

react to user input and update the screen dynamically.

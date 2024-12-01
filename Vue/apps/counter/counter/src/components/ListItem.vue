<template>
    <h1>{{ todo.todo }} </h1>

</template>
<script>

export default {
    props: {
        todoitem: String,
    // completed: Boolean,
    todo: {
      type: Object
    }
    }

}


</script> 

<style scoped>
.completed {
    text-decoration: line-through;
} 

</style>

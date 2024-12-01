<template>
    <li class="d-flex align-item-center list-group-item ">
        <button class="btn border-0 text-left flex-grow-1">
            {{ todo.todo }}
        </button>
        <form class="flex-grow-1">
            <input type="text" class="form-control"/>

        </form>
        <button class="btn btn-outline-primary">Edit</button>
        <button class="btn btn-outline-danger" @click="$emit('on-delete')">Delete</button>


    </li>
    <!-- <h1>{{ todo.todo }} </h1> -->

</template>
<script>

export default {
    props: {
        todoitem: String,
        completed: Boolean,
        todo: {
            type: Object
        }
    },

    data() {
        return {
            isEditing: false,
            newTodoString: ""
        }
    }
}


</script> 

<style scoped>
.completed {
    text-decoration: line-through;
} 

</style>

<template>
    <h2>
        welcome to List app
    </h2>
</template>

<script>
    //export defualt {}

    export defualt {
        data() {
            return {
                todos: [
                    {todo: "Make angular course", completed :false},
                    {todo: "Make swelte course", completed :false},
                    {todo: "Make angular 2 course", completed :true}
                
                ]
            }
        },

        methods: {
            addToDo(todo) { this.todos.push(todo) },
            editToDo(todo, etodo) {todo.todo = etodo},
            toggleToDo(todo) {todo.completed = !todo.completed},
            deleteToDo(todo) { this.todos = this.todo.filter(t => t.todo != todo)},
        }
    }

</script>
<style>
body {
    background-color: rgb(66, 66, 66);
    color: blue;
}

</style>
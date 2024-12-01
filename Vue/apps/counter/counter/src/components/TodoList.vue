<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <p class="display-3">To do List</p>
      </div>
    </div>
    <div class="row">
      <p>Add create form</p>
    </div>

    <div class="row">
      <div class="col-12 col-lg-6">
        <ul class="list-group">
          <!-- :todo = "todo" -->
          <!-- <li v-for="(todo, index) in todos" :key="index"> {{ todo.todo }} </li> -->
          <ListItem v-for="(todo, index) in todos" :key="index" :todo = "todo" :todoitem="todo.todo" :completed="todo.completed"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
export default {
  //
  components: {ListItem},
  data() {
    return {
      todos: [
        { todo: "Make angular course", completed: false },
        { todo: "Make swelte course", completed: false },
        { todo: "Make angular 2 course", completed: true },
      ],
    };
  },

  methods: {
    addToDo(todo) {
      this.todos.push(todo);
    },
    editToDo(todo, etodo) {
      todo.todo = etodo;
    },
    toggleToDo(todo) {
      todo.completed = !todo.completed;
    },
    deleteToDo(todo) {
      this.todos = this.todo.filter((t) => t.todo != todo);
    },
  },
};
</script>
<style>
body {
  background-color: rgb(66, 66, 66);
  color: blue;
}
</style>

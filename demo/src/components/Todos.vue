<template>
  <div id="app">
    <h1>Demo Todo App</h1>
    <div class="bottom">
      <div>
        <input type="text" @input="updateInputTodo" :value="inputTodo" >
        <button @click="addTodo">Add</button>
      </div>
      <div>
        My Todos:
        <ul>
          <li v-for="(todo, i) in todos" :key=i>
            <todo-item :todo="todo" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import TodoItem from './TodoItem.vue'
  export default {
    name: 'Todo',
    components: {
      TodoItem
    },
    data(){
      return {
        inputTodo: '',
        todos: []
      }
    },
    methods: {
      updateInputTodo(e){
        this.inputTodo = e.target.value
      },
      addTodo(){
        const todo = this.inputTodo
        this.todos = [...this.todos, todo]
        this.inputTodo = ''
      }
    }
  }
</script>

<!-- Global CSS -->
<style>
  code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-size: 0.9em;
    white-space: pre-wrap;
    color: #2c3e50;
  }

  code::before, code::after {
    content: '`';
  }
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  #app {
    text-align: center;
  }

  #app h1 {
    color: #2c3e50;
    font-weight: 300;
    margin: 0;
  }

  .bottom {
    padding: 80px 10px;
    font-size: 24px;
    font-weight: 300;
  }

  .fade {
    font-size: 14px;
  }

  .logo {
    animation: spin 4s 1s infinite linear
  }
</style>

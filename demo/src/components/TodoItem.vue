<template>
  <div>
    <span>{{ todo }}</span>
    <button @click="removeTodo(todo)">DELETE</button>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'TodoItem',
  props: ['todo', 'removeTodo'],
})

</script>

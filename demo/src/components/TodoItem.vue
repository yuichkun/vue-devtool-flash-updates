<template>
  <div>
    <span>{{ todo }}</span>
    <button id="delete-button" @click="removeTodo(todo)">Delete</button>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'TodoItem',
  props: ['todo', 'removeTodo'],
})

</script>

<style scoped>
#delete-button {
  margin-left: 32px;
}
</style>

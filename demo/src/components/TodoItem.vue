<template>
  <span>{{ todo }}</span>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'TodoItem',
  props: ['todo'],
})

</script>

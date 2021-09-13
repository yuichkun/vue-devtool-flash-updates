import Vue from 'vue'
import App from './components/App.vue'

Vue.config.productionTip = false
// TODO: install vue devtool flash updates here

new Vue({
  el: '#app',
  render: h => h(App)
})

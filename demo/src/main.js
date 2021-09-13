import Vue from 'vue'
import App from './App.vue'
import FlashUpdates from 'vue-devtools-flash-updates'

Vue.config.productionTip = false

Vue.use(FlashUpdates, {
  logUpdatedComponents: true,
})

new Vue({
  render: h => h(App),
}).$mount('#app')

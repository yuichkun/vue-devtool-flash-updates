import Vue from 'vue'
import App from './App.vue'
import FlashUpdates from '../../src/vue-devtools-flash-updates'

Vue.config.productionTip = false

Vue.use(FlashUpdates)

new Vue({
  render: h => h(App),
}).$mount('#app')

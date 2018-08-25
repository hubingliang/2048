import Vue from 'vue'
import App from './App.vue'
import store from './store'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, { name: 'v-touch' })

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

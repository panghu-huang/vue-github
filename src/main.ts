import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initDirectives } from './directives'
import { initFilters } from './filters'
import './global.scss'

Vue.config.productionTip = false

initDirectives(Vue)
initFilters(Vue)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('.app-container')

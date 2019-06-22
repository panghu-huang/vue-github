import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initDirectives } from './directives'
import { initFilters } from './filters'

Vue.config.productionTip = false

initDirectives()
initFilters()

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('.app-container')

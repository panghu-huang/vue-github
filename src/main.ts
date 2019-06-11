import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { titleDirective } from '@/directives'
import { TimeUtils } from '@/utils'
import './global.scss'

Vue.config.productionTip = false
Vue.directive('page-title', titleDirective)
Vue.filter('fromNow', (time: string) => {
  return TimeUtils.fromNow(time)
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('.app-container')

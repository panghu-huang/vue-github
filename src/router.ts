import Vue from 'vue'
import Router from 'vue-router'
import { Home, Activities } from '@/pages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/activities',
      name: 'activities',
      component: Activities,
    }
  ],
})

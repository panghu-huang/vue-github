import Vue from 'vue'
import titleDirective from './title'

export function initDirectives() {
  Vue.directive('page-title', titleDirective)
}

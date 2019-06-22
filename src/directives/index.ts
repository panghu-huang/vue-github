import Vue, { VueConstructor } from 'vue'
import titleDirective from './title'

export function initDirectives(Vue: VueConstructor<Vue>) {
  Vue.directive('page-title', titleDirective)
}

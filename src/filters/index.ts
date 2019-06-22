import Vue, { VueConstructor } from 'vue'
import { TimeUtils } from '@/utils'

export function initFilters(Vue: VueConstructor<Vue>) {
  Vue.filter('fromNow', (time: string) => {
    return TimeUtils.fromNow(time)
  })
  Vue.filter('emptyArray', (array: any) => {
    return array || []
  })
}

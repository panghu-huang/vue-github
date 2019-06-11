import { DirectiveOptions } from 'vue'
import { DirectiveBinding } from 'vue/types/options'

const titleDirective: DirectiveOptions = {
  inserted: (el, binding: DirectiveBinding) => {
    document.title = `${binding.value} - ${process.env.VUE_APP_NAME}`
  },
  unbind: () => {
    document.title = process.env.VUE_APP_NAME
  }
}

export default titleDirective

import Vue, { VNode } from 'vue'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VUE_APP_NAME: string
      VUE_APP_BASENAME: string
    }
  }
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

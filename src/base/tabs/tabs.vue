<template>
  <div class="tabs">
    <div class="tabs__title">
      <slot name="title"></slot>
    </div>
    <div class="tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    name: 'Tabs',
    provide() {
      return {
        tabsRoot: this,
      }
    },
  })
  class Tabs extends Vue {

    public activeKey: string = ''
    public tabs: string[] = []

    public insertTab(tabKey: string) {
      if (this.tabs.length === 0) {
        this.activeKey = tabKey
      }
      this.tabs = Array.from(new Set(this.tabs.concat(tabKey)))
    }

    public changeTab(tabKey: string) {
      this.activeKey = tabKey
    }

    // 宁愿多一个 tab-title 也不喜欢 h() 写法
    // public render(h: Vue.CreateElement) {
    //   const titles = this.tabs.map((tab) => {
    //     return h('span', {
    //       on: {
    //         click: () => this.changeTab(tab.tabKey),
    //       }
    //     }, tab.title)
    //   })
    //   return (
    //     h('div', { class: 'tabs' },
    //      [
    //        h('div', { class: 'tabs-title' }, titles),
    //        this.$slots.default,
    //      ]
    //     )
    //   )
    // }
  }

  export default Tabs
</script>

<style lang="scss">
  .tabs {
    padding: 0 20px;
    .tabs__title {
      display: flex;
      padding: 16px 0;
      border-bottom: 1px solid var(--border-color);
    }
  }
</style>

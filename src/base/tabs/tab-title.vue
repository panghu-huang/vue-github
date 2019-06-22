<template>
  <div :class="classes" @click="changeTab">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'

  @Component({
    name: 'TabTitle',
    inject: ['tabsRoot'],
  })
  class TabTitle extends Vue {

    @Prop({ required: true, type: String })
    private readonly tabKey: string
    private readonly tabsRoot: any

    public get classes() {
      const isActive = this.tabKey === this.tabsRoot.activeKey
      return `tab-title ${isActive ? 'tab-title--active' : ''}`
    }

    public mounted() {
      this.tabsRoot.insertTab(this.tabKey)
    }

    public changeTab() {
      this.tabsRoot.changeTab(this.tabKey)
    }
  }

  export default TabTitle
</script>

<style lang="scss">
  .tab-title {
    margin-right: 20px;
    cursor: pointer;
    color: var(--text-color);
    font-size: 16px;
    transition: all 0.1s;
    transform-origin: 0 100%;
  }

  .tab-title--active {
    font-weight: bold;
    color: var(--title-color);
    transform: scale(1.1);
    margin-right: 30px;
  }
</style>

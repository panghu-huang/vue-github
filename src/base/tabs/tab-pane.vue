<template>
  <div
    v-if="loaded"
    v-show="isActive"
    class="tab-pane">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop, Watch } from 'vue-property-decorator'

  @Component({
    name: 'TabPane',
    inject: ['tabsRoot'],
  })
  class TabPane extends Vue {

    public loaded = false
    @Prop({ type: String, required: true })
    private readonly tabKey: string
    private readonly tabsRoot: any

    public get isActive() {
      return this.tabsRoot.activeKey === this.tabKey
    }

    @Watch('tabsRoot.activeKey')
    public handleActiveKeyChange(activeKey: string) {
      if (!this.loaded && activeKey === this.tabKey) {
        this.loaded = true
      }
    }
  }

  export default TabPane
</script>

<style lang="scss">
  .tab-pane {
    padding: 0;
  }
</style>

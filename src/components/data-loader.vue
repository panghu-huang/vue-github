<template>
  <div class="data-loader">
    <slot
      :loader="loadData"
      :loading="loading"
      :hasLoadAll="hasLoadAll"
      :data="data"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop, Watch } from 'vue-property-decorator'
  import { ApiService } from '@/services'
  import { DEFAULT_PAGE_SIZE } from '@/config'

  let page = 0
  @Component({
    name: 'DataLoader',
  })
  class DataLoader extends Vue {

    @Prop({ required: true, type: String })
    public readonly routeName: string

    @Prop({ required: false, type: String })
    public readonly path: string

    @Prop({ required: false, type: Object })
    public readonly params: object

    public loading = false
    public hasLoadAll = false
    public data: any = null

    public mounted() {
      page = 0
      this.loadData()
    }

    @Watch('routeName')
    public handleRouteNameChange() {
      this.resetLoader()
    }

    @Watch('params')
    public handleParamsChange() {
      this.resetLoader()
    }

    @Watch('path')
    public handlePathChange() {
      this.resetLoader()
    }

    public async loadData() {
      try {
        this.loading = true
        const { routeName, path, params } = this
        const service = new ApiService(routeName)
        const data = await service.get({
          path,
          data: {
            ...params,
            page: ++page,
            per_page: DEFAULT_PAGE_SIZE,
          },
        })
        if (Array.isArray(data)) {
          if (data.length < DEFAULT_PAGE_SIZE) {
            this.hasLoadAll = true
          }
          this.data = (this.data || []).concat(data)
        } else {
          this.data = data
        }
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    }

    public resetLoader() {
      page = 0
      this.hasLoadAll = false
      this.data = null
      this.loadData()
    }

  }

  export default DataLoader
</script>

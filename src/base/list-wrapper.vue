<template>
  <div class="list">
    <template v-for="(item, index) in list">
      <div :key="index" class="list__item">
        <slot :row="item" :index="index"></slot>
      </div>
    </template>
    <div class="wrapper" v-show="showLoadMore">
      <app-button
        class="btn-loadmore"
        @click="loadMore">
        Load more
      </app-button>
    </div>
    <div class="wrapper" v-show="loading">
      <spinner></spinner>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'
  import Button from './button.vue'
  import Spinner from './spinner.vue'

  @Component({
    components: {
      'app-button': Button,
      Spinner,
    }
  })
  class ListWrapper extends Vue {

    @Prop({ required: true, type: Array })
    private readonly list: any[]

    @Prop({ type: Boolean, default: false })
    private readonly hasLoadAll: boolean

    @Prop({ type: Boolean, default: false })
    private readonly loading: boolean

    public get showLoadMore() {
      return !this.hasLoadAll && !this.loading
    }

    public loadMore() {
      this.$emit('load-more')
    }
  }

  export default ListWrapper
</script>

<style lang="scss">
  .list {
    padding: 20px;
    .list__item {
      padding: 12px 0;
      border-bottom: 1px solid var(--border-color);
    }
    .wrapper {
      display: flex;
      justify-content: center;
      padding: 20px 0;
      .btn-loadmore {
      }
    }
  }
</style>

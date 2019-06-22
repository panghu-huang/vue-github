<template>
  <list-wrapper
    :list="repositories"
    :loading="loading"
    :has-load-all="hasLoadAll"
    @load-more="loadMore">
    <template v-slot:default="{ row }">
      <div class="repository">
        <div class="repository__head">
          <avatar :repo-full-name="row.full_name"/>
          <repository-link :full-name="row.full_name"/>
        </div>
        <p class="repository__desc">{{ row.description }}</p>
        <div class="repository__foot">
          <language :language="row.language"/>
          <span class="iconfont icon-star">
            {{ formatStars(row.stargazers_count) }}
          </span>
          <span>{{ row.pushed_at | fromNow }}</span>
        </div>
      </div>
    </template>
  </list-wrapper>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Language from './language.vue'
  import { Prop } from 'vue-property-decorator'
  import { ListWrapper, Avatar, RepositoryLink } from '@/base'
  import { IRepository } from '@/types'

  @Component({
    components: {
      ListWrapper,
      Avatar,
      Language,
      RepositoryLink,
    }
  })
  class RepositoryList extends Vue {

    @Prop({ required: true, type: Array })
    private readonly repositories: IRepository[]

    @Prop()
    private readonly loading: boolean

    @Prop()
    private readonly hasLoadAll: boolean

    public loadMore() {
      this.$emit('load-more')
    }

    public formatStars(stars: number) {
      return stars > 1000 ? `${+(stars / 1000).toFixed(1)}k` : stars
    }
  }

  export default RepositoryList
</script>

<style lang="scss">
  .repository {
    .repository__head {
      display: flex;
      align-items: center;
      h3 {
        margin: 0;
      }
    }
    .repository__desc {
      margin: 12px 0;
    }
    .repository__foot {
      display: flex;
      font-size: 12px;
      .icon-star {
        margin-right: 20px;
      }
    }
  }
</style>

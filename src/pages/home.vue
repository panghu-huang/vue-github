<template>
  <repository-list
    v-page-title="'Popular JavaScript Repositories'"
    :repositories="repositories"
    :loading="loading"
    :has-load-all="hasLoadAll"
    @load-more="fetchRepositories"
  />
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { RepositoryList } from '@/components'
  import { ApiService } from '@/services'
  import { IRepository, ISearchRepositories } from '@/types'
  import { DEFAULT_PAGE_SIZE } from '@/config'

  let page = 0

  @Component({
    components: {
      RepositoryList,
    }
  })
  class Home extends Vue {

    public repositories: IRepository[] = []
    public loading: boolean = false
    public hasLoadAll: boolean = false

    public mounted() {
      page = 0
      this.fetchRepositories()
    }

    private async fetchRepositories() {
      try {
        this.loading = true
        const service = new ApiService<ISearchRepositories>('search')
        const results = await service.get({
          path: 'repositories',
          data: {
            q: 'JavaScript',
            sort: 'stars',
            page: ++page,
            per_page: DEFAULT_PAGE_SIZE,
          },
        })
        if (results.items.length < DEFAULT_PAGE_SIZE) {
          this.hasLoadAll = true
        }
        this.repositories = this.repositories.concat(results.items)
      } catch (error) {
        console.log(error.message)
      } finally {
        this.loading = false
      }
    }
  }

  export default Home
</script>

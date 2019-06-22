<template>
  <data-loader
    route-name="users"
    :path="path"
    v-slot:default="{ loading, data, hasLoadAll, loader }">
    <repository-list
      :loading="loading"
      :repositories="data | emptyArray"
      :has-load-all="hasLoadAll"
      @load-more="loader"
    />
  </data-loader>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'
  import { RepositoryList, DataLoader } from '@/components'

  @Component({
    name: 'UserRepositories',
    components: {
      RepositoryList,
      DataLoader,
    },
  })
  class UserRepositories extends Vue {

    @Prop()
    public readonly user: string

    public get path() {
      return `${this.user}/repos`
    }

  }

  export default UserRepositories
</script>

<template>
  <tabs class="user-tabs">
    <template slot="title">
      <tab-title tab-key="repos">
        Repositories
      </tab-title>
      <tab-title tab-key="members">
        Members
      </tab-title>
    </template>
    <tab-pane tab-key="repos">
      <user-repositories
        :user="$route.params.name"
      />
    </tab-pane>
  </tabs>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Tabs, TabTitle, TabPane } from '@/base'
  import UserRepositories from './repositories'

  @Component({
    name: 'Users',
    components: {
      Tabs,
      TabTitle,
      TabPane,
      UserRepositories,
    },
  })
  class Users extends Vue {}

  export default Users
</script>

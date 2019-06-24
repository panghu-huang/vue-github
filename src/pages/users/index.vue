<template>
  <tabs class="user-tabs">
    <template slot="title">
      <tab-title tab-key="repos">
        Repositories
      </tab-title>
      <tab-title tab-key="followers">
        Followers
      </tab-title>
      <tab-title tab-key="following">
        Following
      </tab-title>
    </template>
    <tab-pane tab-key="repos">
      <user-repositories
        :user="userName"
      />
    </tab-pane>
    <tab-pane tab-key="followers">
      <user-followers
        :user="userName"
      />
    </tab-pane>
    <tab-pane tab-key="following">
      <user-followers
        :user="userName"
        type="following"
      />
    </tab-pane>
  </tabs>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Tabs, TabTitle, TabPane } from '@/base'
  import UserRepositories from './repositories'
  import UserFollowers from './followers'

  @Component({
    name: 'Users',
    components: {
      Tabs,
      TabTitle,
      TabPane,
      UserRepositories,
      UserFollowers,
    },
  })
  class Users extends Vue {

    public get userName() {
      return this.$route.params.name
    }
  }

  export default Users
</script>

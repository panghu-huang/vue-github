<template>
  <data-loader
    route-name="users"
    :path="path">
    <template v-slot:default="{ loading, hasLoadAll, loader, data }">
      <user-list
        :users="data | emptyArray"
        :loading="loading"
        :has-load-all="hasLoadAll"
        @load-more="loader"
      />
    </template>
  </data-loader>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'
  import { DataLoader, UserList } from '@/components'

  @Component({
    name: 'UserFollowers',
    components: {
      DataLoader,
      UserList,
    }
  })
  class UserFollowers extends Vue {

    @Prop({ required: true, type: String })
    public readonly user: string

    @Prop({ required: false, type: String, default: 'followers' })
    public readonly type: 'followers' | 'following'

    public get path() {
      return `${this.user}/${this.type}`
    }

  }

  export default UserFollowers
</script>

<style lang="scss">

</style>

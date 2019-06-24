<template>
  <list-wrapper
    :list="users"
    :loading="loading"
    :has-load-all="hasLoadAll"
    @load-more="loadMore">
    <template v-slot:default="{ row }">
      <div class="user">
        <avatar :user="row" class="user__avatar"/>
        <router-link :to="getUserUrl(row)">
          {{ row.login }}
        </router-link>
      </div>
    </template>
  </list-wrapper>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'
  import { ListWrapper, Avatar } from '@/base'
  import { IUser } from '@/types'

  @Component({
    name: 'UserList',
    components: {
      ListWrapper,
      Avatar,
    }
  })
  class UserList extends Vue {

    @Prop({ required: true, type: Array })
    public readonly users: IUser[]

    @Prop({ required: false, type: Boolean })
    private readonly loading: boolean

    @Prop({ required: false, type: Boolean })
    private readonly hasLoadAll: boolean

    public loadMore() {
      this.$emit('load-more')
    }

    public getUserUrl(user: IUser) {
      return `/users/${user.login}`
    }
  }

  export default UserList
</script>

<style lang="scss">
  .user {
    display: flex;
    align-items: center;
    .user__avatar {
      margin-right: 8px;
    }
  }
</style>

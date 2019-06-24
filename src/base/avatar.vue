<template>
  <img :src="sourceUrl" alt="" class="avatar">
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'
  import { IUser } from '@/types'

  @Component({
   name: 'Avatar',
  })
  class Avatar extends Vue {

    @Prop()
    public readonly repoFullName: string

    @Prop()
    public readonly user: IUser

    public get sourceUrl() {
      const { repoFullName, user } = this
      const name = repoFullName ? repoFullName.split('/')[0] : ''
      const url = user ? user.avatar_url : `https://github.com/${name}.png`
      return `${url}?s=48&v=4`
    }
  }

  export default Avatar
</script>

<style lang="scss">
  .avatar {
    width: 24px;
    height: 24px;
    min-width: 24px;
    margin-right: 8px;
    border-radius: 50%;
    border: 1px solid var(--border-color);
  }
</style>

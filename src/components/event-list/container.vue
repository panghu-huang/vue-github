<template>
  <div class="container">
    <span :class="iconCls"/>
    <div class="container__content">
      <div class="container__head">
        <div class="actor">
          <avatar :user='actor'/>
          <user-link :name="actor.login"/>
        </div>
        <span class="time">{{ time | fromNow }}</span>
      </div>
      <p class="description" v-if="description">{{ description }}</p>
      <div class="inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Avatar } from '@/base'
  import { Prop } from 'vue-property-decorator'
  import { IUser } from '@/types'
  import UserLink from './user-link.vue'

  @Component({
    name: 'Container',
    components: {
      Avatar,
      UserLink,
    },
  })
  class Container extends Vue {

    @Prop({ required: true, type: String })
    private readonly type: string

    @Prop({ required: false, type: String })
    private readonly description?: string

    @Prop({ required: true, type: Object })
    private readonly actor: IUser

    @Prop({ required: true, type: String })
    private readonly time: string

    public get iconCls() {
      return `iconfont icon-${this.type} container__icon`
    }

  }

  export default Container
</script>

<style lang="scss">
  .container {
    display: flex;
    .container__icon {
      font-size: 14px;
      margin: 6px 12px;
    }
    .container__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .container__content {
      flex: 1;
    }
    .actor {
      display: flex;
      align-items: center;
    }
    .description {
      margin-left: 34px;
    }
  }
</style>

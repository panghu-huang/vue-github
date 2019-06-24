<template>
  <container
    class="push-event-container"
    type="unlock"
    :description="description"
    :actor="event.actor"
    :time="event.created_at">
    <div
      class="commit"
      v-for="commit in event.payload.commits"
      :key="commit.sha">
      <avatar :repo-full-name="event.actor.login"/>
      <strong>{{ commit.message }}</strong>
    </div>
  </container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Container from './container'
  import { Avatar } from '@/base'
  import { IPushEventPayload } from '@/types'

  export default Vue.extend({
    name: 'PushEvent',
    components: {
      Container,
      Avatar,
    },
    props: {
      event: Object,
    },
    computed: {
      description() {
        const { payload } = this.event
        const { ref } = payload as IPushEventPayload
        return `往 ${ref.replace('refs/heads/', '')} 分支推送了`
      }
    }
  })
</script>

<style lang="scss">
  .push-event-container {
    .commit {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }
    .commit:last-child {
      margin-bottom: 0;
    }
  }
</style>

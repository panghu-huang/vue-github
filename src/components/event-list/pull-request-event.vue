<template>
  <container
    type="pull-request"
    description="make repository public"
    :actor="event.actor"
    :time="event.created_at">
    <wrapper :full-name="event.repo.name"/>
    <div class="pull-request-body">
      <avatar :repo-full-name="event.actor.login"/>
      <strong>{{ event.payload.pull_request.body || event.payload.pull_request.title }}</strong>
    </div>
  </container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Container from './container'
  import Wrapper from './wrapper'
  import { Avatar } from '@/base'

  export default Vue.extend({
    name: 'PullRequestEvent',
    components: {
      Container,
      Wrapper,
      Avatar,
    },
    props: {
      event: Object,
    },
  })
</script>

<style lang="scss">
  .pull-request-body {
    display: flex;
    align-items: center;
  }
</style>

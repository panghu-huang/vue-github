<template>
  <container
    type="member"
    description="added an user to a repository"
    :actor="event.actor"
    :time="event.created_at">
    <wrapper :full-name="event.repo.name"/>
    <div class="member-event-wrapper">
      <avatar :user="event.payload.member"/>
      <user-link :name="event.payload.member.login"/>
    </div>
  </container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Container from './container.vue'
  import Wrapper from './wrapper.vue'
  import { Avatar } from '@/base'
  import UserLink from './user-link.vue'

  export default Vue.extend({
    name: 'MemberEvent',
    components: {
      Container,
      Wrapper,
      Avatar,
      UserLink,
    },
    props: {
      event: Object,
    }
  })
</script>

<style lang="scss">
  .member-event-wrapper {
    display: flex;
    align-items: center;
    padding: 4px 0;
  }
</style>

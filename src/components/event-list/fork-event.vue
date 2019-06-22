<template>
  <container
    type="fork"
    description="forked a repository"
    :actor="event.actor"
    :time="event.created_at">
    <wrapper :full-name="event.payload.forkee.full_name"/>
    <wrapper :full-name="event.repo.name"/>
  </container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Container from './container.vue'
  import Wrapper from './wrapper.vue'

  export default Vue.extend({
    name: 'ForkEvent',
    components: {
      Container,
      Wrapper,
    },
    props: {
      event: Object,
    }
  })
</script>

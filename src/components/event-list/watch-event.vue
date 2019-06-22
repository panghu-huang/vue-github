<template>
  <container
    type="star"
    description="starred a repository"
    :actor="event.actor"
    :time="event.created_at">
    <wrapper :full-name="event.repo.name"/>
  </container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Container from './container.vue'
  import Wrapper from './wrapper.vue'

  export default Vue.extend({
    name: 'WatchEvent',
    components: {
      Container,
      Wrapper,
    },
    props: {
      event: Object,
    }
  })
</script>

<template>
  <container
    type="unlock"
    description="make repository public"
    :actor="event.actor"
    :time="event.created_at">
    <wrapper :full-name="event.repo.name"/>
  </container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Container from './container'
  import Wrapper from './wrapper'

  export default Vue.extend({
    name: 'PublicEvent',
    components: {
      Container,
      Wrapper,
    },
    props: {
      event: Object,
    },
  })
</script>

<template functional>
  <container
    type="delete"
    :description="description"
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
    name: 'DeleteEvent',
    components: {
      Container,
      Wrapper,
    },
    props: {
      event: Object,
    },
    computed: {
      description() {
        const event = this.event as any
        return `delete ${event.payload.ref_type}: ${event.payload.ref}`
      }
    },
  })
</script>

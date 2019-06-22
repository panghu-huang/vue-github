<template>
  <container
    type="create-repo"
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
    name: 'CreateEvent',
    components: {
      Container,
      Wrapper,
    },
    props: {
      event: Object,
    },
    computed: {
      description() {
        const { payload } = this.event as any
        return payload.ref_type === 'repository'
          ? 'create a repository'
          : `create ${payload.ref} branch`
      }
    }
  })
</script>

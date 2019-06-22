<template>
  <data-loader
    route-name="users"
    path="wokeyi/received_events"
    v-slot:default="{ data, loading, hasLoadAll, loader }">
    <event-list
      :events="data | emptyArray"
      :loading="loading"
      :has-load-all="hasLoadAll"
      @load-more="loader"
    />
  </data-loader>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { EventList, DataLoader } from '@/components'

  @Component({
    name: 'ReceivedEvents',
    components: {
      EventList,
      DataLoader,
    },
  })
  class ReceivedEvents extends Vue {}

  export default ReceivedEvents
</script>

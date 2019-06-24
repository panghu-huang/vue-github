<template>
  <tabs v-page-title="'activities'">
    <template slot="title">
      <tab-title tab-key="received_events">
        Received Events
      </tab-title>
      <tab-title tab-key="events">
        Events
      </tab-title>
    </template>
    <tab-pane tab-key="received_events">
      <received-events/>
    </tab-pane>
    <tab-pane title="Events" tab-key="events">
      <events/>
    </tab-pane>
  </tabs>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { TabPane, Tabs, TabTitle } from '@/base'
  import ReceivedEvents from './received-events'
  import Events from './events'

  @Component({
    name: 'Activities',
    components: {
      Tabs,
      TabTitle,
      TabPane,
      ReceivedEvents,
      Events,
    },
  })
  class Activities extends Vue {}

  export default Activities
</script>

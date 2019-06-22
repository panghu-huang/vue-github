<template>
  <data-loader
    route-name="users"
    :path="path"
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
  import { mapGetters } from 'vuex'
  import Component from 'vue-class-component'
  import { EventList, DataLoader } from '@/components'

  @Component({
    name: 'ReceivedEvents',
    components: {
      EventList,
      DataLoader,
    },
    computed: {
      ...mapGetters(['loginName']),
    }
  })
  class ReceivedEvents extends Vue {

    public readonly loginName: string

    public get path() {
      return `${this.loginName}/received_events`
    }
  }

  export default ReceivedEvents
</script>

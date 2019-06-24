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
    name: 'Events',
    components: {
      EventList,
      DataLoader,
    },
    computed: {
      ...mapGetters(['loginName']),
    }
  })
  class Events extends Vue {

    public readonly loginName: string

    public get path() {
      return `${this.loginName}/events`
    }
  }

  export default Events
</script>

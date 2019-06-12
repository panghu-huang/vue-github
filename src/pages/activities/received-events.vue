<template>
  <event-list
    :events="events"
    :loading="loading"
    :has-load-all="hasLoadAll"
    @load-more="fetchReceivedEvents"
  />
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { ApiService } from '@/services'
  import { EventList } from '@/components'
  import { IEvent } from '@/types'
  import { DEFAULT_PAGE_SIZE } from '@/config'

  let page = 0

  @Component({
    name: 'ReceivedEvents',
    components: {
      EventList,
    },
  })
  class ReceivedEvents extends Vue {
    public loading = false
    public hasLoadAll = false
    public events: IEvent[] = []

    public mounted() {
      page = 0
      this.fetchReceivedEvents()
    }

    public async fetchReceivedEvents() {
      try {
        this.loading = true
        const service = new ApiService<IEvent[]>('users')
        const events = await service.get({
          path: `wokeyi/received_events`,
          data: {
            page: ++page,
            per_page: DEFAULT_PAGE_SIZE,
          },
        })
        if (events.length < DEFAULT_PAGE_SIZE) {
          this.hasLoadAll = true
        }
        this.events = this.events.concat(events)
      } catch (e) {
        console.error(e.message)
      } finally {
        this.loading = false
      }
    }
  }

  export default ReceivedEvents
</script>

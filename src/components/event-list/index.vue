<template>
  <list-wrapper
    :list="events"
    :loading="loading"
    :has-load-all="hasLoadAll"
    @load-more="loadMore">
    <template v-slot:default="{ row }">
      <delete-event
        v-if="eventType.DeleteEvent === row.type"
        :event="row"
      />
      <watch-event
        v-if="eventType.WatchEvent === row.type"
        :event="row"
      />
      <create-event
        v-if="eventType.CreateEvent === row.type"
        :event="row"
      />
      <fork-event
        v-if="eventType.ForkEvent === row.type"
        :event="row"
      />
      <member-event
        v-if="eventType.MemberEvent === row.type"
        :event="row"
      />
      <public-event
        v-if="eventType.PublicEvent === row.type"
        :event="row"
      />
      <pull-request-event
        v-if="eventType.PullRequestEvent === row.type"
        :event="row"
      />
      <push-event
        v-if="eventType.PushEvent === row.type"
        :event="row"
      />
    </template>
  </list-wrapper>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'
  import { ListWrapper } from '@/base'
  import { IEvent } from '@/types'
  import { EventType } from '@/config'
  import DeleteEvent from './delete-event'
  import WatchEvent from './watch-event'
  import CreateEvent from './create-event'
  import ForkEvent from './fork-event'
  import MemberEvent from './member-event'
  import PublicEvent from './public-event'
  import PullRequestEvent from './pull-request-event'
  import PushEvent from './push-event'

  @Component({
    name: 'EventList',
    components: {
      DeleteEvent,
      WatchEvent,
      CreateEvent,
      ListWrapper,
      ForkEvent,
      MemberEvent,
      PublicEvent,
      PullRequestEvent,
      PushEvent,
    },
  })
  class EventList extends Vue {

    public eventType = EventType
    @Prop({ required: true, type: Array })
    private readonly events: IEvent[]

    @Prop()
    private readonly loading: boolean

    @Prop()
    private readonly hasLoadAll: boolean

    public loadMore() {
      this.$emit('load-more')
    }
  }

  export default EventList
</script>

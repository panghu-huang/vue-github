<template>
  <div class="event-wrapper">
    <avatar :repo-full-name="fullName"/>
    <repository-link :full-name="fullName"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Avatar, RepositoryLink } from '@/base'

  export default Vue.extend({
    name: 'Wrapper',
    props: {
      fullName: String,
    },
    components: {
      Avatar,
      RepositoryLink
    },
  })
</script>

<style lang="scss">
  .event-wrapper {
    display: flex;
    align-items: center;
    padding: 4px 0;
  }
</style>

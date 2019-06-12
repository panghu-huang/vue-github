<template>
  <strong>
    <router-link :to="userLink">{{ name }}</router-link>
  </strong>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'UserLink',
    props: {
      name: String,
    },
    computed: {
      userLink() {
        return `/users/${this.name}`
      }
    }
  })
</script>

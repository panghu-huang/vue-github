<template>
  <div class="app-container">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Header } from '@/components'

  @Component({
    components: {
      'app-header': Header,
    }
  })
  class GithubApp extends Vue {

  }

  export default GithubApp
</script>

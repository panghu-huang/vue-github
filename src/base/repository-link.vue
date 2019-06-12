<template>
  <p class="repository-link">
    <router-link :to="userLink">{{ user }}</router-link>
    <span class="divider">/</span>
    <router-link :to="repositoryLink">{{ name }}</router-link>
  </p>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'

  @Component({
   name: 'RepositoryLink'
  })
  class RepositoryLink extends Vue {

    @Prop({ required: true, type: String })
    public readonly fullName: string

    public user: string = ''
    public name: string = ''

    public mounted() {
      const [user, name] = this.fullName.split('/')
      this.user = user
      this.name = name
    }

    public get userLink() {
      return `/users/${this.user}`
    }

    public get repositoryLink() {
      return `/repositories/${this.fullName}`
    }
  }

  export default RepositoryLink
</script>

<style lang="scss">
  .repository-link {
    margin: 0;
    .divider {
      margin: 0 2px;
    }
  }
</style>

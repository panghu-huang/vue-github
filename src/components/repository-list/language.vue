<template>
  <div v-show="language" class="language">
    <span
      class="language__color"
      :style="`background-color: ${languageColor}`"
    />
    <span>{{ language }}</span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'
  import { languageColors } from '@/config'

  type LanguageColors = typeof languageColors

  @Component({
   name: 'Language'
  })
  class Language extends Vue {

    @Prop() private readonly language: keyof LanguageColors

    public get languageColor() {
      return languageColors[this.language] || 'yellow'
    }
  }

  export default Language
</script>

<style lang="scss">
  .language {
    display: flex;
    align-items: center;
    margin-right: 20px;
    .language__color {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-right: 4px;
    }
  }
</style>

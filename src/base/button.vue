<template>
  <button class="btn" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  class Button extends Vue {

    public handleClick(evt: MouseEvent) {
      this.$emit('click', evt)
    }
  }

  export default Button
</script>

<style lang="scss">
  .btn {
    padding: 8px 20px;
    font-size: 12px;
    color: var(--text-color);
    border-radius: 2px;
    border: 1px solid var(--border-color);
    outline: none;
    transition: all 0.2s;
    cursor: pointer;

    &:hover, &:focus, &:active {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }
  }
</style>

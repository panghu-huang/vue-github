<template>
  <header class="header">
    <h2>
      <router-link to="/">Github</router-link>
    </h2>
    <nav>
      <ul>
        <li>
          <router-link to="activities" active-class="active">
            Activities
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid var(--border-color);

    h2 {
      margin-right: 20px;
      a {
        color: var(--title-color) !important;
        text-decoration: none;
      }
    }
    nav {
      ul li a {
        &.active {
          color: var(--primary-color);
        }
      }
    }
  }
</style>

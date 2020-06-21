<template>
  <b-navbar-nav class="ml-auto">
    <b-nav-item-dropdown
      v-if="this.$store.getters.isLogin"
      :text="this.$store.getters.getUsername"
      right
    >
      <b-dropdown-item :to="{name:'upload'}">Upload</b-dropdown-item>
      <b-dropdown-item href="#">Image</b-dropdown-item>
      <b-dropdown-item :to="{name:'favor'}">Favor</b-dropdown-item>
      <b-dropdown-item @click="logout">Log out</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-button v-else variant="outline-primary" :to="{name:'login'}">Login</b-button>
  </b-navbar-nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style>
</style>
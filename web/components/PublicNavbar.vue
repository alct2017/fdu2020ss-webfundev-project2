<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#">Hello,World!</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <items></items>

        <!-- Right aligned nav items -->
        <user></user>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import items from "./NavbarMenu";
import user from "./NavbarDropdown";
export default {
  data: function() {
    return {
      current: "Home"
    };
  },
  components: { items, user }
};
</script>

<style>
</style>
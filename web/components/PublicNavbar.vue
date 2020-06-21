<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand :to="{name:'home'}">Hello,World!</b-navbar-brand>

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
  components: { items, user }
};
</script>

<style>
</style>
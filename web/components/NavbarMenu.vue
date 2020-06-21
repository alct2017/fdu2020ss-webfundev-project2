<template>
  <b-navbar-nav>
    <b-nav-item
      v-for="(item,index) in items"
      :key="index"
      :to="item.href"
      :active="isActive(item)"
    >{{item.name}}</b-nav-item>
  </b-navbar-nav>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        { name: "Home", href: "/" },
        { name: "Browser", href: "/browser" },
        { name: "Search", href: "/search" }
      ]
    };
  },
  methods: {
    isActive(item) {
      let current = this.$route.name.toLowerCase();
      let itemName = item.name.toLowerCase();
      return current == itemName;
    }
  }
};
</script>

<style>
</style>
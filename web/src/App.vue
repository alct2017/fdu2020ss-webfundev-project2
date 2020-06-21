<template>
  <router-view></router-view>
</template>

<script>
export default {
  created() {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("id")) {
      this.$store.dispatch("login", {
        token: sessionStorage.getItem("token"),
        id: sessionStorage.getItem("id")
      });
    }
  }
};
</script>

<style scoped>
</style>
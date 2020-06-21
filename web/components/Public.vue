<template>
  <div>
    <p-header></p-header>
    <router-view class="main"></router-view>
    <p-footer></p-footer>
  </div>
</template>

<script>
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";
export default {
  components: {
    "p-header": PublicNavbar,
    "p-footer": PublicFooter
  }
};
</script>

<style scoped>
.main{
  min-height: 100%;
}
</style>
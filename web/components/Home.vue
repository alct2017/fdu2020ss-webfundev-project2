<template>
  <div>
    <carousel></carousel>
    <cardgroup></cardgroup>
    <sidebutton></sidebutton>
  </div>
</template>

<script>
import carousel from "./HomeCarousel";
import cardgroup from "./HomeCardGroup";
import sidebutton from "./HomeSideButton";
export default {
  components: {
    carousel,
    cardgroup,
    sidebutton
  }
};
</script>

<style>
</style>
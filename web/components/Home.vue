<template>
  <div>
    <carousel></carousel>
    <cardgroup ref="cardgroup"></cardgroup>
    <sidebutton @fresh="fresh"></sidebutton>
  </div>
</template>

<script>
import carousel from "./HomeCarousel";
import cardgroup from "./HomeCardGroup";
import sidebutton from "./HomeSideButton";
export default {
  methods: {
    fresh() {
      this.$refs.cardgroup.fresh();
    }
  },
  components: {
    carousel,
    cardgroup,
    sidebutton
  }
};
</script>

<style>
</style>
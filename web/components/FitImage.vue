<template>
  <a v-if="href" :href="href">
    <div class="img-container" :style="'width:'+width+';height:'+height">
      <img :src="src" />
    </div>
  </a>
  <div v-else class="img-container" :style="'width:'+width+';height:'+height">
    <img :src="src" />
  </div>
</template>

<script>
export default {
  prop: {
    href: { type: String, default: null },
    width: { type: String, default: "100%" },
    height: { type: String, default: "100%" },
    src: { type: String }
  }
};
</script>

<style scoped>
.img-container {
  display: block;
  position: relative;
}

.img-container .img {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
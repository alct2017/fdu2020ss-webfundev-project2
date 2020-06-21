<template>
  <div id="side-button-group">
    <b-button-group vertical>
      <b-button variant="outline-secondary">
        <b-icon icon="arrow-clockwise" aria-hidden="true"></b-icon>
      </b-button>
      <b-button variant="outline-secondary">
        <b-icon icon="chevron-bar-up" aria-hidden="true"></b-icon>
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {};
</script>

<style>
#side-button-group {
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>
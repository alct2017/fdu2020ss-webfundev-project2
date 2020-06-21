<template>
  <b-list-group-item v-if="rows">
    <template v-if="Boolean(result)">
      <b-row>
        <template v-for="index in perPage">
          <b-col v-if="firstRow+index<=rows" :key="index" sm="12" md="12" lg="4" class="py-3">
            <b-link :to="'/detail/'+result[firstRow+index-1].id">
              <b-img :src="result[firstRow+index-1].squareMediumPath" fluid-grow></b-img>
            </b-link>
          </b-col>
        </template>
      </b-row>
      <b-pagination
        v-if="rows>perPage"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
        last-number
        prev-text="<"
        next-text=">"
        ellipsis-text="..."
        align="center"
        class="mt-3"
      ></b-pagination>
    </template>
    <template v-else>No Image Found</template>
  </b-list-group-item>
</template>

<script>
export default {
  data() {
    return {
      perPage: 12,
      currentPage: 1
    };
  },
  props: { result: Array },
  computed: {
    rows: function() {
      if (this.result) return this.result.length;
      else return 1;
    },
    firstRow: function() {
      return (this.currentPage - 1) * this.perPage;
    }
  }
};
</script>

<style>
</style>
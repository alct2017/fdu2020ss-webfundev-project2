<template>
  <b-card class="my-4" :no-body="Boolean(result)" header="Result" v-if="rows">
    <b-list-group flush v-if="result">
      <template v-for="index in perPage">
        <b-row no-gutters v-if="firstRows+index<=rows" :key="index" class="py-2 px-3 border-bottom">
          <b-col md="4">
            <b-link :to="'/detail/'+result[firstRows+index-1].id">
              <b-card-img
                :src="result[firstRows+index-1].squareMediumPath"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-link>
          </b-col>
          <b-col md="8">
            <b-card-body :title="result[firstRows+index-1].title">
              <b-card-text>{{result[firstRows+index-1].description}}</b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </template>
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
    </b-list-group>
    <b-card-title v-else>No Image Found</b-card-title>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      perPage: 3,
      firstRows: 0
    };
  },
  props: { result: Array },
  computed: {
    rows: function() {
      if (this.result) return this.result.length;
      else return 1;
    }
  },
  watch: {
    currentPage: function() {
      this.firstRows = (this.currentPage - 1) * this.perPage;
    }
  }
};
</script>

<style>
</style>
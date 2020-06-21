<template>
  <div class="py-5">
    <div class="container">
      <b-row>
        <b-col md="3">
          <item-sidebar @filter="getFilterResult"></item-sidebar>
        </b-col>
        <b-col md="9">
          <b-card class="my-4" no-body header="Filter">
            <b-list-group flush>
              <item-filter @filter="getFilterResult"></item-filter>
              <filter-result :result="result"></filter-result>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BrowserFilter from "./BrowserFilter";
import BrowserSidebar from "./BrowserSidebar";
import BrowserFilterResult from "./BrowserFilterResult";
export default {
  data() {
    return {
      result: []
    };
  },
  created() {},
  watch: {},
  methods: {
    getFilterResult(filter) {
      axios
        .get("../api/SearchImage.php", {
          params: filter
        })
        .then(response => {
          this.result = response.data;
        })
        .catch(error => console.log(error));
    }
  },
  components: {
    "item-filter": BrowserFilter,
    "item-sidebar": BrowserSidebar,
    "filter-result": BrowserFilterResult
  }
};
</script>

<style>
</style>
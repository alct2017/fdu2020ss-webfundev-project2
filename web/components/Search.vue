<template>
  <div class="py-5">
    <div class="container">
      <b-card class="my-4" no-body header="Search">
        <b-list-group flush>
          <b-list-group-item>
            <div class="container">
              <b-input-group prepend="Title" class="mb-2">
                <b-form-input placeholder="Search by Title" v-model="title"></b-form-input>
                <b-input-group-append>
                  <b-button variant="outline-success" @click="search('title',title)">Search</b-button>
                </b-input-group-append>
              </b-input-group>
              <b-input-group prepend="Description" class="mb-2">
                <b-form-textarea
                  placeholder="Search by Description"
                  v-model="description"
                  no-resize
                ></b-form-textarea>
                <b-input-group-append>
                  <b-button
                    variant="outline-success"
                    @click="search('description',description)"
                  >Search</b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
          </b-list-group-item>
        </b-list-group>
      </b-card>
      <search-result :result="result"></search-result>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchResult from "./SearchResult";
export default {
  data() {
    return {
      title: null,
      description: null,
      result: []
    };
  },
  components: { "search-result": SearchResult },
  methods: {
    search(type, data) {
      let filter = {};
      filter[type] = data;
      axios
        .get("../api/SearchImage.php", { params: filter })
        .then(response => {
          this.result = response.data;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
</style>
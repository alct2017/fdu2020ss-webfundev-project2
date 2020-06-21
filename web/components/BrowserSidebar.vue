<template>
  <div>
    <b-input-group class="my-4">
      <b-form-input class="rounded-left" placeholder="Search by Title" v-model="title"></b-form-input>
      <b-input-group-append>
        <b-button
          class="rounded-right"
          variant="outline-success"
          @click="filter('title',title)"
        >Search</b-button>
      </b-input-group-append>
    </b-input-group>
    <b-card class="my-4" no-body v-for="(items,type,index) in hotItems" :header="type" :key="index">
      <b-list-group flush>
        <b-list-group-item
          v-for="(item,idx) in items"
          :key="idx"
          @click="filter(type,item)"
          button
        >{{item}}</b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      hotItems: {
        content: [],
        country: [],
        city: []
      }
    };
  },
  created() {
    this.getHotItems();
  },
  methods: {
    getHotItems() {
      for (const item in this.hotItems) {
        axios
          .get("../api/GetHotItems.php", { params: { item: item } })
          .then(response => {
            this.hotItems[item] = response.data;
          })
          .catch(error => console.log(error));
      }
    },
    filter(type, item) {
      let filter = {};
      filter[type] = item;
      this.$emit("filter", filter);
    }
  }
};
</script>

<style>
</style>
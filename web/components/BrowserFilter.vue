<template>
  <b-list-group-item>
    <b-form class="m-0">
      <b-row>
        <b-col col="3" col-md="6" col-sm="12">
          <b-form-select class="mb-2 mr-sm-2 mb-sm-0" v-model="content" :options="contentOptions"></b-form-select>
        </b-col>
        <b-col col="3" col-md="6" col-sm="12">
          <b-form-select class="mb-2 mr-sm-2 mb-sm-0" v-model="country" :options="countryOptions"></b-form-select>
        </b-col>
        <b-col col="3" col-md="6" col-sm="12">
          <b-form-select class="mb-2 mr-sm-2 mb-sm-0" v-model="city" :options="cityOptions"></b-form-select>
        </b-col>
        <b-col col="3" col-md="6" col-sm="12">
          <b-button class="mb-2 mr-sm-2 mb-sm-0" variant="outline-success" @click="filter">Filter</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-list-group-item>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      contentOptions: [],
      countryOptions: [],
      cityOptions: [],
      city: null,
      country: null,
      content: null
    };
  },
  watch: {
    country: function() {
      this.city = null;
      this.cityOptions = [{ value: null, text: "Filter by City" }];
      axios
        .get("../api/GetCityOptions.php", {
          params: {
            country: this.country
          }
        })
        .then(response => {
          response.data.forEach(city => {
            this.cityOptions.push({ value: city, text: city });
          });
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.initContentOptions();
    this.initCountryOptions();
    this.initCityOptions();
  },
  methods: {
    initContentOptions() {
      this.contentOptions = [{ value: null, text: "Filter by Content" }];
      axios
        .get("../api/GetContentOptions.php")
        .then(response => {
          response.data.forEach(content => {
            this.contentOptions.push({ value: content, text: content });
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    initCountryOptions() {
      this.countryOptions = [{ value: null, text: "Filter by Country" }];
      axios
        .get("../api/GetCountryOptions.php")
        .then(response => {
          response.data.forEach(country => {
            this.countryOptions.push({ value: country, text: country });
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    initCityOptions() {
      this.cityOptions = [{ value: null, text: "Filter by City" }];
      axios
        .get("../api/GetCityOptions.php")
        .then(response => {
          response.data.forEach(city => {
            this.cityOptions.push({ value: city, text: city });
          });
        })
        .catch(error => console.log(error));
    },
    filter() {
      let filter = {
        city: this.city,
        country: this.country,
        content: this.content
      };
      this.$emit("filter", filter);
    }
  }
};
</script>

<style>
</style>
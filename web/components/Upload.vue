<template>
  <div class="py-5">
    <div class="container">
      <b-card class="my-4" no-body header="Upload">
        <b-list-group flush>
          <b-list-group-item>
            <div class="container">
              <b-form @submit="upload">
                <b-img fluid :src="fileURL" v-if="fileURL" class="preview mb-2"></b-img>
                <b-row>
                  <b-col lg="6" md="12" sm="12" class="mb-2">
                    <b-input-group prepend="Title">
                      <b-form-input v-model="title" required></b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-col lg="6" md="6" sm="12" class="mb-2">
                    <b-form-file
                      id="fileinput"
                      required
                      v-model="file"
                      :state="Boolean(file)"
                      placeholder="Choose a file or drop it here..."
                      drop-placeholder="Drop file here..."
                      accept="image/jpeg, image/png, image/gif"
                    ></b-form-file>
                  </b-col>
                  <b-col lg="4" md="6" sm="12" class="mb-2">
                    <b-input-group prepend="Country">
                      <b-form-input v-model="country" list="country-list"></b-form-input>
                      <b-form-datalist id="country-list" :options="countryOptions"></b-form-datalist>
                    </b-input-group>
                  </b-col>
                  <b-col lg="4" md="6" sm="12" class="mb-2">
                    <b-input-group prepend="City">
                      <b-form-input v-model="city" list="city-list"></b-form-input>
                      <b-form-datalist id="city-list" :options="cityOptions"></b-form-datalist>
                    </b-input-group>
                  </b-col>
                  <b-col lg="4" md="6" sm="12" class="mb-2">
                    <b-input-group prepend="Content">
                      <b-form-select v-model="content" :options="contentOptions" required></b-form-select>
                    </b-input-group>
                  </b-col>
                </b-row>
                <b-input-group prepend="Description" class="mb-2">
                  <b-form-textarea v-model="description" no-resize></b-form-textarea>
                </b-input-group>
                <b-button type="submit" variant="outline-success">Upload</b-button>
              </b-form>
            </div>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      file: null,
      title: "",
      country: "",
      countryOptions: [],
      city: "",
      cityOptions: [],
      content: "Other",
      contentOptions: [
        "Scenery",
        "City",
        "People",
        "Animal",
        "Building",
        "Wonder",
        "Other"
      ],
      description: ""
    };
  },
  computed: {
    fileURL() {
      return this.file ? window.URL.createObjectURL(this.file) : null;
    },
    isValid() {
      if (this.title && this.file && this.content) {
        if (
          (this.country && !this.countryOptions.length) ||
          (this.city && !this.cityOptions)
        ) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
  },
  watch: {
    country() {
      axios
        .get("../api/GetCountryRecommend.php", {
          params: { country: this.country }
        })
        .then(response => {
          this.countryOptions = response.data;
        })
        .catch(error => console.log(error));
    },
    city() {
      axios
        .get("../api/GetCityRecommend.php", {
          params: { country: this.country, city: this.city }
        })
        .then(response => {
          this.cityOptions = response.data;
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    if (this.$store.getters.isLogin) {
      //
    } else {
      this.$router.push({ name: "login" });
    }
  },
  methods: {
    upload() {
      if (this.isValid) {
        this.$store
          .dispatch("upload", {
            title: this.title,
            description: this.description,
            city: this.city,
            country: this.country,
            content: this.content,
            file: this.file
          })
          .then(id =>
            this.$router.push({
              name: "detail",
              params: { id: id }
            })
          )
          .catch(error => {
            console.log(error);
          });
      } else {
        console.log("Form is not complete");
      }
    }
  }
};
</script>

<style scoped>
.preview {
  display: block;
  margin: auto;
}
</style>
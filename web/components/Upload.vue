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
                      <b-form-input v-model="title"></b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-col lg="6" md="6" sm="12" class="mb-2">
                    <b-form-file
                      id="fileinput"
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
                      <b-form-input v-model="content" list="content-list"></b-form-input>
                      <b-form-datalist id="content-list" :options="contentOptions"></b-form-datalist>
                    </b-input-group>
                  </b-col>
                </b-row>
                <b-input-group prepend="Description" class="mb-2">
                  <b-form-textarea v-model="description" no-resize></b-form-textarea>
                </b-input-group>
                <b-button type="submit">Upload</b-button>
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
      content: "",
      contentOptions: [],
      description: ""
    };
  },
  computed: {
    fileURL() {
      return this.file ? window.URL.createObjectURL(this.file) : null;
    }
  },
  methods: {
    upload() {
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("city", this.city);
      formData.append("country", this.country);
      formData.append("uid", this.$store.getters.getUID);
      formData.append("content", this.content);
      formData.append("file", this.file);
      return new Promise((resolve, reject) => {
        axios
          .post("../api/Upload.php", formData)
          .then(responce => {
            console.log(responce);
            resolve();
          })
          .catch(error => {
            console.log(error);
            reject();
          });
      });
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
<template>
  <div class="py-5">
    <div class="container">
      <b-card class="my-4" :no-body="Boolean(imageList)" header="My Image">
        <b-list-group flush v-if="imageList">
          <template v-for="index in perPage">
            <b-row
              no-gutters
              v-if="firstRows+index<=rows"
              :key="index"
              class="py-2 px-3 border-bottom"
            >
              <b-col md="4">
                <b-link :to="{ name: 'detail', params: { id: imageList[firstRows+index-1].id }}">
                  <b-card-img
                    :src="imageList[firstRows+index-1].squareMediumPath"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-link>
              </b-col>
              <b-col md="8">
                <b-card-body :title="imageList[firstRows+index-1].title">
                  <b-card-text>{{imageList[firstRows+index-1].description}}</b-card-text>
                  <b-button
                    variant="outline-primary"
                    class="mr-2"
                    :to="{name:'upload',params:{imageid:imageList[firstRows+index-1].id}}"
                  >Modify</b-button>
                  <b-button
                    variant="outline-danger"
                    class="mr-2"
                    @click="deleteImage(imageList[firstRows+index-1].id)"
                  >Delete</b-button>
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
        <b-card-title v-else>
          You have no image yet. Go
          <b-link :to="{name:'upload'}">Upload</b-link>!
        </b-card-title>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      currentPage: 1,
      perPage: 3,
      imageList: []
    };
  },
  computed: {
    idList() {
      return this.$store.getters.getImageList;
    },
    firstRows() {
      return (this.currentPage - 1) * this.perPage;
    },
    rows() {
      return this.imageList ? this.imageList.length : 0;
    }
  },
  created() {
    if (this.$store.getters.isLogin) {
      this.getImage();
    } else {
      this.$router.push({ name: "login" });
    }
  },
  methods: {
    getImage() {
      return new Promise((resolve, reject) => {
        axios
          .get("../api/GetImage.php", { params: { list: this.idList } })
          .then(response => {
            this.imageList = response.data;
            resolve();
          })
          .catch(error => reject(error));
      });
    },
    deleteImage(imageid) {
      this.$store
        .dispatch("delete", { imageid: imageid })
        .then(this.getImage)
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
</style>
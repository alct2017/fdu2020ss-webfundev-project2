<template>
  <div class="py-5">
    <div class="container">
      <b-card-group columns>
        <b-card
          :title="image.title"
          :img-src="image.largePath"
          img-top
          tag="article"
          class="mb-4 shadow-sm"
          align-self="stretch"
          v-for="(image,index) in imageList"
          :key="index"
        >
          <b-card-text class="brief">{{image.description}}</b-card-text>
          <b-button-group>
            <b-button variant="outline-primary" :to="{name:'detail',params:{id:image.id}}">View</b-button>
            <b-button
              variant="outline-success"
              :class="{active: isFavor(image.id)}"
              @click="isFavor(image.id)?unlike(image.id):like(image.id)"
            >{{image.favorCount}} Like</b-button>
          </b-button-group>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      idList: [],
      imageList: []
    };
  },
  computed: {
    favorList() {
      return this.$store.getters.getFavorList;
    }
  },
  created() {
    this.getList()
      .then(this.getImage)
      .catch(error => console.log(error));
  },
  methods: {
    getList() {
      return new Promise((resolve, reject) => {
        axios
          .get("../api/GetHomeList.php")
          .then(response => {
            this.idList = response.data;
            resolve();
          })
          .catch(error => reject(error));
      });
    },
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
    isFavor(id) {
      return this.favorList.includes(id + "");
    },
    like(imageid) {
      if (this.$store.getters.isLogin) {
        this.$store
          .dispatch("like", { imageid: imageid })
          .then(this.getImage)
          .catch(error => console.log(error));
      } else {
        this.$router.push({ name: "login" });
      }
    },
    unlike(imageid) {
      this.$store
        .dispatch("unlike", { imageid: imageid })
        .then(this.getImage)
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
.brief {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
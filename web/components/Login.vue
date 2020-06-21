<template>
  <div class="body">
    <div class="login-form">
      <b-form @submit="login">
        <b-form-group label="Email:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>

        <b-form-checkbox v-model="form.remember">Remember Me</b-form-checkbox>
        <b-button block variant="outline-success" type="submit">Login</b-button>
      </b-form>
      <b-link :to="{name:'signup'}">Sign up</b-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        remember: false
      }
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", this.form)
        .then(() => {
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.body {
  min-height: 100%;
  display: flex;
}
.login-form {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}
</style>
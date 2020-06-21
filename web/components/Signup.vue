<template>
  <div class="body">
    <div class="login-form">
      <div class="text-center mb-4">
        <p>Sign up for</p>
        <b-link :to="{name:'home'}">
          <h3>Hello,World!</h3>
        </b-link>
      </div>
      <b-form @submit="signup">
        <b-form-group label="Email:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            required
            :state="isValidEmail"
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Username:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="username"
            type="text"
            required
            :state="isValidUsername"
            placeholder="Enter username"
          ></b-form-input>
          <b-form-text>Username only consist of numbers, letters, underscores(_) and dashes(-). Make sure it's at least 5 characters.</b-form-text>
        </b-form-group>
        <b-form-group label="Password:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="password"
            type="password"
            required
            :state="isValidPassword"
            placeholder="Enter password"
          ></b-form-input>
          <b-form-text>Make sure it's at least 15 characters.</b-form-text>
        </b-form-group>
        <b-form-group label="Password Again:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="passwordCheck"
            type="password"
            required
            :state="isValidPasswordCheck"
            placeholder="Repeat password"
          ></b-form-input>
        </b-form-group>
        <b-button block variant="outline-success" type="submit">Sign up</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      isValidEmail: null,
      username: "",
      isValidUsername: null,
      password: "",
      isValidPassword: null,
      passwordCheck: "",
      isValidPasswordCheck: null
    };
  },
  watch: {
    email() {
      this.checkEmail();
    },
    username() {
      this.checkUsername();
    },
    password() {
      this.checkPassword();
    },
    passwordCheck() {
      this.checkPasswordCheck();
    }
  },
  methods: {
    signup() {
      if (
        this.isValidEmail &&
        this.isValidUsername &&
        this.isValidPassword &&
        this.isValidPasswordCheck
      ) {
        this.$store
          .dispatch("signup", {
            email: this.email,
            username: this.username,
            password: this.password
          })
          .then(() => {
            this.$router.push({ name: "home" });
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    checkEmail() {
      const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.isValidEmail = emailReg.test(this.email);
    },
    checkUsername() {
      const usernameReg = /^[a-z][a-z0-9-_]{5,17}$/i;
      this.isValidUsername = usernameReg.test(this.username);
    },
    checkPassword() {
      const passwordReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]{8,32}$/i;
      this.isValidPassword = passwordReg.test(this.password);
    },
    checkPasswordCheck() {
      this.isValidPasswordCheck = this.password == this.passwordCheck;
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
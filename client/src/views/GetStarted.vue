<template>
  <div class="container">
    <div class="login">
      <h1>Login</h1>
      <form action @keyup.enter="logMeIn">
        E-mail:
        <input type="text" v-model="newLogin.email" placeholder="Your E-mail" />
        <br />Password:
        <input type="password" v-model="newLogin.password" placeholder="password" />
      </form>
      <br />
      <button @click="logMeIn">Log In</button>
      <p v-if="loginError">{{status}}</p>

      <p>Tip: If you are here for just testing the application, you can use the guest account which is already populated with test-data</p>
      <p>email: guest@guest.com</p>
      <p>password: guest1</p>
    </div>

    <div>
      <h1>Sign up</h1>
      <form action>
        <input type="text" v-model="newSignup.name" placeholder="Your username" />
        <br />
        <input type="text" v-model="newSignup.email" placeholder="Your E-mail" />
        <br />
        <input type="password" v-model="newSignup.password" placeholder="password" />
      </form>
      <button @click="signMeUp">Sign Up</button>
    </div>
    <p v-if="signUpError">{{status}}</p>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import router from "../router";

export default {
  data() {
    return {
      newLogin: {
        email: "",
        password: ""
      },
      newSignup: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["login", "signup"]),
    logMeIn() {
      this.login(this.newLogin);
    },
    signMeUp() {
      this.signup(this.newSignup);
    }
  },
  computed: {
    ...mapState(["status", "signUpError", "loginError"])
  }
};
</script>
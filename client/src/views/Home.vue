<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Home Page for Deutsch App</h1>
    <h2>Welcome to the Deutsch Wörterbuch App!</h2>
    <h3>This is a project by Berk Özzambak as an intersection of his Software Development learning journey with his German learning one.</h3>
    <div v-if="status != 'not logged in'">
      <router-link to="/dashboard">
        <button>Go to Dashboard</button>
      </router-link>
    </div>
    <div v-else>
      <router-link to="/get-started">
        <button>Get Started</button>
      </router-link>
    </div>

    <p>Your login status: {{status}}</p>
    <button @click="logOut" v-if="status == 'Logged In'">Log Out</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";

export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logOut"])
  },
  computed: {
    ...mapState(["status"])
  },
  created() {
    document.addEventListener("beforeunload", this.logOut);
  }
};
</script>

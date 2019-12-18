<template>
  <div class="menu">
    <router-link to="/dashboard" class="menu-item">
      <p class="r-link">Dashboard</p>
    </router-link>
    <router-link to="/execise" class="menu-item">
      <p class="r-link">Exercise</p>
    </router-link>
    <router-link to="/edit-words" class="menu-item">
      <p class="r-link">Notebooks</p>
    </router-link>
    <router-link to class="menu-item">
      <p class="r-link">Profile</p>
    </router-link>
    <router-link to class="menu-item">
      <p class="r-link">Settings</p>
    </router-link>
    <div class="menu-item" @click="logOut">
      <p class="r-link">Logout</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import router from "../../src/router";
import sideMenu from "./SideMenu";

export default {
  data() {
    return {
      showSide: false,
      closing: false
    };
  },
  methods: {
    ...mapActions(["logOut"])
  },
  computed: {
    ...mapState([
      "status",
      "user",
      "signUpError",
      "loginError",
      "componentSignup"
    ])
  }
};
</script>

<style lang="scss">
.menu {
  width: 35vh;
  height: 63vh;
  float: right;
  margin-top: 2rem;
  background-color: #000103;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  &-item {
    color: white;
    font-family: Raleway;
    font-size: 1.2rem;
    width: 100%;
    height: 3.5rem;
    padding: 0.5rem;
    text-decoration: none;
    &:nth-child(1) {
      margin-top: 1rem;
    }
    &:hover {
      background-color: rgba(255, 221, 0, 0.9);

      .r-link {
        color: #000103;
        font-weight: bolder;
      }

      cursor: pointer;
    }

    .r-link {
      color: white;
      text-decoration: none;
      margin-top: 1rem;
      margin-left: 4.5rem;
    }
  }
}
</style>
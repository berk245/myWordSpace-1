<template>
  <div class="navbar">
    <p class="title-right">my word space</p>
    <p class="user-icon" @click="showSidemenu">
      <!-- <span class="initial">{{user.name[0]}}</span> -->
      <img class="menuImage" src="../assets/images/BackButton.png" alt="Back Button" />
    </p>
    <sideMenu v-bind:class="{showIt: !closing, hideIt: closing}" v-if="showSide"></sideMenu>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import router from "../router";
import sideMenu from "./SideMenu";

export default {
  data() {
    return {
      showSide: false,
      closing: false
    };
  },
  methods: {
    showSidemenu() {
      if (!this.showSide) {
        this.showSide = true;
      } else {
        this.closing = true;
        setTimeout(() => {
          this.showSide = false;
          this.closing = false;
        }, 900);
      }
    },
    takeMeBack() {
      this.$router.push("/dashboard");
    }
  },
  computed: {
    ...mapState([
      "status",
      "user",
      "signUpError",
      "loginError",
      "componentSignup"
    ])
  },
  components: {
    sideMenu
  }
};
</script>

<style lang="scss">
.navbar {
  position: fixed;
  height: 2.5rem;
  background-color: #000103;
  width: 100%;
  z-index: 8;
  .user-icon {
    position: absolute;
    left: 97%;
    top: 2.5%;
    transform: rotate(-90deg);
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    img {
      width: 1.9rem;
      height: 1.9rem;
    }
  }
  .title-right {
    color: #ffce00;
    font-family: Dosis;
    font-size: 1.7rem;
    position: absolute;
    left: 86%;
  }
  // .user-icon {
  //   text-align: center;
  //   font-weight: bolder;
  //   padding: 0.15rem;
  //   background-color: #ffce00;
  //   border-radius: 50%;
  //   width: 1.7%;
  //   height: 1.7rem;
  //   align-self: center;
  //   margin-top: 0.2rem;
  //   position: absolute;
  //   left: 97%;

  //   .initial {
  //     color: #000103;
  //     text-transform: capitalize;
  //     font-family: Dosis;
  //     font-size: 1.4rem;
  //     position: relative;

  //     top: -0%;
  //   }
  //   &:hover {
  //     background-color: #d9edf6;
  //     cursor: pointer;
  //     .initial {
  //       color: #000103;
  //     }
  //   }
  // }
}

.menu {
  z-index: 0;
  &-item {
    z-index: 0;
  }
  &-item {
    z-index: 0;
    .r-link {
      z-index: 0;
    }
  }

  &.hideIt {
    z-index: 0;
    pointer-events: none;
    animation: easeOut 1s;
  }

  &.showIt {
    z-index: 10;
    animation: easeIn 2s;
  }
}

@keyframes easeIn {
  0% {
    margin-top: -50vh;
    pointer-events: none;
  }

  40% {
    margin-top: 2rem;
  }
  100% {
    pointer-events: all;
  }
}
@keyframes easeOut {
  0% {
    margin-top: 2rem;
  }
  100% {
    margin-top: -60vh;
  }
}
</style>
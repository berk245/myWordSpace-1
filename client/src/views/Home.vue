<template>
  <div class="home">
    <div class="bg">
      <div class="bg-stars"></div>
      <div class="bg-moon"></div>
      <div class="bg-spaceship"></div>
      <div class="bg-earth"></div>
      <div class="bg-planet"></div>
      <div class="title">
        <h1 class="main-title">my word space</h1>
        <div class="about-product">
          <p class="first">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit
            ratione beatae perspiciatis sit culpa, suscipit assumenda accusamus
            dolor delectus?
          </p>
          <p class="second">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            voluptatum quia quisquam facilis quos numquam?
          </p>
          <div class="get-started">
            <button>
              <router-link to="/dashboard" v-if="status != 'not logged in'">
                <p class="buttonz">Go to Dashboard</p>
              </router-link>

              <router-link v-else to="/get-started">
                <p class="buttonz">Get Started</p>
              </router-link>
            </button>
            <!-- <div class="buttonz" v-if="status != 'not logged in'">
              <router-link to="/dashboard">
                <button>Go to Dashboard</button>
              </router-link>
            </div>
            <div class="buttonz" v-else>
              <router-link to="/get-started">
                <button>Get Started</button>
              </router-link>
            </div>-->
          </div>
        </div>
      </div>
    </div>
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
<style lang="scss">
.bg {
  width: 100%;
  height: 100%;
  position: relative;
  &-stars {
    position: absolute;
    width: 964px;
    height: 784px;
    left: 60vw;
    top: -15vh;
    background-image: url("../assets/images/backgrounds/Stars3.png");
    background-repeat: no-repeat;
  }
  &-moon {
    position: absolute;
    width: 135px;
    height: 120px;
    top: 5vh;
    left: 5vw;
    background-image: url("../assets/images/backgrounds/Moon.png");
  }
  &-spaceship {
    position: absolute;
    width: 50px;
    height: 54.13px;
    top: 50vh;
    left: 25vw;
    background-image: url("../assets/images/backgrounds/Spaceship.png");
  }
  &-earth {
    position: absolute;
    width: 500vw;
    height: 400vh;
    left: -110vw;
    top: 43vh;
    background-image: url("../assets/images/backgrounds/EarthBigg.png");
    background-repeat: no-repeat;
    z-index: 5;
  }

  &-planet {
    position: absolute;
    width: 226px;
    height: 129px;
    left: 90vw;
    top: 85vh;
    background-image: url("../assets/images/backgrounds/Planet.png");
  }
}
.title {
  position: absolute;
  width: 70%;
  height: 90px;
  left: 20vw;
  .main-title {
    font-family: Dosis;
    font-style: normal;
    font-weight: bold;
    font-size: 6rem;
    line-height: 190px;
    float: right;
    color: #ffce00;
  }
  .about-product {
    position: absolute;
    top: 25vh;
    left: 15%;
    width: 85%;

    .first,
    .second {
      font-family: Raleway;
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 2.7rem;
      text-align: right;

      color: #d9edf6;
    }
    .second {
      font-size: 1.1rem;

      margin-top: 0.4rem;
      line-height: 2.1rem;
    }
    .get-started {
      button {
        left: 75%;
        top: 130%;
        position: absolute;
        width: 15vw;
        height: 6vh;
        background: #000c36;
        border: 3px solid #ffce00;
        box-sizing: border-box;
        border-radius: 10px;
        font-family: Raleway;
        font-style: normal;
        font-weight: 400;
        font-size: 1.3rem;

        color: #d9edf6;
        z-index: 6;
        &:hover {
          background-color: #ffce00;
          border: 3px solid #000c36;
          font-weight: 1000;
          a {
            text-decoration: none;
            color: #000c36;
          }
        }
        a {
          text-decoration: none;
          color: #d9edf6;
        }
      }
    }
  }
}
</style>

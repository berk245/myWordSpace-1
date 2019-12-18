<template>
  <div class="container">
    <navbar></navbar>
    <div class="bg">
      <div class="bg-stars"></div>
      <div class="bg-moon"></div>
      <div class="bg-planet"></div>
      <div class="title"></div>
    </div>
    <div class="box box-top">
      <div v-if="user.firstTime">
        <h2 class="text title-welcome">Welcome aboard {{ user.username }}!</h2>
        <p class="text welcome-text">
          This is your dashboard. You can create ‘Wordbooks’, add
          new words and practice the words you have added. You
          can use the button on with to navigate in your space anytime!
        </p>
      </div>
      <div v-else>
        <h2 class="text title-text">Welcome back {{ user.username }}!</h2>
        <p
          class="text box-text"
        >Last time you were here was {{ user.lastLogin }}. Create notebooks, add words and practice. Are you ready to get to work?</p>
      </div>
    </div>
    <div class="box box-exercise">
      <div class="chart">This is the Chart Section</div>
      <div class="stats">Here are some statistics</div>
      <div class="goPractice">
        <button class="p-button">Exercise!</button>
      </div>
    </div>
    <div class="box box-books"></div>
    <div class="box box-words"></div>
  </div>

  <!-- <div>
    <div>
      <div v-if="firstTime">
        <h2>Welcome {{user.username}}</h2>
        <br />
        <h3>It's your first time here! How exciting</h3>
        <br />
        <h4>You can start by adding new words to your database to practice them later. Viel Erfolg!!</h4>
      </div>
      <div v-if="user.username == 'guest'">
        <h2>Welcome {{user.username}}</h2>
        <br />
        <h3>You can add words / start exercising / see & edit the words you have added!</h3>
        <br />
        <h4>Are you ready to practice?</h4>
      </div>
      <div v-else>
        <h2>Welcome {{user.username}}</h2>
        <br />
        <h3>Nice to have you back here! You can add new words / start exercising / see the words you have added!</h3>
        <br />
        <h4>Are you ready to practice?</h4>
      </div>
    </div>
    <div id="nav">
      <router-link to="/add-words">
        <img class="dashImg" :src="addImage" alt="Add Words" />
      </router-link>
      <router-link to="/exercise">
        <img class="dashImg" :src="practiceImage" alt="Add Words" />
      </router-link>
      <router-link to="/edit-words">
        <img class="dashImg" :src="editImage" alt="Edit Words" />
      </router-link>
    </div>
    <button @click="logOut">Log Out</button>
  </div>-->
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import router from "../router";
import Login from "../components/Login";
import Signup from "../components/SignUp";
import Navbar from "../components/Navbar";

export default {
  data() {
    return {};
  },
  components: {
    Login,
    Signup,
    Navbar
  },
  methods: {
    ...mapActions(["login", "signup"])
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
<style scoped lang="scss">
.bg {
  &-moon {
    top: 5rem;
    left: 2vw;
  }
}
.box {
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid #00e7ff;
  box-sizing: border-box;
  border-radius: 10px;
  left: 13%;
  &-top {
    position: relative;
    top: 12vh;
    width: 73%;
    height: 15vh;
  }
  &-exercise {
    position: relative;
    width: 45%;
    height: 35vh;
    top: 15vh;
    display: grid;
    grid-template-areas:
      "chart chart stats stats"
      "chart chart stats stats"
      "chart chart stats stats"
      "chart chart stats stats"
      "chart chart stats stats"
      "chart chart stats stats"
      "chart chart stats stats"
      "goPractice goPractice goPractice goPractice";
    .chart {
      grid-area: chart;
    }
    .stats {
      grid-area: stats;
    }
    .goPractice {
      grid-area: goPractice;
      top: 60%;
      left: 80%;
      .p-button {
        width: 100%;
        height: 100%;
        background-color: #000103;
        border-radius: 0 0 10px 10px;
        border: solid 1px #00e7ff;
        font-family: Dosis;
        font-size: 1.4rem;
        color: white;
        &:hover {
          background-color: #ffce00;
        }
      }
    }
  }

  &-books {
    position: relative;
    width: 45%;
    height: 25vh;
    top: 18vh;
  }
  &-words {
    position: absolute;
    width: 26.5vw;
    height: 63vh;
    top: 30vh;
    left: 59.5%;
  }
}

.text {
  font-family: Raleway;
  margin-left: 1rem;
}
.title-text {
  font-family: Dosis;
  margin-top: 0.5rem;
  font-size: 1.7rem;
}
.box-text {
  font-size: 1.1rem;
  margin-top: 0.7rem;
  font-weight: 500;
}
.welcome {
  margin-top: 0.5rem;
}
.welcome-text {
  font-size: 1rem;
  margin-top: 0.5rem;
}
.title-welcome {
  font-family: Dosis;
  font-size: 1.5rem;
  margin-top: 0.2rem;
}
</style>

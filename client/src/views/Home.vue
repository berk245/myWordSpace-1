<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1> Home Page for Deutsch App</h1>
    <h2>Welcome to the Deutsch Wörterbuch App!</h2>
    <h3>This is a project by Berk Özzambak as an intersection of his Software Development learning journey with his German learning one.</h3>
    <router-link to="/get-started">
      <button> Get Started </button>
    </router-link>    
    
    <p> Your login status: {{status}} </p>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from "vuex"

export default {
  name: 'home',
  data(){
    return{
      
    }
  },
  methods:{
    
  },
  computed:{
    ...mapState(['status']),
  },
  created(){
    localStorage.clear();
  }
}
</script>

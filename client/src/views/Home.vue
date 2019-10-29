<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1> Home Page for Deutsch App</h1>
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
  computed:{
    ...mapState(['status']),
  },
  created(){
    localStorage.clear();
  }
}
</script>

<template>
  <div>
      
      <div>
        <div v-if="firstTime">
          <h2>Welcome {{user.username}} </h2>
          <br>
          <h3>It's your first time here! How exciting</h3>
          <br>
          <h4> You can start by adding new words to your database to practice them later. Viel Erfolg!!</h4>
        </div>
        <div v-if="!firstTime">
          <h2>Welcome {{user.username}} </h2>
          <br>
          <h3>Nice to have you back here!</h3>
          <br>
          <h4> Are you ready to practice?</h4>
        </div>
      </div>
      <div id="nav">
        <router-link to="/add-words">
          <img class="dashImg" :src="addImage" alt="Add Words" >
        </router-link> 
        <router-link to="/exercise">
          <img class="dashImg" :src="practiceImage" alt="Add Words">
        </router-link> 
        <router-link to="/edit-words">
          <img class="dashImg" :src="editImage" alt="Edit Words">
        </router-link> 
      </div>
      <button @click="logOut"> Log Out </button>
      
  </div>

  
  
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Dashboard',
    data(){
      return{
        addImage: require('@/assets/images/add.jpg'),
        practiceImage: require('@/assets/images/exercise.png'),
        editImage: require('@/assets/images/edit.png')
      }
    },
    methods:{
      ...mapActions(['logOut']),
    },
    computed:{
      ...mapState(['status', 'user', 'firstTime'])
    }
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.dashImg{
  width: 30vw;
  height: 20vh;
  margin: 20px;
  border: .2px solid #42b983;
}
</style>

</style>
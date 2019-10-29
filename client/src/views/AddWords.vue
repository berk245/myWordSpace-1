<template>
  <div class="container">
      <h1>The Page to Add Words</h1>
      <br>
      <form>
          <select name="typeSelector" v-model="userInput.type">
            <option value="noun"> Noun </option>
            <option value="verb"> Verb</option>
            <option value="sentence"> Sentence or Phrase</option>
          </select>
          <br>
          <input type="text" v-model="userInput.german" placeholder="German Word/ mit Artikel">
          <br>
          <input type="text" v-model="userInput.english" placeholder="English Translation">
          <br>
          
      </form>
      <input type="submit" @click="addMe">
      
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name:'addWords',
    data(){
        return{
            userInput:{
                german:'',
                english: '',
                type:''
            }
        }
    },
    methods:{
        ...mapActions(['addWords']),
        addMe(){
            this.addWords(this.userInput)
        }

    },


}
</script>

<style>

</style>
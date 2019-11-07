<template>
  <div class="container">
      <h1>Add Words</h1>
      <h2>Please enter the type and German & English spellings of the word you want to add</h2>
      <br>
      <form>
          <select name="typeSelector" v-model="userInput.type" placeholder="Select Type">
            <option value="noun"> Noun </option>
            <option value="verb"> Verb</option>
            <option value="adjective"> Adjective</option>
            <option value="preposition"> Preposition</option>
            <option value="sentence"> Sentence or Phrase</option>
          </select>
          <br>
          <input type="text" v-model="userInput.german" placeholder="German Word/ mit Artikel">
          <br>
          <input type="text" v-model="userInput.english" placeholder="English Translation">
          <br>
          
      </form>
      <input type="submit" @click="addMe">
      <p v-if="addSuccess"> {{ user.words[0].german}} added to database succesfuly.</p>
      <p v-if="user.username == 'guest'"> The Guest account wordlist will be resetted frequently</p>
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
            },
            addSuccess: false,
        }
    },
    methods:{
        ...mapActions(['addWords']),
        addMe(){
            this.addWords(this.userInput);
            var self = this;
            setTimeout(() => { self.addSuccess = true }, 1000)      
            setTimeout(() => { self.addSuccess = false }, 3000)  
        }

    },
    computed:{
        ...mapState(['user','functionsStatus'])
    }


}
</script>

<style>

</style>
<template>
  <div>
      <h1> Exercise Page </h1>
      <input type="number" value="How many words do you want to see?" v-model="exerciseData.amount">
      <select name="typeSelector" v-model="exerciseData.type">
        <option value="noun"> Noun </option>
        <option value="verb"> Verb </option>
        <option value="sentence"> Sentence or Phrase </option>
        <option value="random"> Random </option>
      </select>
      <br>
      <button @click="beginExercise"> Start the Show</button>
      <p v-if="inputError"> {{ message }}</p>

      <div>
        <hr>
        <br><br>
        
        <div class="question" v-for="(question, index) in exerciseQuestions" :key="question.id">
            <p> {{ question.english }} </p>
            <input type="text" placeholder="Deutsch Übersetzung" v-model="userAnswers[index]" :class="{correct : userAnswers[index] == question.german}">    
        </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'Exercise',
    data(){
      return{
        exerciseData:{
          amount: 0,
          type: ''
        },
        inputError: false,
        message: '',
        exerciseQuestions: [],
        userAnswers: []

      }
    },
    methods:{
      randomNumberGen(range){
        let randomNumber = Math.floor(Math.random()*Math.floor(range));
        return randomNumber;
      },
      beginExercise(){
        const savedWordsLength = this.user.words.length;
        this.inputError = false;
        this.message = '';
        this.exerciseQuestions = [];
        //Check if the amount is more than the number of words or type
        if(this.exerciseData.type == 'random'){
          if( savedWordsLength < this.exerciseData.amount){
          this.inputError = true,
          this.message = 'You want to practice more words than you have in your database. Want to add more words? Currently you have' + 
              savedWordsLength + ' words in your DB.'}
          else{
            for(let i = 0; i < this.exerciseData.amount; i++){
              this.userAnswers.push('');
            }
            //Define a set to put random indexes in
            let indexSet = new Set([]);
            //Until the exercise amount is reached, fill it with random indexes ranged till filtered array length
            let range = this.user.words.length;
            
            while(this.exerciseData.amount > indexSet.size){
              let randomInt = this.randomNumberGen(range-1)
              indexSet.add(randomInt)
            }
            //Turn the set into an array
            let indexes = Array.from(indexSet.values())

            //Iterate through each index, get that indexed element from filteredArray, assign it to questions array
            for(let i = 0; i < indexes.length; i++){
              this.exerciseQuestions.push(this.user.words[indexes[i]])
            }
            
          }


        }
        else if(this.exerciseData.type != 'random'){
          //array filter 
          const chosenType = this.exerciseData.type;
          let filteredArray = [];
          for(let i = 0; i < savedWordsLength; i++){
            if(this.user.words[i].type == chosenType){
              filteredArray.push(this.user.words[i])
            }
          }
          if(filteredArray.length < this.exerciseData.amount){
            this.inputError = true,
            this.message = 'You want to practice more words than you have in your database. Want to add more words? Currently you have ' + filteredArray.length + ' ' + chosenType +'(s) in your DB.'
          }
          else{
            //Populate userAnswers array to add answers later
            for(let i = 0; i < this.exerciseData.amount; i++){
              this.userAnswers.push('');
            }
            //Define a set to put random indexes in
            let indexSet = new Set([]);
            //Until the exercise amount is reached, fill it with random indexes ranged till filtered array length
            let range = filteredArray.length;
            
            while(this.exerciseData.amount > indexSet.size){
              let randomInt = this.randomNumberGen(range-1)
              indexSet.add(randomInt)
            }
            //Turn the set into an array
            let indexes = Array.from(indexSet.values())

            //Iterate through each index, get that indexed element from filteredArray, assign it to questions array
            for(let i = 0; i < indexes.length; i++){
              this.exerciseQuestions.push(filteredArray[indexes[i]])
            }

          }
        }
      }
    },
    computed:{
      ...mapState(['user'])
    }
}
</script>

<style>

.correct{
  border: 4px solid green;
}

</style>
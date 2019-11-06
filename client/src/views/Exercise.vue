<template>
  <div>
      <h1> Exercise Page </h1>
      <h2>Choose the amount and type of words you want to practice now!</h2>
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
      <p v-if="user.username == 'guest'"> If you have not added more, the guest database has 300 hundred entries, 100 for each word type.
        The correct answer is the number next to the word.Ex: noun44 = 44 </p>

      <div>
        <hr>
        <br><br>
        <div v-if="exerciseDone">
          <p>Your Score: {{userScore}} / {{exerciseQuestions.length}}</p>
          <div v-if="!allCorrect">
            <p>Here are the exercises you missed this time!</p>
            <div v-for="(data, index) in wrongAnswers" :key="index">
              {{data.german}} - {{data.english}}
            </div>
          </div>
        </div>
        <div class="question" v-for="(question, index) in exerciseQuestions" :key="question.id">
            <p> {{ question.english }} </p>
            <input type="text" placeholder="Deutsch Übersetzung" v-model="userAnswers[index]" :class="{correct : userAnswers[index] == question.german}">    
        </div>
        <button v-if="exerciseStarted" @click="checkAnswers"> Done! </button>
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
        userAnswers: [],
        wrongAnswers: [],
        exerciseStarted: false,
        exerciseDone: false,
        allCorrect: true,
        userScore: 0
      }
    },
    methods:{
      randomNumberGen(range){
        let randomNumber = Math.floor(Math.random()*Math.floor(range));
        return randomNumber;
      },
      beginExercise(){
        this.exerciseStarted = true;
        const savedWordsLength = this.user.words.length;
        this.inputError = false;
        this.message = '';
        this.exerciseQuestions = [];
        this.userAnswers = [];
        this.wrongAnswers = [];
        this.exerciseDone = false;
        this.userScore = 0;
        this.allCorrect = true;
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
      },
      checkAnswers(){
        for(let i = 0; i < this.exerciseQuestions.length; i++){
          if(this.exerciseQuestions[i].german != this.userAnswers[i]){
            this.wrongAnswers.push(this.exerciseQuestions[i]);
            this.allCorrect = false;
          }
        }
        this.exerciseDone = true;
        if(this.allCorrect == true){
          this.userScore = this.exerciseQuestions.length
        }
        else{
          this.userScore = (this.exerciseQuestions.length) - this.wrongAnswers.length
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
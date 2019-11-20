<template>
    <div class="container">
        <h1> See / Update / Delete the Words</h1> 
        <div class="wordBox" v-for="(word,index) in user.words" :key="index">
                <p class="boxData"> {{word.german}}</p> |
                <p class="boxData"> {{word.english}} </p> |
                <p class="boxData"> {{word.type}} </p>
                <button @click="updateReq(index)"> Edit </button>
                
                
                <div class="editPart" v-if="toUpdate && updateIndex == index">
                    <form>
                        <select name="typeSelector" v-model="updatedWord.type" >
                            <option value="" selected disabled hidden>{{user.words[updateIndex].type}} </option>
                            <option value="noun"> Noun </option>
                            <option value="verb"> Verb</option>
                            <option value="adjective"> Adjective</option>
                            <option value="preposition"> Preposition</option>
                            <option value="sentence"> Sentence or Phrase</option>
                        </select>
                        <br>
                        <input type="text" id="updateGerman" v-model="updatedWord.german" :placeholder="word.german">
                        <br>
                        <input type="text" id="updateEnglish" v-model="updatedWord.english" :placeholder="word.english">
                        <br>
                </form>
                <button @click="updateMe"> Update </button>

                </div>   
                <button class="boxButton" @click="deleteWord(index)">X</button>   
        </div>
        
            
    </div>
    
  
</template>

<script>
import {mapState, mapActions} from 'vuex';
import vuePaginate from 'vue-paginate';

export default {
    name: 'AllWords',
    data(){
        return{
            editImage: require('@/assets/images/edit.png'),
            page: 0,
            range: 10,
            toUpdate: false,
            updateIndex: 0,
            updatedWord:{
                german: '',
                english: '',
                type: ''
            }
               
        }
    },
    methods:{
       ...mapActions(['deleteWord', 'updateWord']),
       deleteMe(ind){
           this.deleteWord(ind);
       },
       updateReq(ind){
           this.toUpdate = !this.toUpdate;
           this.updateIndex = ind;         
       },
       updateMe(){
           if(this.updatedWord.type == ''){
               this.updatedWord.type = this.user.words[this.updateIndex].type;
           }
           if(this.updatedWord.german == ''){
               this.updatedWord.german = this.user.words[this.updateIndex].german;
           }
           if(this.updatedWord.english == ''){
               this.updatedWord.english = this.user.words[this.updateIndex].english;
           }
           this.updateWord({index: this.updateIndex, newWord: this.updatedWord});
           setTimeout(() => {
               this.toUpdate = false;
           }, 300);
       }
    },
    computed:{
        ...mapState(['user']),
        
    }
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;


}
.wordBox{
    order: 2;
    display:flex;
    border: 1px solid black;
    width: 90vw;
    
}

p{
    flex-grow: 2
}
.editPart{
    flex-grow: 2
}
button{
    flex-shrink: 0.5;
    background-color: rgba(204, 85, 30, 0.809);
    color: beige;
    font-weight: bold;

}


</style>
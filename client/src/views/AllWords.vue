<template>
    <div class="container">
        <h1> See / Update / Delete the Words</h1> 
        
        <div class="wordBox" v-for="(word,index) in user.words" :key="index">
                <p class="boxData"> {{word.german}}</p>
                <p class="boxData"> {{word.english}} </p>
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
               
        }
    },
    methods:{
       ...mapActions(['deleteWord']),
       deleteMe(ind){
           this.deleteWord(ind);
       },
       pageUp(){
           if((this.range * this.page)  < this.user.words.length){
               this.page++;
               this.range += 10;
               this.$forceUpdate();
           }
       },
       pageDown(){
           if(this.page != 0){
               this.page--;
               this.range -= 10;
           }
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
    width: 40vw;
    
}

p{
    flex-grow: 2
}
button{
    flex-shrink: 0.5;
    background-color: rgba(204, 85, 30, 0.809);
    color: beige;
    font-weight: bold;

}


</style>
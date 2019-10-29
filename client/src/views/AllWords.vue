<template>
    <div class="container">
        <h1> See / Update / Delete the Words</h1>
        <paginate
            :page-count="5"
            :page-range="3"
            :margin-pages="2"
            prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'">
        </paginate> 
        <div class="wordBox" v-for="(word,index) in user.words" :key="index">
            <p> {{word.german}} -- {{word.english}} </p> <button>X</button>      
        </div>
    </div>
  
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: 'AllWords',
    data(){
        return{
            editImage: require('@/assets/images/edit.png'),
            
        }
    },
    methods:{
       
    },
    computed:{
        ...mapState(['user'])
    }
}
</script>

<style>

</style>
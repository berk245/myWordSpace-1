<template>
    <div class="container">
        <div class="login">
            <h1>Log-in Section</h1>
            <form action="">
                <input type="text" v-model="newLogin.email" placeholder="Your E-mail">
                <input type="password" v-model="newLogin.password" placeholder="password" >
            </form>
            <button @click="logMeIn"> Log In</button>

            <br>
            <br>
            <hr>

            <div>
                <form action="">
                    <input type="text" v-model="newSignup.name" placeholder="Your name"><br>
                    <input type="text" v-model="newSignup.email" placeholder="Your E-mail"><br>
                    <input type="password" v-model="newSignup.password" placeholder="password" >
                </form>
            <button @click="signMeUp"> Sign Up </button>
            </div>
            <p v-if='signUpError'> {{status}} </p>
        </div>

    </div>
</template>

<script>
    import {mapState, mapActions , mapGetters} from 'vuex'
    import router from '../router'

    export default{
        data(){
            return{
                newLogin:{
                    email: '',
                    password: ''
                },
                newSignup:{
                    name: '',
                    email: '',
                    password: ''
                },
                
            }
        },
        methods:{
            ...mapActions(['login', 'signup']),
            logMeIn(){    
                this.login(this.newLogin);
            },
            signMeUp(){
                this.signup(this.newSignup);
            }


        },
        computed:{
            ...mapState(['status','signUpError']),
            
            
        }
    }

</script>
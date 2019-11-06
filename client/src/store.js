import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { request } from 'http'
import router from './router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: localStorage.getItem('user-status') || 'not logged in',
    signUpError: false,
    loginError: false,
    token: localStorage.getItem('auth-token') || '',
    user: {
      userID: '',
      username: '',
      email: '',
      firstTime: false,
      loggedIn: false,
      words: []
    } // _id & email & name & password
  },
  getters:{
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },
  mutations: {
    auth_request(state){
      state.status = 'Loading'
    },
    auth_success(state, {header, user}){
      state.status = 'Logged In',
      state.usermessage = "Logout"
      state.token = header.token,
      state.user.username = user.name,
      state.user.userID = user._id,
      state.user.email = user.email,
      state.user.words = user.words,
      state.user.loggedIn = true,
      localStorage.setItem('auth-token', header.token)
      localStorage.setItem('user', user) 
      localStorage.setItem('user-status',  state.status) 
    },
    auth_error(state){
      state.status = 'Error'
    },
    signup_request(state){
      state.signUpError = false,
      state.status = 'Trying to sign up'
    },
    signup_success(state){
      state.status = 'Sign-up Successful, logging you in now...'
      state.firstTime = true
    },
    signup_error(state, error){
      state.status = error
    },
    incorrect_values(state, errorMessage){
      state.status = errorMessage,
      state.signUpError = true
    },
    incorrect_info(state, errorMessage){
      state.status = errorMessage,
      state.loginError = true
    },
    logout_success(state){
      state.status = 'not logged in'
      state.user.loggedIn = false
      state.firstTime = false
    },
    add_word_success(state, updatedWords){
      state.user.words = updatedWords.data
    },
    delete_success(state, arr){
      state.user.words = arr.data
    }




  },
  actions: {
    login({ commit }, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios.post('/login', user).then(resp => {
          if(resp.status == 200){
            console.log(resp)
            const user = resp.data;
            const header = resp.headers;
            commit('auth_success', { header, user})
            router.push('/dashboard')
            resolve(resp)
          }
          else{
            commit('incorrect_info', resp.data)
            console.log(resp)
            resolve()
          }
          
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('auth-token')
          console.log(err)
          reject()
        })
      })
    },
    signup({ commit, dispatch }, user2){
      return new Promise((resolve, reject) => {
        commit('signup_request')
        axios.post('/signup', user2).then(resp => {
          commit('signup_request')
          if(resp.status == 200){
            commit('signup_success')
            console.log(resp)
            console.log(resp.data.name + " registered sucesfully")
            dispatch('login', {email: user2.email , password: user2.password}).then(res => {
              console.log(res)
              resolve()
            })
          }
          else{
            commit('incorrect_values', resp.data)
            console.log(resp)
            resolve()
          }
        }).catch(err => {
          commit('signup_error')
          console.log()
          reject(err)
        })
      })
    },
    logOut({ commit }){
      localStorage.removeItem('auth-token')
      localStorage.removeItem('user')
      localStorage.removeItem('user-status')
      router.push('/')
      commit('logout_success')
    },
    addWords({ commit, state }, newWord){
      return new Promise ((resolve, reject) => {
        const user = state.user.email
        axios.post('/api', {newWord, user}).then(resp => {
          console.log(resp) //response is the updated word array
          commit('add_word_success', resp)
          resolve()
        }).catch(err => reject())

      })
    },
    deleteWord({commit, state }, index){
      return new Promise((res, rej) => {
          const user = state.user.email;
          axios.post(`/delete`, { user, index}).then(resp => {
            console.log(resp);
            commit('delete_success', resp) //updated word array
            res()
          }).catch(err => rej(err))
      })
    }
  }
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GetStarted from './views/GetStarted.vue'
import AddWords from './views/AddWords.vue'
import Exercise from './views/Exercise.vue'
import Dashboard from './views/Dashboard'
import AllWords from './views/AllWords'
import store from './store';

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/get-started',
      name: 'get-started',
      component: GetStarted,
    },
    {
      path: '/add-words',
      name: 'addWords',
      component: AddWords,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/exercise',
      name: 'Exercise',
      component: Exercise,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/edit-words',
      name: 'EditWords',
      component: AllWords,
      meta:{
        requiresAuth: true
      }
    }
  ]
})

  router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth){
      if(!store.getters.isLoggedIn){
        next('/get-started')
        return
      }
      next()
    } else{
      next()
    }
})


export default router;
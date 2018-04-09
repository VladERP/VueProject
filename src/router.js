import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reference from './views/Reference.vue'
import PersonalArea from './views/PersonalArea.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/reference',
      name: 'reference',
      component: Reference
    },
    {
      path: '/personalarea',
      name: 'personalarea',
      component: PersonalArea
    }
  ]    
  
})

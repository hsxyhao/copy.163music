import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Mine from '@/page/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/my',
      name: 'Mine',
      component: Mine
    }
  ]
})

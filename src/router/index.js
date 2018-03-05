import Vue from 'vue'
import Router from 'vue-router'
import Music from '@/page/Music'
import Mine from '@/page/Mine'
import User from '@/page/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Music',
      component: Music
    },
    {
      path: '/home',
      name: 'Music',
      component: Music
    },
    {
      path: '/my',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})

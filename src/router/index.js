import Vue from 'vue'
import Router from 'vue-router'
import Music from '@/page/Music'
import Mine from '@/page/Mine'
import Play from '@/page/Play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Music',
      component: Music
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    }
  ]
})

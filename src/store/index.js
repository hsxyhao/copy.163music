import Vue from 'vue'
// vue全局状态管理组件
import Vuex from 'vuex'
import song from './modules/song'
import menu from './modules/menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    song,
    menu
  }
});
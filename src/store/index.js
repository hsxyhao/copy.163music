import Vue from 'vue'
// vue全局状态管理组件
import Vuex from 'vuex'
import song from './modules/song'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    song
  }
});
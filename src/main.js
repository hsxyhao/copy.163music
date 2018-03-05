// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 移动端阿里适配方案
import 'lib-flexible'

// vue全局状态管理
import store from './store'
// 快速点击，解决端300ms延迟
import FastClick from 'fastclick'

import AlloyFinger from 'alloyfinger'
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger.vue'

FastClick.attach(document.body);

Vue.use(AlloyFingerPlugin, {
    AlloyFinger
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

/*
 * @Author: Amero
 * @Date: 2022-02-06 22:24:48
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-10 00:14:34
 * @FilePath: \vue-login-demo\src\main.js
 */
import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/display.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

/*
 * @Author: Amero
 * @Date: 2022-02-06 22:28:46
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-11 00:10:32
 * @FilePath: \vue-login-demo\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import userloginCom from '../views/userlogin.vue'
import userloginCom_loginCom from '../views/userLogin/login.vue'
import userloginCom_logupCom from '../views/userLogin/logup.vue'
import testCom from '../views/test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "starPage",
    redirect: '/userlogin'
  },
  {
    path: '/userlogin',
    name: 'Userlogin',
    component: userloginCom,
    redirect: '/userlogin/login',
    children: [
      {
        path: 'login',
        name: "Login",
        component: userloginCom_loginCom
      },
      {
        path: 'logup',
        name: "Logup",
        component: userloginCom_logupCom
      }
    ]
  },
  {
    path:'/test',
    name:"Test",
    component:testCom
  }
]


const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

/*
 * @Author: Amero
 * @Date: 2022-02-10 00:22:34
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-10 00:23:50
 * @FilePath: \vue-login-demo\vue.config.js
 */
module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title= 'Login'
          return args
        })
    }
  }
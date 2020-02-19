//引入vue
import Vue from 'vue'
//引入适配库 作用动态的计算rem
import "lib-flexible/flexible"
//引入router
import router from './router'
//引入app
import App from './App.vue'
//关闭提示
Vue.config.productionTip = false

new Vue({
  el:'#app',
  components:{App},
  template:'<App/>',
  //路由操作的第二步 引入后把路由器安装到当前的应用上
  router
})
  
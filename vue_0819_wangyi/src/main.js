//引入vue
import Vue from 'vue'
//引入适配库
import "lib-flexible/flexible"
//引入app
import App from './App.vue'
//关闭提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

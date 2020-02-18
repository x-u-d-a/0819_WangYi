//引入vue
import Vue from 'vue'
//引入router
import VueRouter from 'vue-router'
//为了管理路由需要在路由器文件中引入路由
import routers from './routes'

//声明使用 
Vue.use(VueRouter)

//路由操作的第一步 生成路由器
const router = new VueRouter({
    //在路由其中的配置对象上把路由添加
    routers  //暴露的是一个数组
})

//为了在入口文件引用router  需要暴露出去
export default router
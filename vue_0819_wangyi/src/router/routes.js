//引入路由组件
import firstPage from '../pages/firstPage/firstPage'
import sort from '../pages/sort/sort'
import buy from '../pages/buy/buy'
import shopCar from '../pages/shopCar/shopCar'
import personal from '../pages/personal/personal'

//第三步在routes中定义完整路由页面
export default[
    {   //路由路径
        path:'/firstPage',
        //路由组件
        component: firstPage
    },
    {
        path:'/sort',
        component: sort
    },
    {
        path:'/buy',
        component: buy
    },
    {
        path:'/shopCar',
        component: shopCar
    },
    {
        path:'/personal',
        component: personal
    }
]
//引入路由组件
import FirstPage from '../pages/FirstPage/FirstPage'
import Sort from '../pages/Sort/Sort'
import Buy from '../pages/Buy/Buy'
import ShopCar from '../pages/ShopCar/ShopCar'
import Personal from '../pages/Personal/Personal'
import SortRight from '../components/SortRight/SortRight'

//第三步在routes中定义完整路由页面
export default[
    {   //路由路径
        path:'/firstPage',
        //路由组件
        component: FirstPage
    },
    {
        path:'/sort',
        component: Sort,
        children:[
            {
                path:'/sort/right/:id',
                component: SortRight
            }
        ]
    },
    { 
        path:'/buy',
        component: Buy
    },
    {
        path:'/shopCar',
        component: ShopCar
    },
    {
        path:'/personal',
        component: Personal
    },
    {
        path:'/',
        redirect:'firstPage'
    }
]
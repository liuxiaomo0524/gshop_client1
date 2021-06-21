// 引入home
// import Home from '../pages/Home'
import Home from '@/pages/Home'
// 引入Search
import Search from '@/pages/Search'
// 引入Login
import Login from '@/pages/Login'
// 引入Register
import Register from '@/pages/Register'
// 注册路由器并暴露出去一个routes的数组
export default[
    // 注册home路由器
    {
        path:'/',
        component:Home
    },

    // 注册Search路由器
    {
        path:'/search',
        component:Search
    },

    // 注册Login路由器
    {
        path:'/login',
        component:Login,
        meta:{
            isFooterHide:true
        }
    },

    // 注册Register路由器
    {
        path:'/register',
        component:Register,
        meta:{
            isFooterHide:true
        }
    },
    // 重定向

    {
        path:'/',
        redirect:'/'
    }

]
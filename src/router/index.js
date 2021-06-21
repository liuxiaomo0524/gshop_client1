// 引入vue
import Vue from 'vue'

// 引入vue-router
import VueRouter from 'vue-router'

// 引入routes
import routes from './routes'

// 声明并使用vue-router
Vue.use(VueRouter)

// 实例化路由器对象并暴露
export default new VueRouter({
    mode:'history',
    routes
})
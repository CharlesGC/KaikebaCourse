import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 应用插件 做了什么 install
// install 里面做了什么
// 1.挂载$router
// 2.注册组件 router.view router.link
Vue.use(VueRouter)

// router做了什么
// 1. 解析路由配置
// 2. 响应url变化
// 3. 事件监听 hashchange
// 4. 组件切换
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router

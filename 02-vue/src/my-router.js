import Vue from 'vue'
import VueRouter from './my-router/index'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About }
    ]
})

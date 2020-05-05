import Vue from 'vue'
import App from './App.vue'

// import router from './router'
import router from './my-router'

// import store from './store'
import store from './my-vuex'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

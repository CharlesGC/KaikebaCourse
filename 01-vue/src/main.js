import Vue from 'vue'
import App from './App.vue'

class Bus {
    constructor() {
        this.callbacks = {}
    }
    $on(name, fn) {
        this.callbacks[name] = this.callbacks[name] || []
        this.callbacks[name].push(fn)
    }
    $emit(name, args) {
        if (this.callbacks[name]) {
            this.callbacks[name].forEach(cb => cb(args))
        }
    }
}

Vue.config.productionTip = false
Vue.prototype.$bus = new Bus()

new Vue({
    render: h => h(App)
}).$mount('#app')

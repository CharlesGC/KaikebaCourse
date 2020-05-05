import Vue from 'vue'
import Store from './my-vuex/index'

Vue.use(Store)

export default new Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count += 1
        }
    }
})

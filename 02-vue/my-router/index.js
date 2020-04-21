// 1.插件
let Vue // 通过插件传递进来
// 2.VueRouter类
class VueRouter {
    constructor(options) {
        this.$options = options
        // 声明map 把path和component映射起来
        this.routerMap = {}

        // 保存当前的hash
        // vue使其是响应式的
        this.app = new Vue({
            data: {
                current: '/'
            }
        })
    }
}

// 插件要求实现install方法
VueRouter.install = function(_Vue) {
    Vue = _Vue
    // 混入 挂载$router
    Vue.mixin({
        beforeCreate() {
            // 希望接下来代码在每个组件都执行
            // this是当前组件的实例
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router
                // router 初始化
            }
        }
    })
}

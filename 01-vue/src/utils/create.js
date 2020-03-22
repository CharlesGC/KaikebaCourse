import Vue from 'vue'
function create(Component, props) {
    // 1.创建Vue实例
    const vm = new Vue({
        // h是createElement别名，返回VNode
        render: h => h(Component, { props })
    }).$mount() // 不传参会执行转换过程，但不挂载
    // 官方文档中 body不能是挂载点
    // 2. 获取挂载的dom元素
    document.body.appendChild(vm.$el)

    // 资源回收
    // 1. 获取组件实例
    // 2. removeChild

    const comp = vm.$children[0]
    comp.remove = () => {
        document.body.removeChild(vm.$el)
        comp.$destroy()
    }

    return comp
}

export default create

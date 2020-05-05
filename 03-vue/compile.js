class Compile {
    constructor(el, vm) {
        this.$vm = vm
        this.$el = document.querySelector(el)

        this.$fragment = this.node2Fragment(this.$el)
        this.compile(this.$fragment)
        this.$el.appendChild(this.$fragment)
    }

    node2Fragment(el) {
        const fragment = document.createDocumentFragment()
        let child;
        while (child = el.firstChild) {
            fragment.appendChild(child)
        }
        return fragment
    }
    compile(el) {
        const childNodes = el.childNodes;

        Array.from(childNodes).forEach(node => {
            if (node.nodeType == 1) {
                // console.log('元素文本' + node.nodeName);
                this.compileElement(node)
            } else if (this.isInter(node)) {
                // console.log('插值文本' + node.textContent);
                this.compileText(node)
            }
            if (node.childNodes && node.childNodes.length > 0) {
                this.compile(node)
            }
        })
    }

    isInter(node) {
        return node.nodeType == 3 && /\{\{(.*)\}\}/.test(node.textContent)
    }

    compileElement(node) {
        const nodeAttrs = node.attributes
        Array.from(nodeAttrs).forEach(attr => {
            const attrName = attr.name
            const exp = attr.value
            if (attrName.indexOf('v-') === 0) {
                const dir = attrName.substring(2)
                this[dir] && this[dir](node, exp)
            } else if (attrName.indexOf('@') === 0) { 
                const dir = attrName.substring(1)
                this.eventHandler(node, exp, dir)
            }
        })
    }

    compileText(node) {
        const exp = RegExp.$1
        this.update(node, exp, 'text')
    }

    update(node, exp, dir) {
        // 获取更新函数
        let updator = this[dir + 'Updator']
        // 初始化， 首次页面赋值
        updator && updator(node, this.$vm[exp])
        // 创建watcher实例
        new Watcher(this.$vm, exp, function (value) {
            updator && updator(node, value)
        })
    }

    textUpdator(node, value) {
        node.textContent = value
    }

    text(node, exp) {
        this.update(node, exp, 'text')
    }

    html(node, exp) {
        this.update(node, exp, 'html')
    }

    htmlUpdator(node,value) { 
        node.innerHTML = value
    }

    model(node, exp) { 
        this.update(node, exp, 'model')

        node.addEventListener('input', e => { 
            this.$vm[exp] = e.target.value
        })
    }

    modelUpdator(node, value) { 
        node.value = value
    }

    eventHandler(node, exp, dir) { 
        const fn = this.$vm.$options.methods && this.$vm.$options.methods[exp]
        if (dir && fn) {
            node.addEventListener(dir, fn.bind(this.$vm))
        }
    }
}
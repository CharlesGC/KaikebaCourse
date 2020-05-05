class Vue { 
    constructor(options) { 
        this.$options = options

        this.$data = options.data
        this.observe(this.$data)

        new Compile(options.el, this)

        if (options.created) {
            options.created.call(this)
        }
    }

    observe(value) { 
        if (!value || typeof value != 'object') {
            return
        }

        Object.keys(value).forEach(key => { 
            this.defineReactive(value, key, value[key])

            this.proxyData(key)
        })
    }

    defineReactive(obj, key, val) { 
        this.observe(val)

        const dep = new Dep()

        Object.defineProperty(obj, key, {
            get() { 
                Dep.target && dep.addDep(Dep.target)
                return val
            },
            set(newVal) { 
                if (newVal === val) {
                    return 
                }
                val = newVal

                dep.notify()
            }
        })
    }

    proxyData(key) { 
        Object.defineProperty(this, key, {
            get() { 
                return this.$data[key]
            },
            set(newVal) { 
                this.$data[key] = newVal
            }
        })
    }
}

// 管理若干watcher实例
class Dep { 
    constructor() { 
        this.deps = []
    }

    // 新增watcher
    addDep(dep) { 
        this.deps.push(dep)
    }

    // 通知变更
    notify() { 
        this.deps.forEach(dep => dep.update())
    }
}

// 监听器watcher 更新页面中的绑定
class Watcher { 
    // vm 是vue实例， key是属性
    constructor(vm, key, cb) { 
        this.vm = vm
        this.key = key
        this.cb = cb


        Dep.target = this
        this.vm[this.key]
        Dep.target = null
    }
    update() { 
        // console.log(this.key + ' 更新 ');
        this.cb.call(this.vm, this.vm[this.key])
    }
}
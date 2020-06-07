# Vue 源码剖析
## 课堂目标

* 1.搭建整体开发学习环境 
* 2.vue整体初始化流程
* 3.数据响应式原理 

## 开发环境
### 获取vue

项目地址： https://github.com/vuejs/vue 
git: git clone https://github.com/vuejs/vue.git 
current version 2.6.10

## 文件结构

调试环境
* 1.安装依赖： npm i 
* 2.安装rollup： npm i -g rollup
* 3.修改dev脚本
```
"dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev",
```
* 4.执行开发命令 npm run dev

命名注意事项  
``` 
runtime: 不带编译器的版本 
common： commonjs打包规范书来自nodejs，require， exports 用于后端，同步的，老旧版本的打包器比如browserify、webpack1.0
esm: es module es模块规范，import， export
amd: requirejs专用于浏览器
umd: universal module definition
```

##  入口文件

`` `` `E:\MyProject\kaikeba\04-vue\src\platforms\web\entry-runtime-with-compiler.js`

覆盖$mount，解析template选项并编译

```javascript
const { render, staticRenderFns } = compileToFunctions(template, {}, this)
options.render = render
```

`` `` `E:\MyProject\kaikeba\04-vue\src\platforms\web\runtime\index.js`

定义$mount

`` `` `E:\MyProject\kaikeba\04-vue\src\core\index.js`

 初始化全局API如Vue.set/delete/mixins...

``` 
initGlobalAPI(Vue)
```

`` `` `E:\MyProject\kaikeba\04-vue\src\core\instance\index.js`

```javascript
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
```

## 数据响应式

`` `` `E:\MyProject\kaikeba\04-vue\src\core\instance\state.js`

initData() 

将data做响应化处理

```javascript
observe(data, true /* asRootData */)
```

`` `` `E:\MyProject\kaikeba\04-vue\src\core\observer\index.js`

返回观察者实例

``` 
ob = new Observer(value)
```

Observer: `` `` `E:\MyProject\kaikeba\04-vue\src\core\observer\index.js`

区分对象或者数组， 做不同的响应化处理

defineReactive

## 整体流程图

https://www.processon.com/view/link/5d1eb5a0e4b0fdb331d3798c#map
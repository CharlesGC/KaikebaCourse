# Vue-router原理

## 任务分析
+ 实现一个插件(Vue.use())
+ routes选项解析： 生成一个map，path和component映射起来
+ 监控url上hash变化：响应hash的变化，获取并显示对应组件
+ 挂载$router
+ 实现两个全局组件：router-view和router-link



# Vuex原理

## 任务分析

- 实现Store: 持有state，实现dispatch，commit，getters
- 实现插件，挂载store实例
- 响应式：state变化影响view


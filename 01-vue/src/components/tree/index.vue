<template>
    <div id="app">
        <ul><item class="item" :model="treeData"></item></ul>
    </div>
</template>

<script>
import Item from './item.vue'
export default {
    props: {

    },
    data() {
        return {
            treeData: {
                title: 'Web全栈架构师',
                children: [
                    {
                        title: 'Java高级架构师'
                    },
                    {
                        title: 'JS高级',
                        children: [
                            {
                                title: 'ES6'
                            },
                            {
                                title: 'CSS'
                            }
                        ]
                    },
                    {
                        title: 'WEB全栈',
                        children: [
                            {
                                title: '组件化'
                            },
                            {
                                title: '源码'
                            }
                        ]
                    },
                    {
                        title: 'react',
                        children: [
                            {
                                title: 'jsx'
                            },
                            {
                                title: '虚拟dom'
                            }
                        ]
                    }
                ]
            }
        }
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {
        Item
    }
}
</script>

<style>
.item {
    text-align: left;
}
</style>

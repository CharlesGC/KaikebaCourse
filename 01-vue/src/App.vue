<template>
    <div id="app">
        <!-- <HelloWorld
            @foo="onFoo"
            ref="hw"
            msg="Welcome to Your Vue.js App"
        >
            匿名内容
        </HelloWorld>
        <hello-world>
            <template>123</template>
            <template v-slot:title>
                这是标题
            </template>
        </hello-world>
        <hello-world>
            <template>465</template>
            <template v-slot:footer="slotProps">
                {{slotProps.foo}} -- {{slotProps.bar}}
            </template>
        </hello-world> -->
        <!-- <k-form /> -->
        <tree />
    </div>
</template>

<script>
// import KForm from './components/form'
import Tree from './components/tree/index'

export default {
    name: 'App',
    data() {
        return {
        }
    },
    components: {
        // KForm,
        Tree
    },
    mounted() {
        // console.log(this.$refs.hw.msg)
        // console.log(this.$children[0].msg)
    },
    methods: {
        // onFoo(msg) {
        //     console.log(msg)
        // }
    }
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <button @click="$emit('foo', 'abc')">
            子组件
        </button>
        <button @click="sendMsg">
            给兄弟打招呼
        </button>
        <br>
        <!-- 匿名插槽 -->
        <slot></slot>
        <br>
        <!--具名插槽-->
        <slot name="title"></slot>
        <br>
        <!-- 作用域插槽 -->
        <slot name="footer" foo="foo" :bar="bar"></slot>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            bar: 'bar'
        }
    },
    props: {
        msg: String
    },
    mounted() {
        this.$parent.$on('foo', () => {
            console.log('兄弟组件传参')
        })
    },
    methods: {
        sendMsg() {
            this.$parent.$emit('foo')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>

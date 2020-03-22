<template>
    <div>
        <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
export default {
    // 双向绑定
    // 事件监听
    // 通知校验
    inheritAttrs: false,
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: String,
            default: ''
        }
    },
    data() {
        return {

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
        onInput(e) {
            // 派发事件，单向数据流
            this.$emit('input', e.target.value)

            this.$parent.$emit('validate')
        }
    },
    components: {

    }
}
</script>

<style scoped lang="scss">

</style>

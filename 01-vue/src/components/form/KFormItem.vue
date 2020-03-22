<template>
    <div>
        <!-- label -->
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="errorMsg">
            {{errorMsg}}
        </p>
    </div>
</template>

<script>
import Schema from 'async-validator'
export default {
    inject: ['form'],
    props: {
        label: {
            type: String,
            defalut: ''
        },
        prop: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            errorMsg: ''
        }
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.$on('validate', () => {
            this.validate()
        })
    },
    watch: {

    },
    methods: {
        validate() {
            // 获取值和校验规则
            const rules = this.form.rules[this.prop]
            const value = this.form.model[this.prop]
            // 创建Schema实例

            const schema = new Schema({
                [this.prop]: rules
            })

            // validate方法返回一个校验结果的promise

            return schema.validate({ [this.prop]: value }, (err) => {
                if (err) {
                    this.errorMsg = err[0].message
                } else {
                    this.errorMsg = ''
                }
            })
        }
    },
    components: {

    }
}
</script>

<style scoped lang="scss">

</style>

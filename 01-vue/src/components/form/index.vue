<template>
    <div>
        <h3>表单</h3>
        <hr>
        <k-form :model="model" :rules="rules" ref="loginForm">
            <k-form-item label="用户名" prop="username">
                <k-input v-model="model.username" placeholder="请输入姓名" />
            </k-form-item>
            <k-form-item label="密码" prop="password">
                <k-input :type="'password'" v-model="model.password" placeholder="请输入密码" />
            </k-form-item>
            <k-form-item>
                <button @click="onLogin">
                    提交
                </button>
            </k-form-item>
        </k-form>
        {{model}}
    </div>
</template>

<script>
import KForm from '../form/KForm'
import KFormItem from '../form/KFormItem'
import KInput from '../form/Kinput'
import Notice from '../Notice'
import create from '../../utils/create'
export default {
    props: {

    },
    data() {
        return {
            model: { username: 'Tom', password: '' },
            rules: {
                username: [{ required: true, message: '请输入用户名' }],
                password: [{ required: true, message: '请输入密码' }]
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
        onLogin() {
            // 全局校验
            this.$refs['loginForm'].validate(isValid => {
                const notice = create(Notice, {
                    title: '社会你超哥喊你去搬砖',
                    message: isValid ? '请登录' : '输入错误'
                })
                notice.show()
            })
        }
    },
    components: {
        KInput,
        KFormItem,
        KForm
    }
}
</script>

<style scoped lang="scss">

</style>

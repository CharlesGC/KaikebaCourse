<template>
    <div class="home">
        <div>{{$store.state.count}}</div>
        <button @click="add">
            开始
        </button>
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    methods: {
        add() {
            this.$store.commit('increment')
        }
    }
}
</script>

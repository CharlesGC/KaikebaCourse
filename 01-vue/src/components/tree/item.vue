<template>
    <li>
        <div @click="toggle">
            {{model.title}}
            <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
        </div>

        <ul v-if="isFolder" v-show="open">
            <item v-for="item in model.children" :model="item" :key="item.title"></item>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'Item',
    props: {
        model: Object
    },
    data() {
        return {
            open: false
        }
    },
    computed: {
        isFolder() {
            return this.model.children && this.model.children.length != 0
        }
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        toggle() {
            if (this.isFolder) {
                this.open = !this.open
            }
        }
    },
    components: {

    }
}
</script>

<style scoped lang="scss">

</style>

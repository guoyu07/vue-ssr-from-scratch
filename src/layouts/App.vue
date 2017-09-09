<template>
    <div>
        <vue-progress-bar></vue-progress-bar>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Welcome to Your Vue.js App. It is working! :)',
            'msg2': 'message 2'
        }
    },
    head: {
        title: {
            inner: "My Title"
        }
    }
}
</script>

<style lang="scss">
// @import './assets/main.scss';


</style>

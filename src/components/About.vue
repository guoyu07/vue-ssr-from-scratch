<template>
    <div>
        <h1 class="message">{{ msg }}</h1>
        <h2 class="message2">{{ msg2 }}</h2>
        <p class="text">about</p>
        <!--router-link to="/">home</router-link-->
        <button @click="changeLoction">home</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Welcome to About Page',
            'msg2': 'message 2'
        }
    },
    head: {
        title: {
            inner: "About Page"
        }
    },
    methods: {
        changeLoction() {
            location.assign('/')
        }
    }
}
</script>

<style lang="scss">
// @import './assets/main.scss';


</style>

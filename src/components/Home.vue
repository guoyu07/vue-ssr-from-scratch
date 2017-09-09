<template>
    <div>
        <h1 class="message">{{ msg }}</h1>
        <h2 class="message2">{{ msg2 }}</h2>
        <p class="text">home Page is this</p>
        <router-link to="/about">about</router-link>
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
            inner: "Home Page"
        }
    }
}
</script>

<style lang="scss">
// @import './assets/main.scss';


</style>

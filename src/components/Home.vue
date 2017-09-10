<template>
    <div>
        <h1 class="message">{{ msg }}</h1>
        <h2 class="message2">{{ msg2 }}</h2>
        <p class="text">home Page is this</p>
        <!--router-link to="/about">about</router-link-->
        <button @click="changeLoction">about</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Welcome to Home Page',
            'msg2': 'message 2'
        }
    },
    head: {
        title: {
            inner: "Home Page"
        }
    },
    methods: {
        changeLoction() {
            location.assign('/about')
        }
    }
}
</script>

<style lang="scss">
// @import './assets/main.scss';


</style>

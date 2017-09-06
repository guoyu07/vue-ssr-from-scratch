<template>
    <div>
        <h1 class="message">{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Welcome to Your Vue.js App. It is working! :)'
        }
    },
    head: {
        title: {
            inner: "My Title"
        }
    }
}
</script>

<style>
h1 {
    font-family: arial;
    color: #983434;
}
</style>

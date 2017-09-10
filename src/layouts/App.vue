<template>
    <div>
        <router-view></router-view>
        <vue-progress-bar></vue-progress-bar>

        <button @click="Start" class="progress">Start</button>
        <button @click="Finish" class="progress">Finish</button>
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
    methods: {
        Start() {
            this.$Progress.start()
        },
        Finish() {
            this.$Progress.finish()
        }
    }
}
</script>

<style lang="scss">

.progress {
    margin-top:20px
}

</style>

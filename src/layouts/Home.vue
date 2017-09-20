<template>
<div>
    <my-header/>
    <router-view></router-view>
    <my-footer/>
</div>
</template>

<script>
import MyHeader from '../components/global/Header.vue';
import MyFooter from '../components/global/Footer.vue';

export default {
    data () {
        return {
            
        }
    },
    components: {
        MyHeader,
        MyFooter,
    },
    methods: {
        
    }
}
</script>

<style lang="scss">


</style>

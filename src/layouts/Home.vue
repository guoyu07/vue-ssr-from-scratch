<template>
<div>
    <my-header/>
    <slider/>
    <router-view></router-view>
    <my-footer/>
</div>
</template>

<script>
import MyHeader from '../components/global/Header.vue';
import MyFooter from '../components/global/Footer.vue';
import Slider from '../components/home/Slider.vue';


export default {
    data () {
        return {
            
        }
    },
    components: {
        MyHeader,
        MyFooter,
        Slider
    },
    methods: {
        
    }
}
</script>

<style lang="scss">


</style>

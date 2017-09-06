<template>
  <div>
    <my-navbar/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
/*eslint-disable*/
import MyNavbar from '../components/NavBar.vue';
import MyFooter from '~/components/Footer.vue';

export default {
  components: {
    MyFooter,
    MyNavbar
  }
}
</script>

<style lang="scss">
@import "../static/css/bootstrap.min.css";
@import "../static/css/modern-business.css";
</style>

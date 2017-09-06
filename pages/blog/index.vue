<template>
    <div class="col-md-8">
        <blog-item v-for="(blog, index) in blogs" :blog="blog" :key="index" />
        <pagination/>
    </div>
</template>

<script>
/*eslint-disable*/


import Pagination from '~/components/blog/Pagination.vue';
import BlogItem from '~/components/blog/BlogItem.vue';

export default {
    layout: 'blog-layout',
    components : {
        Pagination,
        BlogItem
    },
    computed: {
        blogs() {
            return this.$store.state.blogs;
        }
    },
    head: {
        title : 'Blogs Page',
        meta: [
            {'property': 'og:title', 'content' : 'Blog Page'},
            {'property': 'og:description', 'content' : 'testing Blog Page'}
        ]
    }
}
</script>

<style>

</style>
<template>
<div class="col-lg-8">


    <h1>{{blog.title}}</h1>
    <!-- Preview Image -->
    <img class="img-fluid rounded" :src="blog.img" alt="">

    <hr>

    <!-- Date/Time -->
    <p>{{blog.date}}</p>

    <hr>

    <!-- Post Content -->
    <p class="lead">{{blog.lead}}</p>

    
    <p>{{blog.body}}</p>



</div>
</template>

<script>
/*eslint-disable*/
export default {
    layout: 'blog-layout',
    head() {

        return {
            title: this.blog.title,
            meta: [
                {'property': 'og:title', 'content' : this.blog.title},
                {'property': 'og:description', 'content' : this.blog.description},
                {'property': 'og:image', 'content' : this.GetImageURL()},
            ]
        }
    },
    data() {
        return {
            blog : this.GetBlog()
        }
    },
    created() {

    },
    methods: {
        GetBlog() {
            let blog = this.$store.state.blogs.filter(item=>{
                return item.id == this.$route.params.id;
            })

            if(blog.length==1) {
                return blog[0];
            }

            return {};
        },
        GetImageURL() {
            return 'http://lab.palitra.ge'+ this.blog.img;
        }
    }

}
</script>


<style >

</style>

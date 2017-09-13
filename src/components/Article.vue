<template>
    <div>
        <h1 class="message">{{ msg }}</h1>
        <h2 class="message2">{{ msg2 }}</h2>
        
        <div v-if="article">
            <h4>{{article.title}}</h4>
            <p>{{article.intro}}</p>
            <p>{{article.content}}</p>
        </div>


    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Welcome to Article Page',
            msg2: 'This is detail page',
            article: null
        }
    },
    head: {
        title: {
            inner: "About Page"
        }
    },
    mounted() {
        this.article = this.$store.getters.getArticles.find(item=>{
            return item.id == this.$route.params.id
        })
    },
    methods: {
        changeLoction() {
            location.assign('/')
        }
    }
}
</script>

<style lang="scss">


</style>

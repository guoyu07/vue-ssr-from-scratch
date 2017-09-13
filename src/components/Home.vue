<template>
    <div>
        <h1 class="message">{{ msg }}</h1>
        <h2 class="message2">{{ msg2 }}</h2>
        <p class="text">home Page is this</p>
        <!--router-link to="/about">about</router-link-->
        <div v-if="articles">
            <div v-for="article in articles" :key="article.id" @click>
                <h3>{{article.title}}</h3>
                <input type="button" value="Read More" @click="readMore(article.id)">
            </div>
        </div>
        

    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'This is Home page',
            msg2: 'Welcome',
            articles: null,
        }
    },
    head: {
        title: {
            inner: "Home Page"
        }
    },
    beforeCreate() {
        this.$http.get('/data').then((responce)=>{
            this.articles = responce.data;
        }).catch((error)=>{
            console.log('error:',error)
        })
    },
    methods: {
        readMore(id) {
            location.assign(`/article/${id}`)
        }
    }
}
</script>

<style lang="scss">


</style>

<template>

<div class="card mb-4">
    <img class="card-img-top" :src="blog.img" alt="Card image cap">
    <div class="card-body">
        <h2 class="card-title">{{blog.title}}</h2>
        <p class="card-text">{{blog.lead}}</p>
        <nuxt-link :to="blog.url" class="btn btn-primary">Read More &rarr;</nuxt-link>
    </div>
    <div class="card-footer text-muted">
        {{blog.date}}
    </div>
</div>


</template>

<script>
/*eslint-disable*/
export default {
    props : [
        'blog'
    ]

}
</script>


<style>

</style>

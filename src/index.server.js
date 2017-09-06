import Vue from 'vue'
import Meta from 'vue-meta'


Vue.use(Meta)

var app = new Vue({

    metaInfo: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App. It is working! :)'
        }
    },
    template: `
        <div>
            <h1 class="message">{{ msg }}</h1>
        </div>
    `
})

export default app;
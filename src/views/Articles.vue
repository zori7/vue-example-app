<template>
    <div class="pa-2">
        <i18n tag="h1" path="nav.articles"/>
        <template v-if="loading || !posts">
            <v-skeleton-loader v-for="i in 3" :key="i" class="ma-2" type="article"/>
        </template>
        <template v-else>
            <v-card
                    v-for="post in posts"
                    :key="post.id"
                    @click="goToPost(post.id)"
                    hover
                    class="pa-2 ma-2">
                <h3 class="mb-3">{{ post.title }}</h3>
                <p>{{ post.body }}</p>
            </v-card>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'Articles',
        data () {
            return {
                loading: true,
                posts: null,
            }
        },
        created () {
            this.loading = true
            this.$axios.get('posts')
            .then(res => {
                this.posts = res.data
                this.loading = false
            })
        },
        methods: {
            goToPost (id) {
                console.log(id)
            },
        }
    }
</script>

<style scoped>

</style>
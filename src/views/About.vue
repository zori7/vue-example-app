<template>
    <div class="about">
        <h1>This is an about page</h1>
        <h2>Counter is {{ counter }}</h2>

        <div>
            <v-btn @click="counter--" class="mx-2">Decrement counter</v-btn>
            <v-btn @click="counter++" class="mx-2">Increment counter</v-btn>
        </div>

        <div class="pa-4 cyan--text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequatur corporis cupiditate deserunt dolores ducimus error laboriosam magnam neque nostrum officia quisquam, quos rerum veniam vitae voluptate! Aut, saepe.
        </div>

        <v-snackbar
                v-model="showMessage"
                color="cyan darken-2"
                :timeout="3000"
        >
            Hello user!
        </v-snackbar>
    </div>
</template>

<script>
    import createWatchQuery from 'vue-reactive-route-query'

    export default {
        mixins: [
            createWatchQuery('counter'),
        ],
        data() {
            return {
                showMessage: false,
                counter: 0,
            }
        },
        mounted() {
            this.showMessage = true
        }
    }
</script>

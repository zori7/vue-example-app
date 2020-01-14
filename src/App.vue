<template>
    <v-app>
        <v-app-bar
                app
                color="primary"
                dark
        >
            <div class="d-flex align-center">
                <v-img
                        alt="Vuetify Logo"
                        class="shrink mr-2"
                        contain
                        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                        transition="scale-transition"
                        width="40"
                />

                <v-img
                        alt="Vuetify Name"
                        class="shrink mt-1 hidden-sm-and-down"
                        contain
                        min-width="100"
                        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                        width="100"
                />
            </div>
            <v-btn
                    class="mx-4"
                    to="/"
                    text
            >
                {{ $t('nav.home') }}
            </v-btn>
            <v-btn
                    to="/about"
                    text
            >
                {{ $t('nav.about') }}
            </v-btn>
            <v-btn
                    class="mx-4"
                    to="/ratings"
                    text
            >
                {{ $t('nav.ratings') }}
            </v-btn>
            <v-btn
                    to="/articles"
                    text
            >
                {{ $t('nav.articles') }}
            </v-btn>

            <v-spacer/>

            <v-menu offset-y>
                <template #activator="{ on }">
                    <div class="pointer" v-on="on">
                        {{ lang }}
                    </div>
                </template>
                <v-list dense>
                    <v-list-item
                            v-for="(item, index) in languages"
                            :key="index"
                            @click="setLang(item)"
                    >
                        <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

        </v-app-bar>

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: 'App',
        data () {
            return {
                languages: [
                    'en',
                    'ru',
                ],
            }
        },
        computed: {
            ...mapState({
                lang: state => state.lang,
            }),
        },
        methods: {
            ...mapMutations({
                setLang: 'setLang',
            }),
        },
    };
</script>

<style lang="sass">
    .pointer
        cursor: pointer
</style>

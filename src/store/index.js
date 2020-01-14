import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { setLocale } from '../plugins/i18n'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lang: 'en',
        values: [
            { value: 0 },
            { value: 1 },
            { value: 5 },
            { value: 4 },
            { value: 15 },
            { value: 10 },
            { value: 27 },
            { value: 30 },
            { value: 25 },
            { value: 24 },
            { value: 20 },
            { value: 35 },
            { value: 50 },
            { value: 45 },
            { value: 55 },
        ],
    },
    mutations: {
        setValues (state, values) {
            state.values = values
        },
        setLang (state, lang) {
            setLocale(lang)
            state.lang = lang
        },
    },
    actions: {},
    modules: {},
    plugins: [
        createPersistedState(),
    ],
})

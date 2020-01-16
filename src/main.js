import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from './plugins/dayjs'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import axios from './plugins/axios'

Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs
Vue.prototype.$axios = axios

new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App)
}).$mount('#app')

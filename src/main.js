import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'

dayjs.extend(utc)

Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs

new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App)
}).$mount('#app')

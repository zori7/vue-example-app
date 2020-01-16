import Vue from 'vue'
import VueI18n from 'vue-i18n'
import * as Cookies from 'js-cookie'

Vue.use(VueI18n)

const savedLocale = JSON.parse(Cookies.get('vuex')).lang

function loadLocaleMessages () {
    const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}

const i18n = new VueI18n({
    locale: savedLocale,
    fallbackLocale: 'en',
    messages: loadLocaleMessages()
})

export function setLocale (lang) {
    i18n.locale = lang
}

export default i18n

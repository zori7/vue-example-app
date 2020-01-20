import Vue from 'vue'

const axios = require('axios').create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
})

Vue.prototype.$axios = axios

export default axios

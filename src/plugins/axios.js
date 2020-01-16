const axios = require('axios').create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
})

export default axios

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import Vue from 'vue'

dayjs.extend(utc)

Vue.prototype.$dayjs = dayjs

export default dayjs

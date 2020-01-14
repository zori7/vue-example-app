<template>
    <div class="home">
        <!--    <img alt="Vue logo" src="../assets/logo.png">-->
        <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <div class="date">
            {{ date1 | dateTime }}
        </div>
        <div style="margin: 1rem 0;">
            <v-btn @click="addMinute('date1')">Add 1 minute</v-btn>
        </div>
        <div>
            <v-btn @click="subMinute('date1')">Subtract 1 minute</v-btn>
        </div>
        <div style="margin: 1rem 0;">
            <v-btn @click="addSecond('date1')">Add 1 second</v-btn>
        </div>
        <div>
            <v-btn @click="subSecond('date1')">Subtract 1 second</v-btn>
        </div>
        <div style="margin-top: 1rem;" class="date">
            {{ date2 | dateTime }}
        </div>
        <div style="margin: 1rem 0;">
            <v-btn @click="addMinute('date2')">Add 1 minute</v-btn>
        </div>
        <div>
            <v-btn @click="subMinute('date2')">Subtract 1 minute</v-btn>
        </div>
        <div style="margin: 1rem 0;">
            <v-btn @click="addSecond('date2')">Add 1 second</v-btn>
        </div>
        <div>
            <v-btn @click="subSecond('date2')">Subtract 1 second</v-btn>
        </div>
        <div style="margin-top: 2rem;">
            Difference is: {{ difference }} minutes
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            // HelloWorld
        },
        filters: {
            dateTime(val) {
                return val.format('D MMM HH:mm:ss')
            }
        },
        data() {
            return {
                date1: null,
                date2: null,
            }
        },
        computed: {
            difference() {
                return this.date1.diff(this.date2, 'minute')
            }
        },
        created() {
            this.date1 = this.$dayjs()
            this.date2 = this.$dayjs()
        },
        methods: {
            addMinute(prop) {
                this[prop] = this[prop].add(1, 'minutes')
            },
            subMinute(prop) {
                this[prop] = this[prop].subtract(1, 'minutes')
            },
            addSecond(prop) {
                this[prop] = this[prop].add(1, 'seconds')
            },
            subSecond(prop) {
                this[prop] = this[prop].subtract(1, 'seconds')
            },
        }
    }
</script>

<style lang="sass" scoped>
    .date
        display: inline-block
        padding: 0.5rem 1rem
        background: #678
        color: white
        border-radius: 3px
        cursor: pointer
        box-shadow: 0 0 7px 1px #2c3ea0
        transition: box-shadow .2s ease-in

        &:hover
            box-shadow: 0 0 3px 1px #2c3ea0

    .home
        padding: 1rem

        text-align: center

</style>

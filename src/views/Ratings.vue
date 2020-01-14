<template>
    <div>
        <h1 style="text-align: center">Ratings</h1>
        <div class="mx-auto" style="width: 50%;">
            <v-sparkline
                    :value="values.map(val => val.value)"
                    :gradient="gradient"
                    :smooth="true"
                    :key="sparkKey"
                    auto-draw
                    :auto-draw-duration="3000"
            />
        </div>
        <div class="d-flex flex-wrap">
            <div v-for="(val, i) in values" :key="i" class="chart-value flex-grow-1">
                <v-slider
                        :value="val.value"
                        @input="e => changeValue(i, e)"
                        label="Value"/>
                <v-btn icon @click="deleteValue(i)"><v-icon>mdi-delete</v-icon></v-btn>
            </div>
            <div class="chart-value flex-grow-1">
                <v-btn icon @click="addValue"><v-icon>mdi-plus</v-icon></v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import uuid from 'uuid/v4'
    import debounce from 'lodash/debounce'

    export default {
        name: 'Ratings',
        data () {
            return {
                gradient: ['#f72047', '#ffd200', '#1feaea'],
                sparkKey: uuid(),
            }
        },
        computed: {
            ...mapState({
                values: state => state.values,
            }),
        },
        methods: {
            ...mapMutations({
                setValues: 'setValues',
            }),
            addValue () {
                let arr = this.values
                arr.push({
                    value: 0,
                })
                this.setValues(arr)
                this.sparkKey = uuid()
            },
            deleteValue (i) {
                let arr = this.values
                arr.splice(i, 1)
                this.setValues(arr)
                this.sparkKey = uuid()
            },
            changeValue: debounce(function (i, e) {
                let arr = this.values
                arr[i] = { value: e }
                this.setValues(arr)
                this.sparkKey = uuid()
            }, 2000),
        }
    }
</script>

<style lang="sass" scoped>
    .chart-value
        width: 200px
        background: #ecece5
        padding: 0.25rem 0.5rem
        margin: 0.25rem
</style>
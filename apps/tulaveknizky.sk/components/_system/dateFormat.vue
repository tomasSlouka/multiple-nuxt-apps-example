<template>
    <div class="dateformat">
        <span class='tag gray'>
            {{dateFormat(date)}}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        date: String
    },
    data() {
        return {
            // userName: this.$store.state.auth.userData.name,
        }
    },
    methods: {
        dateFormat(date) {
            var date_array = date.split(' ')
            var date = date_array[0].split('-')
            var time = date_array[1]
            var date_day = date[2]
            var date_month = date[1]
            var date_year = date[0]

            var return_string = [date_day, date_month, date_year].join('.')
            return_string = return_string + " " + time

            return return_string
        },
    } 
}
</script>

<style scoped>

</style>

<template>
    <div class="dateformat">
        <span class='tag gray'>
            {{dateFormat()}}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        date: String,
        format: String
    },
    data() {
        return {
            // userName: this.$store.state.auth.userData.name,
        }
    },
    methods: {
        dateFormat() {
            var date_array = this.date.split(' ')
            var date = date_array[0].split('-')
            var time = date_array[1]
            var date_day = date[2]
            var date_month = date[1]
            var date_year = date[0]

            var date_string = [date_day, date_month, date_year].join('.')
            var return_string
            if(this.format === "date") return_string = date_string
            if(this.format === "time") return_string = time
            if(this.format === "datetime") return_string = date_string + " " + time

            return return_string
        },
    } 
}
</script>

<style scoped>

.tag {
    display: inline-block;
    text-align: center;
}
</style>

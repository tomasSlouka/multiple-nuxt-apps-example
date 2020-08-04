<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
            
            <form @submit.prevent='submitForm' class='grid gap-20 '>
                <h3>Choose your time</h3>
                <p>Choose a time when you want to receive messages from your subscibed newsletter every day.</p>
                <div class='grid gap-20 col-2 auto justify-content-start justify-items-start'>
                    <div>
                        <label for="title">Hour</label>
                        <select type="text" name='hour' v-model='hour'>
                            <option value="00">00</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                        </select>
                    </div>
                    <div>
                        <label for="title">Minute</label>
                        <select type="text" name='minute' v-model='minute'>
                            <option value="00">00</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="45">45</option>
                        </select>
                    </div>
                </div>
                <div class="hr"></div>
                <div class='grid col-2 gap-10 auto justify-content-start align-items-center'>
                    <button type='submit' class='cta'>Save changes</button>
                    <p class='info' v-show='submitSuccess'> {{ submitText }} </p>
                </div>
            </form> 
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            submitSuccess: false,
            submitText: 'Saved!',
            hour: this.$store.state.userData.message_time.split(":")[0],
            minute: this.$store.state.userData.message_time.split(":")[1]
        }
    },
    methods: {
        async submitForm() {
            await this.$axios.$put('/api/maylday/user/time', {
                "message_time": this.hour + ':' + this.minute
            })
            .then((response) => {
                console.log(response);
                this.$store.dispatch('setUser');
                this.submitSuccess = true;
                setTimeout(() => this.submitSuccess = false, 4000)
                // this.$router.push('/admin/subscriber/settings')
            }, (error) => {
                console.log(error);
                //this.res = error.response.data.message
            });
        }
    },
}
</script>

<style scoped>

</style>

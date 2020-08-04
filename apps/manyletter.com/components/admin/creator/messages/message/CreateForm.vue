<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">

            <form @submit.prevent.once='submitForm()' class='grid gap-20' autocomplete="off">
                <h3>Create a new message</h3>
                <div class='grid gap-20'>
                    <div>
                        <label for='title'>Message title</label>
                        <input v-model='title' type='text' name='title' placeholder=''/>
                    </div>
                    <div>
                        <label for='description'>Message text</label>
                        <textarea @keyup='charCount()' maxlength="255" type="text" name='description' v-model='description'></textarea>
                        <p>{{charCounter}} / 255</p>
                    </div>
                    <div>
                        <label for='url'>Url link</label>
                        <input v-model='url' type='text' name='url' placeholder=''/>
                    </div>
                    <div>
                        <label for='send_date_at'>Send message in x days from today</label>
                        <select v-model='send_date_at' name='send_date_at' id='send_date_at'>
                            <option value=''></option>
                            <option value='1'>Tomorrow</option>
                            <option value='2'>in 2 days</option>
                            <option value='3'>in 3 days</option>
                            <option value='4'>in 4 days</option>
                            <option value='5'>in 5 days</option>
                            <option value='6'>in 6 days</option>
                            <option value='7'>in 7 days</option>
                        </select>
                    </div>
                    <!-- <div>
                        <label for='tags'>Tags</label>
                        <textarea v-model='tags' type='text' name='tags' placeholder=''></textarea>
                    </div> -->
                </div>
                <div class="hr"></div>
                <div>
                    <button type='submit' class='cta'>Create</button>
                    <nuxt-link tag='button' class='cta white justify-self-start' to='/admin/creator/messages'>Cancel</nuxt-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            title: "",
            description: "",
            url: "",
            send_date_at: "",

            charCounter: 0,
        }
    },
    methods: {
        charCount() {
            this.charCounter = this.description.length;
        },
        async submitForm() {
            await this.$axios.$post('/api/maylday/message', {
                'title': this.title,
                'description': this.description,
                'url': this.url,
                'send_date_at': this.send_date_at,
                'newsletter_id': this.$store.state.userData.newsletter_id,
            })
            .then((response) => {
                console.log(response)
                this.$router.back()
            }, (error) => {
                console.log(error)
            });
        }
    },
}
</script>

<style scoped>

</style>

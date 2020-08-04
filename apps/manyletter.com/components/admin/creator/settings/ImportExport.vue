<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20 locked">
            <p class='note justify-self-start'>Under development</p>
            <h3>Import / Export subscribers</h3>
            <p>You can import your subscribers to ManyLetter and start sending messages immediately. If you ever decide that you want to leave ManyLetter, you can export your subscriber's email addresses.</p>

            <div class='grid gap-20'>
               
                <div>
                    <label for="title">Paste your subscribre's emails here (Emails have to be separated by a comma)</label>
                    <textarea v-model="importSubscribers" type="text" name='description' placeholder=''></textarea>
                </div>
            </div>

            <div class="hr"></div>
            <div>
                <button type='submit' class='cta'>Import subscribres</button>
                <nuxt-link tag='button' class='cta white justify-self-start' to='/admin/creator/settings/export'>Export subscribers</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            importSubscribers: "",
        }
    },
}
</script>

<style scoped>
.token {
    word-wrap: break-word;
}

</style>

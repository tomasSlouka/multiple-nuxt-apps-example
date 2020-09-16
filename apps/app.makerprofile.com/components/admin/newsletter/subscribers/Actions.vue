<template>
    <div class='component grid gap-20'>

        <div class="grid gap-20 col-2 align-items-start">
            <div class="box grid gap-20 justify-items-start">
                <h3>Subscribers tags</h3>
                <p class='small'>Manage subscribers tags.</p>
                <div class="hr"></div>
                <nuxt-link to='/admin/newsletter/messages/create' class='button cta'>Create a new tag</nuxt-link>
            </div>
            <div class="box grid gap-20 justify-items-start">
                <h3>Import subscribers</h3>
                <p class="small">You can import your newsletter subscribers to ManyLetter.</p>
                <div class="hr"></div>
                <nuxt-link to='/admin/newsletter/messages/list' class='button cta'>Import subscribers</nuxt-link>
            </div>
            <div class="box grid gap-20 justify-items-start">
                <h3>Export subscribers</h3>
                <p class="small">You can export all of your subscriber's email addresses and leave ManyLetter platform whenever you want.</p>
                <div class="hr"></div>
                <nuxt-link to='/admin/newsletter/messages/list' class='button cta orange white'>Export subscribers</nuxt-link>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>

</style>

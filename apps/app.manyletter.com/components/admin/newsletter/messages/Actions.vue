<template>
    <div class='component grid gap-20'>

        <div class="grid gap-20 col-2 align-items-start">
            <div class="box grid gap-20 justify-items-start">
                <h3>Create a new message</h3>
                <p class='small'>Start by creating a new message for your newsletter.</p>
                <div class="hr"></div>
                <nuxt-link to='/admin/newsletter/messages/create' class='button cta'>Create a new message</nuxt-link>
            </div>
            <div class="box grid gap-20 justify-items-start">
                <h3>List of all messages</h3>
                <p class="small">Browse all of the messages you have created and detailed metrics for each of them.</p>
                <div class="hr"></div>
                <nuxt-link to='/admin/newsletter/messages/list' class='button cta'>Show all messages</nuxt-link>
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

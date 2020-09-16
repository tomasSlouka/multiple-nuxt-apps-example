<template>
    <div class='component'>
        
        <div class='wrapper'>
            <div class='container-narrow grid gap-20 col-2'>
                <div class='grid gap-20'>
                    <h2>Newsletter messages</h2>
                </div>
                <div class='grid align-items-start justify-items-end'>
                    <nuxt-link to='/admin/newsletter/messages/create' class='button cta'>Create a new message</nuxt-link>
                </div>
                <div class='span-2'>
                    <p class='maxw500'>Browse the list of all of your messages you sent, discover detailed stats about each  message or create a new message.</p>
                </div>
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

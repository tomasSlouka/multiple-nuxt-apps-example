<template>
    <div class='component grid justify-items-start'>
        <div class='box grid gap-20 auto justify-content-start justify-items-start'>
            <h4 class='text-center'>Create a new message</h4>
            <!-- <p class='text-center'>You are one step away of creating a new message for your newsletter. Go on.</p> -->
            <div>
                <nuxt-link to='/admin/creator/messages/message/create' tag='button' class='cta'>Create a new message</nuxt-link>
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

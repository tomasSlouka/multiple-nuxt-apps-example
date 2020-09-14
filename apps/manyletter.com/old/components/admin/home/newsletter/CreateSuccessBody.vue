<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20 justify-items-center">
            <h3>Newsletter created</h3>
            <p class='text-center'>Your newsletter was created. If you want to have your newsletter listed at the front page of ManyLetter as well as in the ManyLetter daily email, your next step should be to create the first message of your new newsletter.</p>
            <div class="hr"></div>
            <div>
                <nuxt-link to='/admin/home' tag='button' class="cta">Back to home</nuxt-link>
                <nuxt-link to='/admin/home/newsletter' tag='button' class="cta">Add more</nuxt-link>
                <nuxt-link to='/admin/creator/dashboard' tag='button' class="cta">Go to newsletter dashboard</nuxt-link>
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

<template>
    <div class="component">

        <div class='container-narrow'>
            <div class="grid gap-20 text-center">
                <h2>Join the newsletter</h2>
                <p>Get actionable tips directly to your inbox.</p>
                <form class='grid justify-self-center gap-10'>
                    <input type="text" name='email' class='text-center' placeholder="What's your email address?">
                    <button type='submit' class='cta black'>Send me tips</button>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
export default {

    // props: ['domainList'],

}
</script>

<style scoped>

.component {
    padding: 1px;
    background-color: #f5f8fc;
}
input {
    background-color: #fff;
}
form {
    width: 100%;
    max-width: 420px;
}

</style>

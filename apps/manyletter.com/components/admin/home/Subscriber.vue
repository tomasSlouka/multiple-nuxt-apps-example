<template>
    <div class='component'>
        <div class='grid gap-20'>
            <div class='grid gap-20 justify-self-start box'>
                <h3>Your subscriptions</h3>

                <div>
                    <button @click.prevent='openSubscriptions()' class='cta'>Enter your newsletter subscriptions</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        async openSubscriptions() {
            this.$store.dispatch('setUser')
            .then(() => {
                this.$router.push('/admin/subscriber/dashboard');
            })
        }
    },
}
</script>

<style scoped>

</style>

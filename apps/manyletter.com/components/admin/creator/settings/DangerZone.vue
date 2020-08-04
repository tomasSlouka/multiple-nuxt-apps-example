<template>
    <div class='component grid gap-20 '>
        <div class="box grid gap-20 danger-zone">
            <h3>Danger zone</h3>
            <div class=''> 
                <button class='cta red' @click.once='deleteButton()' >Delete newsletter</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        async deleteButton() {
            await this.$axios.$delete('/api/maylday/newsletter/'+ this.$store.state.userData.newsletter_id)
            .then((response) => {
                console.log(response);
                this.$router.push({ path: '/admin/home' })
            }, (error) => {
                console.log(error);
            });
        }
    },
}
</script>

<style scoped>
.danger-zone {
    border: 1px solid #d73a4a7c;
}
</style>

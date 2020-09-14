<template>
    <div id="DangerZone" class='grid gap-20'>
        <h3>💥 Danger zone</h3>
        <div class='danger-zone'> 
            <button class='cta red' @click.once='deleteButton()' >Delete message</button>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        async deleteButton() {
            await this.$axios.$delete('/api/maylday/message/'+ this.$route.params.id)
            .then((response) => {
                console.log(response);
                this.$router.back();
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
    border-radius: 4px;
    padding: 20px;
}
</style>

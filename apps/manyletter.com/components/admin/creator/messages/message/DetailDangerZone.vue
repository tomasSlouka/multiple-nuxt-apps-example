<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20 danger-zone">

            <h3>Danger zone</h3>
            <div class=''> 
                <button class='cta red' @click.once='deleteButton()' >Delete message</button>
            </div>

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
                this.$router.push('/admin/creator/messages')
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

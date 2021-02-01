<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <h2>Upravenie objednávky</h2>

                <div class='box-form'>
                    <form @submit.prevent='submitForm()' class='grid gap-30 align-items-start'>
                        
                        <div class='grid gap-20'>
                            <!-- Name -->
                            <div>
                                <label for="name">Názov knihy</label>
                                <input type="text" placeholder="Názov knihy" name="name" v-model="dataDetail.data.name">
                            </div>
                            <!-- Name -->
                        </div>

                        <div class="hr">

                        </div>
                        <div class='justify-self-end grid col-3 auto gap-10 align-items-center'>
                            <div>
                                <p class='success' v-if='submitSuccess'>{{submitText}}</p>
                            </div>
                            <nuxt-link to='/admin/orders' class="button cta red">Zrušiť</nuxt-link>
                            <button type="submit" class="button cta black">Uložiť</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    props: ['dataDetail'],
    data() {
        return {
            submitSuccess: false,
            submitError: false,
            submitText: 'Uložené!',
        }
    },
    methods: {
        async submitForm() {
                await this.$axios.$put('/order', {
                    "id": this.$route.params.id,
                    "name": this.dataDetail.data.name,
                })
                .then((response) => {
                    console.log(response);
                    this.submitSuccess = true;
                    this.submitText = 'Uložené!';
                    setTimeout(() => this.submitSuccess = false, 4000)
                    this.$router.push('/admin/orders')
                }, (error) => {
                    console.log(error);
                });
        },
    },
}
</script>

<style scoped>

</style>

<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <h2>Pridanie novej knižky do skladu</h2>

                <div class='box-form'>
                    <form @submit.prevent='submitForm()' class='grid gap-30 align-items-start'>
                        
                        <div class='grid gap-20'>
                            <!-- Name -->
                            <div>
                                <label for="name">Názov značky</label>
                                <input type="text" placeholder="Názov značky" name="name" v-model="name">
                            </div>
                            <!-- Name -->
                        </div>

                        <div class="hr">

                        </div>
                        <div class='justify-self-end grid col-3 auto gap-10 align-items-center'>
                            <div>
                                <p class='success' v-if='submitSuccess'>{{submitText}}</p>
                            </div>
                            <nuxt-link to='/admin/tags' class="button cta red">Zrušiť</nuxt-link>
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
    data() {
        return {
            submitSuccess: false,
            submitError: false,
            submitText: 'Uložené!',
            id: null,
            name: null,
            created_at: null,
            updated_at: null,
            deleted_at: null,
            created_by: null,
            updated_by: null,
            deleted_by: null,
        }
    },
    methods: {
        async submitForm() {
                await this.$axios.$post('/storage', {
                    "name": this.name,
                })
                .then((response) => {
                    console.log(response);
                    this.submitSuccess = true;
                    this.submitText = 'Uložené!';
                    setTimeout(() => this.submitSuccess = false, 4000)
                    // this.$router.push('/admin/tags/detail/'+ response.id)
                    // this.$router.push('/admin/tags')
                    this.name = ""
                }, (error) => {
                    console.log(error);
                });
        },
    },
}
</script>

<style scoped>

</style>

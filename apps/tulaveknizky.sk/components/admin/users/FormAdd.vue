<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <h2>Nový používateľ</h2>

                <div class='box-form'>
                    <form @submit.prevent='submitForm()' class='grid gap-30 align-items-start'>
                        
                        <div class='grid gap-20'>
                            <!-- Name -->
                            <div>
                                <label for="name">Meno</label>
                                <input type="text" placeholder="Meno" name="name" v-model="name">
                            </div>
                            <!-- Name -->
                            <!-- Surname -->
                            <div>
                                <label for="name">Priezvisko</label>
                                <input type="text" placeholder="Priezvisko" name="surname" v-model="surname">
                            </div>
                            <!-- Surname -->
                            <!-- Nickname -->
                            <div>
                                <label for="name">Prezývka</label>
                                <input type="text" placeholder="Prezývka" name="nickname" v-model="nickname">
                            </div>
                            <!-- Nickname -->
                            <!-- Email -->
                            <div>
                                <label for="name">Email</label>
                                <input type="text" placeholder="Email" name="email" v-model="email">
                            </div>
                            <!-- Level -->
                            <div>
                                <label for="name">Level</label>
                                <select name="level" v-model='level'>
                                    <option value="100">User</option>
                                    <option value="104">Admin</option>
                                </select>
                            </div>
                            <!-- Level -->
                            <p>
                                Novému používateľovi bude zaslaný verifikačný email.
                            </p>
                        </div>

                        <div class="hr">

                        </div>
                        <div class='justify-self-end grid col-3 auto gap-10 align-items-center'>
                            <div>
                                <p class='success' v-if='submitSuccess'>{{submitText}}</p>
                            </div>
                            <nuxt-link to='/admin/users' class="button cta red">Zrušiť</nuxt-link>
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
            surname: null,
            nickname: null,
            email: null,
            level: 100,
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
                await this.$axios.$post('/user', {
                    "name": this.name,
                    "surname": this.surname,
                    "nickname": this.nickname,
                    "email": this.email,
                    "level": this.level,
                })
                .then((response) => {
                    console.log(response);
                    this.submitSuccess = true
                    this.submitText = 'Uložené!'
                    this.name = ""
                    this.surname = ""
                    this.nickname = ""
                    this.email = ""
                    this.level = 100
                    setTimeout(() => this.submitSuccess = false, 4000)
                    // this.$router.push('/admin/tags/detail/'+ response.id)
                    this.$router.push('/admin/users')
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

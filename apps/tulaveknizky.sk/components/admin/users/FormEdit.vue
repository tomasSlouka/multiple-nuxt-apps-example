<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <h2>Upravenie používaľa</h2>

                <div class='box-form'>
                    <form @submit.prevent='submitForm()' class='grid gap-30 align-items-start'>
                        
                        <div class='grid gap-20'>
                            
                            <!-- Name -->
                            <div>
                                <label for="name">Meno</label>
                                <input type="text" placeholder="Meno" name="name" v-model="dataDetail.data.name">
                            </div>
                            <!-- Name -->
                            <!-- Surname -->
                            <div>
                                <label for="surname">Priezvisko</label>
                                <input type="text" placeholder="Priezvisko" name="surname" v-model="dataDetail.data.surname">
                            </div>
                            <!-- Surname -->
                            <!-- Nickname -->
                            <div>
                                <label for="nickname">Prezývka</label>
                                <input type="text" placeholder="Prezývka" name="nickname" v-model="dataDetail.data.nickname">
                            </div>
                            <!-- Nickname -->
                            <!-- Email -->
                            <div>
                                <label for="email">Email</label>
                                <input type="text" placeholder="Email" name="email" v-model="dataDetail.data.email">
                            </div>
                            <!-- Email -->
                            <!-- Level -->
                            <div>
                                <label for="level">Level</label>
                                <select name="level" v-model='dataDetail.data.level'>
                                    <option value="100">User</option>
                                    <option value="104">Admin</option>
                                    <option value="105">Sklad</option>
                                </select>
                            </div>
                            <!-- Level -->
                            <!-- Bio -->
                            <div>
                                <label for="bio">Bio</label>
                                <textarea type="text" placeholder="Bio" name="bio" v-model="dataDetail.data.bio"></textarea>
                            </div>
                            <!-- Bio -->

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
                await this.$axios.$put('/user', {
                    "id": this.$route.params.id,
                    "email": this.dataDetail.data.email,
                    "name": this.dataDetail.data.name,
                    "surname": this.dataDetail.data.surname,
                    "nickname": this.dataDetail.data.nickname,
                    "level": this.dataDetail.data.level,
                    "bio": this.dataDetail.data.bio,
                })
                .then((response) => {
                    console.log(response);
                    this.submitSuccess = true;
                    this.submitText = 'Uložené!';
                    setTimeout(() => this.submitSuccess = false, 4000)
                    this.$router.push('/admin/users')
                }, (error) => {
                    console.log(error);
                });
        },
    },
}
</script>

<style scoped>

</style>

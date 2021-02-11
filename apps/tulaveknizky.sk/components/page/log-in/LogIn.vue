<template>
    <div class='component grid'>
        <div class="box grid auto align-self-start gap-20">
            <div class='grid col-2 auto align-items-center'>
                <h3>Prihlásenie</h3>
                <nuxt-link to='/' class='justify-self-end'><img src="@/assets/img/logo-icon.svg" alt="" class='logo' /></nuxt-link>
            </div>
            <p v-if='from == "kniznica"' class='small'>Ahoj neznámy človek. Veľmi nás teší tvoj záujem o vypožičanie si knižky. Ešte pred tým ako ti ju pošleme, radi by sme vedeli kto si. Prihlás sa alebo si vytvor nový účet a ziskaj prístup k celej knižnej kolekcií.</p>
            <!-- <div class="hr"></div> -->
            <form class="grid gap-10" @submit.prevent='submitForm'>
                <div>
                    <label for="email" class='small gray'>Email</label>
                    <input id="email" name="email" type="text" v-model="email" placeholder='napr. john@snow.sk'>
                </div>

                <button class="cta black" type="submit">Pokračovať</button>
            </form>
            <!-- <div class="hr"></div> -->
            <p class="small gray text-center">Nemáš ešte svoj účet? <nuxt-link to='/registracia'>Zaregistruj sa</nuxt-link>.</p>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            email: '',
            from: this.$route.query.from || '',
        }
    },
    methods: {
        async submitForm() {
            await this.$axios.$post('/auth/code', {
                "email": this.email
            })
            .then((response) => {
                console.log(response);
                this.$router.push('/prihlasenie/code?email=' + encodeURIComponent(this.email) + '&method=' + response.verification_method)
            }, (error) => {
                console.log(error);
                //this.res = error.response.data.message
            });
        }
    },
}
</script>

<style scoped>
.component {
    height: 100%;
    padding: 40px 20px;
}
.box {
    padding: 30px;
    margin: 0px auto;
    max-width: 320px;
    /* max-width: 100%; */

    background-color: #fff;
    border-bottom: 6px solid #eee;
    padding: 20px;
    border-radius: 4px;
}
.logo {
    width: 32px;
    height: 32px;
    /* border-radius: 32px; */
}
</style>

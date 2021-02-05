<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <h2>Detail knižky</h2>
                <div class='grid md-col-2 auto gap-40 justify-content-start'>
                    <div>
                        <img :src='"http://api.qrserver.com/v1/create-qr-code/?data=https://tulaveknizky.sk/qr/"+ dataDetail.data.id +"&size=200x200&margin=20"' alt="">
                    </div>

                    <div class='p20 grid gap-20'>
                        <div>
                            <h3>{{ dataDetail.data.name }}</h3>
                            <p class="small italic">{{ dataDetail.data.author }}</p>
                        </div>
                        <div class='grid col-2 auto gap-20 align-items-center justify-content-start'>
                            <p>Identifikačný kód:</p> 
                            <h2>{{ dataDetail.data.id }}/2021</h2>
                        </div>
                        <div>
                            <p>Stav:</p>
                        </div>
                    </div>
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
                await this.$axios.$put('/stock', {
                    "id": this.$route.params.id,
                    "name": this.dataDetail.data.name,
                })
                .then((response) => {
                    console.log(response);
                    this.submitSuccess = true;
                    this.submitText = 'Uložené!';
                    setTimeout(() => this.submitSuccess = false, 4000)
                    this.$router.push('/admin/stock')
                }, (error) => {
                    console.log(error);
                });
        },
    },
}
</script>

<style scoped>

</style>

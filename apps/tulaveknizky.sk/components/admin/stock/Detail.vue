<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <h2>Detail knižky</h2>
                <div class='grid md-col-2 auto gap-40 justify-content-start'>
                    <div>
                        <img :src='"http://api.qrserver.com/v1/create-qr-code/?data=https://tulaveknizky.sk/qr/"+ dataDetail.data.id +"&size=200x200&margin=20"' alt="">
                    </div>

                    <div class='p20 grid gap-20 align-content-start'>
                        <div>
                            <h3>{{ dataDetail.data.name }}</h3>
                            <p class="small italic">{{ dataDetail.data.author }}</p>
                        </div>
                        <div class="hr"></div>
                        <div class='grid col-2 auto gap-20 align-items-center justify-content-start'>
                            <p>Identifikačný kód:</p> 
                            <h4>{{ dataDetail.data.code }}</h4>
                        </div>
                        <div class='grid col-2 auto gap-20 align-items-center justify-content-start'>
                            <p>Stav:</p>
                            <h4>{{ dataDetail.data.status_name }}</h4>
                        </div>
                        <div class="hr"></div>
                        <div class='grid gap-10 align-items-center justify-content-start'>
                            <p>Zmeniť stav:</p>
                            <div class='tags flex wrap'>
                                <!-- <div v-for='(item) in statusList.data' :key='item.id' class='tags'> -->
                                    <div @click='updateStatus({status_id: item.id, status_name: item.name})' v-for='(item) in statusList.data' :key='item.id' :class='dataDetail.data.status_id != item.id ? "tag" : "tag active"'>{{item.name}}</div>
                                <!-- </div> -->
                            </div>
                            <!-- <button class='cta white m2' v-if='dataDetail.data.status_id != 2'>Objednaná</button>
                            <button class='cta white m2' v-if='dataDetail.data.status_id != 3'>Pripravená na odoslanie</button>
                            <button class='cta white m2' v-if='dataDetail.data.status_id != 4'>V preprave</button>
                            <button class='cta white m2' v-if='dataDetail.data.status_id != 5'>Vypožičaná</button> -->
                        </div>
                    </div>
                </div>

                
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    props: ['dataDetail', 'statusList'],
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
        async updateStatus(data) {
            await this.$axios.$put('/stock', {
                "id": this.$route.params.id,
                "status_id": data.status_id
            })
            .then((response) => {
                this.dataDetail.data.status_id = data.status_id
                this.dataDetail.data.status_name = data.status_name
            }, (error) => {
                console.log(error);
            });
        },
    },
}
</script>

<style scoped>

</style>

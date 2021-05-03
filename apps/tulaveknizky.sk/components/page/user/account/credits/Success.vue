<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <div class='grid gap-20'>
                    <h2>Hurá! Tvoje nekonečné kredity boli navýšené.</h2>
                </div>
                <div class='grid md-col-2 auto justify-content-start gap-10'>
                    
                    <div><nuxt-link to='/kniznica' class='button cta white'>Späť do knižnice</nuxt-link></div>
                    <div><nuxt-link to='/user/books/basket/confirm' class='button cta black'>Dokončiť objednávku</nuxt-link></div>

                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    methods: {
        
    },
}
</script>

<style scoped>
.box {
    background-color: #f7f7f7;
    /* border-top: 6px solid rgba(255,212,1,0.32157); */
    border-bottom: 6px solid #eee;
    padding: 40px;
    border-radius: 4px;
}
.box-2 {
    background-color: #f7f7f7;
    border-bottom: 6px solid rgba(255,212,1,0.32157);
    /* border-bottom: 6px solid #eee; */
    padding: 40px;
    border-radius: 4px;
}
.delivery-img {
    height: 25px;
    border-radius: 0px;
}
</style>

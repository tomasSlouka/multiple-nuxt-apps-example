<template>
    <div class="component">
        
        <div class='container-standard grid gap-20 col-1 auto align-items-center justify-content-center'>

            <div class='grid gap-10'>
                <div class='text-center'>
                    <h2 class='big'>Get started for free</h2>
                    <p class='big'>You are at the bottom of the page. Now is the perfect time to get started for free.</p>
                </div>
                <div class='mt40 text-center'>
                    <nuxt-link to="/sign-up" tag='button' class='button cta white big'>Get started now</nuxt-link>
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.component {
    background-color: #39ac37;
    color: #fff;
    padding: 10px;
}

.container-standard {
    margin-top: 40px;
    margin-bottom: 40px;
}
/* .cta.white {
    padding: 15px 40px;
    font-size: 21px;
} */
</style>

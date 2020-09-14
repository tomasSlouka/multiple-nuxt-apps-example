<template>
    <div class="component">
        
        <div class='container-standard grid gap-20 col-1 auto align-items-center justify-content-center'>

            <div class='grid gap-10'>
                <div class='text-center'>
                    <h2>Get your 20% off</h2>
                    <p class='big'>All who join us at the beginning will get 20% off for a lifetime.</p>
                </div>
                <div class='mt30 grid auto gap-5 xs-col-1 sm-col-2 md-col-2'>
                    <input id='email' type="email" name='email' placeholder='Enter your email...'>
                    <button class='cta'>Get Early Access</button>
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
    background-color: #f2fdfa;
    padding: 10px;
}

.container-standard {
    margin-top: 40px;
    margin-bottom: 40px;
}
</style>

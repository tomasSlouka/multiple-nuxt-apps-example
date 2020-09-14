<template>
    <div class="component">

        <div class="container-narrow mt80 grid gap-60 md-col-2 align-items-center">
            <div class='grid gap-20'>
                <h2 class='maxw450'>Simple pricing.</h2>
                <p class='maxw500'>No hidden fees. You get what you paid for. Every penny converts into credits. You can then use your credits at any time as part of the service for anything.</p>
                <a href='https://app.manyletter.com/sign-up' class='cta button justify-self-start'>Request access</a>
            </div>
            <div class='align-self-end relative show-md'>
                <div class='dots dots1'></div>
                <div class='dots dots2'></div>
                <div class='box'>
                    <div class='h1'>
                        $9/month
                    </div>
                    <div class='grid justify-items-start mt10'>
                        <p>+2000 credits <span class='gray'>(~2000 messages)</span></p>
                        <p>unlock all premium features</p>
                        <p>unlock 3 newsletter templates</p>
                        <p>unlock 3 website templates</p>
                        <p>custom domain</p>
                        <p>unlimited pages</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {

    // props: ['domainList'],

}
</script>

<style scoped>
.component {
    overflow: hidden;
}

.box {
    background-color: #fff;
    z-index: 10;
    position: relative;
    padding: 30px;
    /* box-shadow: 0 0 5px 5px #f3f3f3; */
    border-radius: 4px;
    border: 1px solid #3aac37;
}
.dots {    
    background-image:url('~assets/img/dot.svg');
	background-position: top left;
    background-repeat:repeat;
    background-size: auto;
}

.dots1 {
    position: absolute;
    z-index: 0;
    height: 72px;
    width: 200px;
    left: -29px;
    bottom: -30px;
}
.dots2 {
    position: absolute;
    top: -29px;
    right: -40px;
    z-index: 0;
    height: 104px;
    width: 150px;
}

</style>

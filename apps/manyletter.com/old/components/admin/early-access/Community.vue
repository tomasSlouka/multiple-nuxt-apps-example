<template>
    <div class='component grid gap-60 justify-self-start'>
        <div class="box grid gap-20">
            <h3>Join the community</h3>
            <div class="grid gap-10 col-2 auto justify-content-start">
                <p class="social facebook"><a href="https://www.facebook.com/manylettercom/" target="_blank">Facebook</a></p>
                <p class="social twitter"><a href="https://twitter.com/manylettercom" target="_blank">Twitter</a></p>
                <!-- <p class="social instagram"><ion-icon name="logo-instagram"></ion-icon></p> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box.message {
    border: 1px solid rgba(59,172,55,0.38824);
}
p.social > a {
    background: #fff;
    border-radius: 20px;
    /* height: 40px; */
    /* width: 40px; */
    padding: 5px 20px;
    display: grid;
    justify-items: center;
    align-items: center;
    box-shadow: 0 1px 6px 0 rgba(14,30,37,.12);
    color: #000;
    cursor: pointer;
    font-size: 16px;
    text-decoration: none;
}
p.social.facebook > a:hover {
    color: #3b5998;
}
p.social.twitter > a:hover {
    color: #00acee;
}
p.social.instagram > a:hover {
    color: #E1306C ;
}
ul {
    margin-left: 20px;
}

</style>


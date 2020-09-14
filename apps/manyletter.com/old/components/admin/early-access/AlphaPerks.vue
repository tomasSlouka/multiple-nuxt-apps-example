<template>
    <div class='component grid gap-60'>
        <div class="box grid gap-20">
            <h3>Alpha account perks</h3>
            <ul class='grid gap-10'>
                <li>Alpha badge</li>
                <li>20% lifetime discount on all subscription plans and payments</li>
                <li>1 year access to all features of ManyLetter for all subscribers you will invite</li>
            </ul>
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
p.social {
    background: #fff;
    border-radius: 20px;
    height: 40px;
    width: 40px;
    display: grid;
    justify-items: center;
    align-items: center;
    box-shadow: 0 1px 6px 0 rgba(14,30,37,.12);
    color: #000;
    cursor: pointer;
    font-size: 20px;
}
p.social.facebook:hover {
    color: #3b5998;
}
p.social.twitter:hover {
    color: #00acee;
}
p.social.instagram:hover {
    color: #E1306C ;
}
ul {
    margin-left: 20px;
}

</style>


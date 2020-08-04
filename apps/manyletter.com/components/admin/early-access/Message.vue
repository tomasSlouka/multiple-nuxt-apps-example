<template>
    <div class='component grid gap-60'>
        <div class="box message grid gap-20">
            <h3>Welcome</h3>
            <p>Welcome and thank you for joining ManyLetter. We are so grateful to have you on board. We are working hard to take ManyLetter to the next level. Meanwhile, if you have any questions, do not hesitate and contact our founder Tomas at <a href='mailto:tomas@manyletter.com'>tomas@manyletter.com</a>. He will gladly answer all of your messages.</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

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


<template>
    <div class='component grid gap-60'>
        <div class="box grid gap-20">
            <h3>Subscription portal</h3>
            <p>Copy the link below to navigate your potential subscribers to your newsletter page, where they can subscribe to your newsletter with one click.</p>
            <div class="grid auto gap-40">
                <div class="table grid auto">
                    <div class="table-head">
                        <div>Your newsletter page link</div>
                    </div>
                    <div class="table-row">
                        <div><p class='token small'>https://manyletter.com/admin/subscriber/subscriptions/newsletters/detail/{{ $store.state.userData.newsletter_id }}</p></div>
                    </div>
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
p.token {
  display: table;
    table-layout: fixed;
    width: 100%;
    word-wrap: break-word;
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


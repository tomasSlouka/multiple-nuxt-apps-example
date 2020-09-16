<template>
    <div class='component grid gap-20 col-3 align-items-start'>
        <div class="box grid gap-20 col-2 auto align-items-center">
            <h4>Total</h4>
            <p class='justify-self-end gray'>1060 subscribers</p>
        </div>
        <div class="box grid gap-20 col-2 auto align-items-center">
            <h4>Active</h4>
            <p class='justify-self-end gray'>550 subscribers</p>
            <!-- <span class='font12'>[how to improve?]</span> -->
        </div>
        <div class="box grid gap-20 col-2 auto align-items-center">
            <h4>Unsubscribed</h4>
            <p class='justify-self-end gray'>20 last month</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box {
    border-left: 3px solid #39ac37
}
</style>

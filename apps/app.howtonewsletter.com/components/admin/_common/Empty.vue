<template>
    <div class='component'>
        <div class='box grid gap-20 justify-items-center'>
            <div>
                <img src="@/assets/img/sad-smile.png" alt="">
            </div>
            <p class='text-center'>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['text'],
}
</script>

<style scoped>
img {
    width: 100%;
}
</style>

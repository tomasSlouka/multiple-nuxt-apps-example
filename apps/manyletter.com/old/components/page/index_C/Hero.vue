<template>
    <div class="component">

        <div class="container-narrow mt80">
            <div class='grid gap-20 justify-items-center'>
                <h1 class='text-center'>Start your dream newsletter for less than the price of a book</h1>
                <h3 class='text-center maxw500'>ManyLetter gives you everything you need for just $9 USD per month</h3>
            </div>
        </div>

    </div>
</template>

<script>
export default {

    props: ['usersCount', 'newslettersCount'],

}
</script>

<style scoped>
.container-narrow {
    padding: 60px;
}
img {
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.15);
    max-width: 100%;
}
</style>

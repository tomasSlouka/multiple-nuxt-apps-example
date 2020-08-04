<template>
    <div class="component">

        <div class="container-narrow">
            <div>
                <img src="@/assets/img/hero-image.png" alt="Creator dashboard screenshot" />
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
.component {
    background-color: #39ac370d;
}
.container-narrow {
    padding: 60px;
    padding-top: 0px;
    padding-bottom: 0px;
}
img {
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.15);
    max-width: 100%;
    position: relative;
    top: -40px;
}
</style>

<template>
    <div class="component">
        <div class='container-narrow'>
            <div class='grid col-1 auto justify-content-center relative'>
                <img src="@/assets/img/happy.jpg" alt="ManyLetter make you smile" />
                <div class="play justify-self-center align-self-center grid justify-content-center align-content-center">
                    <ion-icon name="play" class='ml10'></ion-icon>
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
.container-narrow {
    margin-top: 100px;
}
.play {
    position: absolute;
    border: 0px;
    color: #fff;
    background-color: #39ac37;
    color: #39ac37;
    background-color: #fff;
    border-radius: 40px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    padding: 40px;
    font-size: 40px;
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.15);
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.relative:hover > .play {
    -webkit-transform: scale(1.25, 1.25);
    transform: scale(1.25, 1.25);
}
img {
    max-width: 100%;
    box-shadow: 0px 5px 10px rgba(238, 238, 238, 0.6);
    border-radius: 8px;
}
</style>

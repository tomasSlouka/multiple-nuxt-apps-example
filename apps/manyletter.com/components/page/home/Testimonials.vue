<template>
    <div class="component">

        <div class="container-narrow grid gap-40">
            <h2 class='text-center'>You're in good company</h2>
            <div class='grid md-col-3 gap-30 align-items-start justify-content-start'>
                <div class="box grid gap-20">
                    <p>Vestibulum scelerisque ex feugiat eleifend placerat. Proin consequat turpis erat, et aliquam ipsum gravida ut. Praesent feugiat est non congue porttitor. </p>
                    <div class='grid col-2 gap-20 auto align-items-center justify-content-start'>
                        <img src="@/assets/img/avatar.png" alt="" class='avatar' />
                        <div>
                            <h5>Tomas Slouka</h5>
                            <p class="small">Creator of Manyletter</p>
                        </div>
                    </div>
                </div>
                
                <div class="box grid gap-20">
                    <p>Vestibulum scelerisque ex feugiat eleifend placerat. Proin consequat turpis erat, et aliquam ipsum gravida ut. Praesent feugiat est non congue porttitor. </p>
                    <div class='grid col-2 gap-20 auto align-items-center justify-content-start'>
                        <img src="@/assets/img/avatar.png" alt="" class='avatar' />
                        <div>
                            <h5>Tomas Slouka</h5>
                            <p class="small">Creator of Manyletter</p>
                        </div>
                    </div>
                </div>

                <div class="box grid gap-20">
                    <p>Vestibulum scelerisque ex feugiat eleifend placerat. Proin consequat turpis erat, et aliquam ipsum gravida ut. Praesent feugiat est non congue porttitor. </p>
                    <div class='grid col-2 gap-20 auto align-items-center justify-content-start'>
                        <img src="@/assets/img/avatar.png" alt="" class='avatar' />
                        <div>
                            <h5>Tomas Slouka</h5>
                            <p class="small">Creator of Manyletter</p>
                        </div>
                    </div>
                </div>


            </div>

            <div class='logos grid md-col-5 sm-col-3 xs-col-2 gap-60 mt20'>
                <img src="@/assets/img/logo-indiestack.png" alt="" class='logo' />
                <img src="@/assets/img/logo-newsletter-crew.png" alt="" class='logo' />
                <img src="@/assets/img/logo-indiestack.png" alt="" class='logo' />
                <img src="@/assets/img/logo-indiestack.png" alt="" class='logo' />
                <img src="@/assets/img/logo-indiestack.png" alt="" class='logo show-md' />
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.component {
    background-color: #fff;
    padding: 1px;
    /* border-radius: 4px; */
    /* background-color: rgba(57,172,55,.05098); */
}

.avatar {
    border-radius: 40px;
    height: 40px;
    width: 40px;
}

.box {
    border: 1px solid #d6ecd1;
    background-color: #fff;
    padding: 30px;
    border-radius: 4px;
}

.logo {
    filter: grayscale(100%) opacity(30%);
}
</style>

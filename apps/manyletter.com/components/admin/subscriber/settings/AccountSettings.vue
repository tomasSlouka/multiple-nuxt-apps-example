<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
            <h3>Account settings</h3>
            <div class="grid table-wrapper" v-touch:swipe.stop>
                <div class="table grid auto col-3">
                    <div class="table-head">
                        <div>Email</div>
                        <div>Type</div>
                        <div class='text-center'>Last Activity</div>
                    </div>

                    <!-- one row -->
                    <div class="table-row">
                        <div>tomas.slouka@gmail.com</div>
                        <div><span class='tag gray text-center'>personal</span></div>
                        <div class='text-center'>01.01.1991</div>
                    </div>
                </div>
            </div>
            <div class='hr'></div>
            <div>
                <button class="cta">Change email</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>

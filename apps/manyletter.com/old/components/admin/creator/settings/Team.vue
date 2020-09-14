<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
            <h3>Team members</h3>
            <div class="grid table-wrapper">
                <div class="table grid auto col-3">
                    <div class="table-head">
                        <div>Email</div>
                        <div>Type</div>
                        <div class='text-center'>Last Activity</div>
                    </div>

                    <!-- one row -->
                    <div class="table-row">
                        <div>tomas.slouka@gmail.com</div>
                        <div><span class='tag gray text-center'>owner</span></div>
                        <div class='text-center'>01.01.1991</div>
                    </div>

                    <!-- second row -->
                    <div class="table-row">
                        <div>slouka@upforweb.com</div>
                        <div><span class='tag gray text-center'>admin</span></div>
                        <div class='text-center'>01.01.1991</div>
                    </div>

                    <!-- second row -->
                    <div class="table-row">
                        <div>polak@upforweb.com</div>
                        <div><span class='tag gray text-center'>member</span></div>
                        <div class='text-center'>01.01.1991</div>
                    </div>

                </div>
            </div>
            <div class='hr'></div>
            <form @submit.prevent.once='submitForm' class='grid gap-20 '>
                <h4>Add a team member</h4>
                <!-- <p>You can invite as many team members as you want.</p> -->
                
                <div class='grid gap-20'>
                    <div>
                        <label for="title">Email address *</label>
                        <input type="text" name='email' />
                    </div>
                </div>
                <div class="hr"></div>
                <div class='grid col-2 gap-10 auto justify-content-start align-items-center'>
                    <button type='submit' class='cta'>Invite team member</button>
                    <p class='info' v-show='submitSuccess'>Saved!</p>
                </div>
            </form> 
        </div>
    </div>
</template>

<script>
export default {

    // props: ['newsletterData', 'tagList'],

    data() {
        return {
            submitSuccess: false
        }
    },
}
</script>

<style scoped>

</style>

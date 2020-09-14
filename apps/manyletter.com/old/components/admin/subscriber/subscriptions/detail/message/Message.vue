<template>
    <div id='newsletter-Messages' class='grid gap-20'>
        <h3>🧾 Messages</h3>
        <div class='grid table-wrapper justify-items-start'>
            <div class='table grid auto col-4 mb20'>
                <div class="table-head">
                    <div>Status</div>
                    <div>Message Title</div>
                    <div>Sent to</div>
                    <div>Opened by</div>
                </div>
                <!-- one row -->
                <nuxt-link tag='div' v-for="item in messageList.data" :key="item.id" class='table-row pointer' :to="'/admin/creator/newsletter/message/detail/' + item.id">
                    <div><span class='tag orange'>pending...</span></div>
                    <div>{{ item.title }}</div>
                    <div><p class='text-right'><span class='tag gray'>0 / 435</span></p></div>
                    <div><p class='text-right'><span class='tag gray'>0</span></p></div>
                </nuxt-link>




                <!-- one row -->
                <nuxt-link tag='div' class='table-row pointer' to="/admin/creator/newsletter/message/detail">
                    <div><span class='tag orange'>pending...</span></div>
                    <div>How to make a rocket that can fly to space</div>
                    <div><p class='text-right'><span class='tag gray'>0 / 435</span></p></div>
                    <div><p class='text-right'><span class='tag gray'>0</span></p></div>
                </nuxt-link>

                <!-- one row -->
                <div class="table-row">
                    <div><span class='tag yellow'>in progress...</span></div>
                    <div>Story of an astronaut</div>
                    <div><p class='text-right'><span class='tag gray'>234 / 435</span></p></div>
                    <div><p class='text-right'><span class='tag gray'>55</span></p></div>
                </div>

                <div class="table-row">
                    <div><span class='tag green'>complete</span></div>
                    <div>Tesla landed on Mars and aliens was curious</div>
                    <div><p class='text-right'><span class='tag gray'>380 / 380</span></p></div>
                    <div><p class='text-right'><span class='tag gray'>233</span></p></div>
                </div>
                
            </div>
        </div>

        <nuxt-link tag='button' class='cta justify-self-start' to="/admin/creator/newsletter/message/create">Create a new message</nuxt-link>
        
    </div>
</template>

<script>
export default {

    props: ['messageList'],

}
</script>

<style scoped>
.message-title {
    white-space: nowrap; 
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

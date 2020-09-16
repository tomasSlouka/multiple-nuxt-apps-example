<template>
    <div class='component grid gap-20'>
        <div class="filter box grid gap-20">
            <!-- <h3>Filter mesages</h3> -->
            <!-- <h3>List of messages</h3> -->
            <!-- <div class="hr"></div> -->
            <form class='grid gap-20 col-3'>
                <div>
                    <label for="status">Status</label>
                    <select name="status" id="status">
                        <option value="0">Draft</option>
                        <option value="1">Scheduled</option>
                        <option value="2">Sent</option>
                    </select>
                </div>
                <div>
                    <label for="group">Subscribers group</label>
                    <select name="group" id="group">
                        <option value="0">VIP</option>
                        <option value="1">Payed</option>
                        <option value="3">Free</option>
                        <option value="4">New</option>
                    </select>
                </div>
                <button class='cta white align-self-end'>Apply filter</button>
            </form>
            <div>
                <p class="small">Showing {{messageList.count}} messages.</p>
            </div>
        </div>

        <div class='messages box grid'>
            <nuxt-link tag='div' :to="'/admin/creator/messages/message/detail/' + item.id" v-for="item in messageList.data" :key="item.id" class='message bb1 pointer grid gap-20'>
                <div class='grid col-2 auto justify-content-start gap-20'>
                    <div class='text-center pr20 align-self-start'>
                        <p class='h4'>{{item.send_date_at.split("-")[2]}}.{{item.send_date_at.split("-")[1]}}</p>
                        <p class='small'>{{item.send_date_at.split("-")[0]}}</p>
                    </div>
                    <div class='grid gap-10'>
                        <h4>{{ item.title }}</h4>
                        <p class=''>{{ item.description }}</p>
                    </div>
                </div>
            </nuxt-link>                    
        </div>
    </div>
        
</template>

<script>
export default {

    props: ['messageList'],

}
</script>

<style scoped>
.messages.box {
    padding: 0px;
}
.message {
    padding: 30px;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.message:hover {
    -webkit-transform: scale(1.00, 1.00);
    transform: scale(1.00, 1.00);
}
.filter {
    border-left: 3px solid rgb(59 172 55);
}
</style>

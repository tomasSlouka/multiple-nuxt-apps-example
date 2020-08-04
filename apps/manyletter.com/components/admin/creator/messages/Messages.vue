<template>
    <div class='component grid gap-20'>
        <h3>Newsletter messages</h3>
        <div class="grid gap-20">
            <nuxt-link tag='div' :to="'/admin/creator/messages/message/detail/' + item.id" v-for="item in messageList.data" :key="item.id" class='box message pointer grid col-2 auto justify-content-start gap-20'>
                <div class='text-center br1 pr20 align-self-start'>
                    <p class='big strong'>{{item.send_date_at.split("-")[2]}}.{{item.send_date_at.split("-")[1]}}</p>
                    <p class='small'>{{item.send_date_at.split("-")[0]}}</p>
                </div>
                <div class='grid gap-10'>
                    <h3>{{ item.title }}</h3>
                    <p class='thin'>{{ item.description }}</p>
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
.box.message {
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.box.message:hover {
    -webkit-transform: scale(1.02, 1.0ľ);
    transform: scale(1.02, 1.02);
}
</style>

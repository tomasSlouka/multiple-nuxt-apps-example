<template>
    <div class='component grid gap-20'>
        
        <div class='box message grid gap-20'>
            <div class='grid col-2 auto justify-content-start gap-20'>
                <div class='text-center br1 pr20 align-self-start'>
                    <p class='big strong'>{{messageData.send_date_at.split("-")[2]}}.{{messageData.send_date_at.split("-")[1]}}</p>
                    <p class='small'>{{messageData.send_date_at.split("-")[0]}}</p>
                </div>
                <div class='grid gap-10'>
                    <h3>{{ messageData.title }}</h3>
                    <p class='thin'>{{ messageData.description }}</p>
                </div>
            </div>
             <div class='hr'></div>
            <nuxt-link tag='button' class='cta justify-self-start' :to="'/admin/creator/messages/message/edit/' + messageData.id">Edit message</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {

    props: ['messageData'],
    
}
</script>

<style scoped>
/* .avatar {
    background-color: #ccc;
    border-radius: 100px;
    border: 1px solid #ccc;
    height: 80px;
    width: 80px;
    padding: 5px;
}

.avatar div {
    background-color: #eee;
    border-radius: 100px;
    border: 10px solid #fff;
    height: 68px;
    width: 68px;
}


.newsletter-details {
    border: 1px solid #eaeaea;
    padding: 40px;
    border-radius: 4px;
} */
</style>

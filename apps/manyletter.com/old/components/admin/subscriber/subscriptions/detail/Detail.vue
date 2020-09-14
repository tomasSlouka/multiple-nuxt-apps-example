<template>
    <div id="newsletter-Newsletter-Message-Detail">
            
        <div class='grid gap-20'>
            <h3>📐 Message details</h3>
            <div class='newsletter-details grid'>
                <div class='grid gap-20'>
                    <h4 class="title">{{ messageData.title }} </h4>
                    <p class="description">{{ messageData.description }} </p>
                    <p class="category">
                        <span class='tag green'>Design</span>
                        <span class='tag orange'>Web</span>
                        <span class='tag yellow'>UI/UX</span>
                    </p>
                </div>
            </div>
            <nuxt-link tag='button' class='cta justify-self-start' :to="'/admin/creator/newsletter/message/edit/' + messageData.id">Edit details</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {

    props: ['messageData'],
    
}
</script>

<style scoped>
.avatar {
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
}
</style>

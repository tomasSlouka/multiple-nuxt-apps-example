<template>
    <div class='component'>
        
        <div class='container-narrow'>
            <div class='grid auto gap-40 align-content-start align-items-start justify-content-start justify-items-start'> 
                <h2 class=''>Frequently Asked Questions</h2>
                <div 
                v-for='(item, index) in faqs' 
                :key='index'
                class='faq grid gap-10'>
                    <h4 @click='active == index ? active=null : active=index'>{{item.title}}</h4>
                    <p :class='active == index ? "active" : "inactive"'>{{item.text}}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    data () {
        return {
            active: 0,
            faqs: [
                { 
                    title: "How ManyLetter works?",
                    text: "ManyLetter is built around the idea, that subscribers should receive only one email a day, with all of the newsletter messages he/she is subscribed to. So the best way how to describe ManyLetter is to liken it to a daily newspaper with the content that the subscriber likes but in a digital format and the inbox of a subscriber."
                },
                { 
                    title: "How is ManyLetter different from other newsletters services?",
                    text: "One of the main difference against other popular newsletter services is that subscribers are not getting overwhelmed by newsletter messages. On the other hand, you as a creator have access to data about subscribers so you can specifically target a new audience.  (Learn more about differences)"
                },
                { 
                    title: "How can I start using ManyLetter?",
                    text: "You can start using ManyLetter immediately after you create a new account. You just need to copy and paste your special ManyLetter URL link to your website and users can subscribe to your newsletter right away. If a user is already subscriber, he/she will be subscribed automatically after clicking it."
                },
                { 
                    title: "How often can I send a newsletter message with ManyLetter?",
                    text: "Your subscribers have defined time, when they want to receive messages so you can send only one message per day per subscriber."
                },
                { 
                    title: "Can I target a specific group of my subscribers?",
                    text: "Yes, you can target a specific group of your subscribers. For example, you can prepare and send different messages for your active subscribers and passive subscribers or you can also target a specific subscriber and send just one message."
                },
                { 
                    title: "Is there a possibility to reach others than my subscribers?",
                    text: "Yes. ManyLetter will try to suggest all newsletters to all subscribers that have similar preferences so they may find a newsletter that they may fall in love with."
                },
            ]
        }
    },
}
</script>

<style scoped>
    .faq p {
        color: #09053670
    }

    .active {
        display: block;
    }

    .inactive {
        display: none;
    }
</style>

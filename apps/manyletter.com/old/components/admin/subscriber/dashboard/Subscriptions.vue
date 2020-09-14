<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
            <p class='note justify-self-start'>Under development</p>
            <h3>Subscriptions stats</h3>
            <div class="grid xs-col-1 sm-col-2 auto justify-items-start justify-content-start align-items-start gap-40">
                <div class="table grid col-2 auto justify-content-start">
                    <div class="table-row">
                        <div>Active subscriptions</div>
                        <div>{{ statsSubscriptionsData.active_subscriptions_count }}</div>
                    </div>
                    <div class="table-row">
                        <div>Passive subscriptions</div>
                        <div>{{ statsSubscriptionsData.passive_subscriptions_count }}</div>
                    </div>
                    <div class="table-row">
                        <div>Inactive subscriptions</div>
                        <div>{{ statsSubscriptionsData.inactive_subscriptions_count }}</div>
                    </div>
                    <div class="table-row">
                        <div>Total</div>
                        <div>{{ statsSubscriptionsData.total_subscriptions_count }}</div>
                    </div>
                </div>
                <div class="table grid col-2 auto justify-content-start">
                    <div class="table-row">
                        <div>Messages sent to you this month</div>
                        <div>{{ statsSubscriptionsData.messages_received_count }}</div>
                    </div>
                    <div class="table-row">
                        <div>Email recieved this month</div>
                        <div>{{ statsSubscriptionsData.email_received_count }}</div>
                    </div>
                    <div class="table-row">
                        <div>Daily emails</div>
                        <div>{{ statsSubscriptionsData.daily_email_received_count }}</div>
                    </div>

                </div>
            </div>

            <!-- <div>
                <p class='note'>Find out more insights at - <nuxt-link to="/admin/subscriber/insight">Insight page</nuxt-link></p>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    props: ['statsSubscriptionsData'],
}
</script>

<style scoped>

</style>

<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
            <p class='note justify-self-start'>Under development</p>
            <h3>Subscribers stats</h3>
            <div class="grid xs-col-1 sm-col-2 auto justify-items-start justify-content-start align-items-start gap-40">
                <div class="table grid col-2 auto">
                    <div class="table-row">
                        <div>Active subscribers</div>
                        <div>{{ statsSubscribersData.active_subscribers_count }}</div>
                    </div>
                    <div class="table-row">
                        <div>Passive subscribers</div>
                        <div>{{ statsSubscribersData.passive_subscribers_count }}</div>
                    </div>
                    <div class="table-row">
                        <div>Inactive subscribers</div>
                        <div>{{ statsSubscribersData.inactive_subscribers_count }}</div>
                    </div>
                    <div class="table-row">
                        <div>Total</div>
                        <div>{{ statsSubscribersData.total_subscribers_count }}</div>
                    </div>
                </div>

                <div class="table grid col-2 auto">
                    <div class="table-row">
                        <div>New subscribers this month</div>
                        <div>{{ statsSubscribersData.new_subscribers_count_month }}</div>
                    </div>
                    <div class="table-row">
                        <div>Unsubscribes this month</div>
                        <div>{{ statsSubscribersData.unsubscriptions_count_month }}</div>
                    </div>
                </div>
            </div>

            <!-- <div>
                <p class='note'>Find out more insights at - <nuxt-link to="/admin/creator/insight">Insight page</nuxt-link></p>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    props: ['statsSubscribersData'],
}
</script>

<style scoped>

</style>

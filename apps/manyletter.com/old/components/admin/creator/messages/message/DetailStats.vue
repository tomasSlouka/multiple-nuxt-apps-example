<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
                
            <h3>Message stats</h3>
            <div class='grid xs-col-1 sm-col-2 auto justify-items-start justify-content-start align-items-start gap-40'>
                <div class='table grid col-2 auto mb20'>
                    <div class="table-row">
                        <div>Sent to</div>
                        <div>{{ statsMessageData.sent_to_count }} subscribers</div>
                    </div>
                    <div class="table-row">
                        <div>Opened by</div>
                        <div>{{ statsMessageData.opened_by_count }} subscribers</div>
                    </div>
                    <div class="table-row">
                        <div>Open rate</div>
                        <div>{{ statsMessageData.open_rate }}</div>
                    </div>
                    <div class="table-row">
                        <div>Rating</div>
                        <div>{{ statsMessageData.rating }}</div>
                    </div>
                    <div class="table-row">
                        <div>Total views</div>
                        <div>{{ statsMessageData.total_views_count }}</div>
                    </div>
                </div>

                <div class='table grid col-2 auto mb20'>
                    <div class="table-row">
                        <div>Rank based on number of subs</div>
                        <div>{{ statsMessageData.rank_base_total_views }}</div>
                    </div>
                    <div class="table-row">
                        <div>Rank based on average open rate</div>
                        <div>{{ statsMessageData.rank_base_avarage_open_rate }}</div>
                    </div>
                    <div class="table-row">
                        <div>Rank based on average rating</div>
                        <div>{{ statsMessageData.rank_base_avarage_rating }}</div>
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
    props: ['statsMessageData'],
}
</script>

<style scoped>

</style>

<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
            <p class='note justify-self-start'>Under development</p>
            <h3>Newsletter stats</h3>
            <div class="grid xs-col-1 sm-col-2 auto justify-items-start justify-content-start align-items-start gap-40">
                <div class="table grid col-2 auto">
                    <div class="table-row">
                        <div>Messages created</div>
                        <div>{{ statsNewsletterData.messages_created_count }}</div>
                    </div>
                    <div class="table-row">
                        <div>Average open rate</div>
                        <div>{{ statsNewsletterData.messages_avarage_open_rate }}</div>
                    </div>
                    <div class="table-row">
                        <div>Average rating</div>
                        <div>{{ statsNewsletterData.messages_avarage_rating }}</div>
                    </div>
                </div>

                <div class="table grid col-2 auto">
                    <div class="table-row">
                        <div>Rank based on number of subs</div>
                        <div>{{ statsNewsletterData.rank_base_subscribres_count }}</div>
                    </div>
                    <div class="table-row">
                        <div>Rank based on average open rate</div>
                        <div>{{ statsNewsletterData.rank_base_avarage_open_rate }}</div>
                    </div>
                    <div class="table-row">
                        <div>Rank based on average rating</div>
                        <div>{{ statsNewsletterData.rank_base_avarage_rating }}</div>
                    </div>
                </div>
            </div>

            <!-- <div>
                <p class='note'>Manage your newsletter - <nuxt-link to="/admin/creator/newsletter">Newsletter manager</nuxt-link></p>
            </div> -->

        </div>
    </div>
</template>

<script>
export default {
    props: ['statsNewsletterData'],
}
</script>

<style scoped>

</style>

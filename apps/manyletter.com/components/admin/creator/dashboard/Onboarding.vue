<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
            <h3>Newsletter check lists</h3>
            <div class='grid md-col-2 auto gap-30'>
                
                <!-- {{newsletterData}} -->
                <div v-if='newsletterData.title == "" || newsletterData.intro == "" || newsletterData.creator_name == "" || newsletterData.url == "" || newsletterData.avatar === null || newsletterData.cover === null || newsletterData.tags === null || newsletterData.tags == "" || newsletterData.access == "0"' class='grid gap-20 publish-box justify-items-center align-items-center'>
                    <div class='text-center grid gap-10'>
                        <p class='maxw200'>Your newsletter is not active.</p>
                        <nuxt-link to="/admin/creator/settings" tag="button" class='cta'>Go to settings</nuxt-link>
                    </div>
                </div>
                <div v-else class='grid gap-20 publish-box justify-items-center align-items-center'>
                    <div class='grid gap-10 justify-items-center align-items-center'>
                        <img src="@/assets/img/done.svg" alt="" class='maxw100'>
                        <p class='success'>Your newsletter is active</p>
                    </div>
                </div>

                <div class='grid gap-20'>
                    <div class='grid gap-5'>

                        <!-- {{ newsletterData }} -->
                        <div class='grid col-2 gap-20 auto justify-content-start'>
                            <div v-if='newsletterData.title == ""'>❌</div>
                            <div v-else>✔️</div>
                            <div>Set a title</div>
                        </div>
                        <div class='grid col-2 gap-20 auto justify-content-start'>
                            <div v-if='newsletterData.intro == ""'>❌</div>
                            <div v-else>✔️</div>
                            <div>Set a short newsletter intro</div>
                        </div>
                        <!-- <div class='grid col-2 gap-20 auto justify-content-start'>
                            <div v-if='newsletterData.description == ""'>❌</div>
                            <div v-else>✔️</div>
                            <div>Set a newsletter destription</div>
                        </div> -->
                        <div class='grid col-2 gap-20 auto justify-content-start'>
                            <div v-if='newsletterData.creator_name == ""'>❌</div>
                            <div v-else>✔️</div>
                            <div>Set a name of newsletter creator</div>
                        </div>
                        <div class='grid col-2 gap-20 auto justify-content-start'>
                            <div v-if='newsletterData.url == ""'>❌</div>
                            <div v-else>✔️</div>
                            <div>Set the url address to your newsletter webpage</div>
                        </div>
                        <div class='grid col-2 gap-20 auto justify-content-start'>
                            <div v-if='newsletterData.avatar === null'>❌</div>
                            <div v-else>✔️</div>
                            <div>Upload newsletter avatar</div>
                        </div>
                        <div class='grid col-2 gap-20 auto justify-content-start'>
                            <div v-if='newsletterData.cover === null'>❌</div>
                            <div v-else>✔️</div>
                            <div>Upload newsletter cover image</div>
                        </div>
                        <div class='grid col-2 gap-20 auto justify-content-start'>
                            <div v-if='newsletterData.tags == "" || newsletterData.tags === null'>❌</div>
                            <div v-else>✔️</div>
                            <div>Add tags</div>
                        </div>
                        <div class='grid col-2 gap-20 auto justify-content-start'>
                            <div v-if='newsletterData.access == "0"'>❌</div>
                            <div v-else>✔️</div>
                            <div>Set a newsletter visibility</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="hr"></div>
            <div>
                <nuxt-link to="/admin/creator/settings" tag="button" class='cta'>Go to settings</nuxt-link>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    props: ['newsletterData'],
}
</script>

<style scoped>
.publish-box {
    /* border-left: 1px solid #F5F5F5; */
    /* border-radius: 4px; */
    padding: 30px;
}
</style>

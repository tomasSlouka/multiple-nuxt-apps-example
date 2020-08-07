<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
            
            <h3 class='grid gap-20 col-2 auto align-items-center'>
                <span>Admin domain settings</span>
                <span v-if='domainDetail.data.last_online_at !== domainDetail.data.created_at' class='tag gray justify-self-end'>Email verified</span>
                <span v-else class='tag orange justify-self-end'>Email not verified</span>
            </h3>
            <form @submit.prevent='submitForm()' class='grid gap-20 '>
                <div class='grid gap-20 md-col-2 align-items-start'>
                    <div>
                        <!-- {{domainDetail.data.status}} - {{statusOld}} -->
                        <label for="status">Domain status</label>
                        <select name="status" id="status" v-model='domainDetail.data.status'>
                            <option value="0">Not approved</option>
                            <option value="1">Approved</option>
                        </select>
                    </div>
                    <div>
                        <label for="tier">Domain tier</label>
                        <select name="tier" id="tier" v-model='domainDetail.data.tier'>
                            <option value="0">Normal</option>
                            <option value="1">Premium</option>
                        </select>
                    </div>
                </div>
                <div class="hr"></div>
                <div class='grid col-2 gap-10 auto justify-content-start align-items-center'>
                    <button type='submit' class='cta'>Save</button>
                    <p class='info' v-show='submitSuccess'> {{ submitText }} </p>
                    <p class='error' v-show='submitError'> {{ submitText }} </p>
                </div>
            </form> 
        </div>
    </div>
</template>

<script>

export default {
    props: ['domainDetail'],
    data() {
        return {
            submitSuccess: false,
            submitError: false,
            submitText: 'Saved!',
            statusOld: this.domainDetail.data.status
        }
    },
    methods: {
        async submitForm() {
            await this.$axios.$put('/domain/admin', {
                "id": this.$route.params.id,
                "status": this.domainDetail.data.status,
                "statusOld": this.statusOld,
                "tier": this.domainDetail.data.tier,
                "email": this.domainDetail.data.email,
                "name": this.domainDetail.data.name
            })
            .then((response) => {
                console.log(response);
                this.submitSuccess = true;
                this.submitText = 'Saved!';
                this.statusOld = this.domainDetail.data.status;
                setTimeout(() => this.submitSuccess = false, 4000)
                // this.$router.push('/admin/subscriber/settings')
            }, (error) => {
                console.log(error);
                this.submitError = true;
                this.submitText = error.response.data.message;
                setTimeout(() => {
                    this.submitError = false, 
                    this.submitText = ''
                }, 4000)
                // this.res = error.response.data.message
            });
        },
    },
}
</script>

<style scoped>
.user-box {
    border-top: 1px solid #eee;
    padding: 20px 20px;
}
.user-box:hover {
    background-color: rgba(15,176,172,0.025098);
}
.user-box:last-child {
    border-bottom: 1px solid #eee;
}
</style>

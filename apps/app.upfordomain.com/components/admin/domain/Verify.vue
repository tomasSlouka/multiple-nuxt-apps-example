<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
            
            <h3>Domain ownership verification</h3>
            <p>🔨 Under construction</p>
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

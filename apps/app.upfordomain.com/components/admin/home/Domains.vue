<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
            
            <!-- <h3>Domain list</h3> -->
            <!-- <p>Browse the user list. Add new users or change the user info.</p> -->
            <div class=''>
                <div v-for="item in domainList.data" :key="item.id" class="user-box" >
                    <nuxt-link :to='"/admin/domain/detail/"+item.id' tag='div' class="pointer grid gap-20 md-col-4 align-items-center justify-content-space-between">
                        <div class='minw250'>
                            <h3>
                                {{item.name}}
                                <span v-if='item.tier == 1' class='font14'>🔥</span>
                            </h3>
                            <p class='small'>
                                {{item.status == "0" ? "Not approved" : "Approved"}}
                            </p>
                        </div>
                        <div>
                            <label>Renting price</label>
                            <p>${{item.price_renting}}/month</p>
                        </div>
                        <div>
                            <label>Buyout price</label>
                            <p>${{item.price_buyout}}</p>
                        </div>
                        <div>
                            <nuxt-link :to='"/admin/domain/detail/"+item.id' class='button small cta'>Edit details</nuxt-link>
                        </div>
                    </nuxt-link>
                </div>
            </div>
                <!-- <div class="grid table-wrapper justify-items-start">
                <div class="table grid col-4 auto mb20">
                    <div v-for="item in userList.data" :key="item.id" class="table-row" >
                        <div> {{ item.name }} </div>
                        <div> {{ item.email }} </div>
                        <div> {{ item.level }} </div>
                        <div>
                            <p class="grid col-2 gap-5">
                                <button @click.once="removeUser(item.id)" class='cta small'>Edit</button>
                                <button @click.once="removeUser(item.id)" class='cta small red'>Remove</button>
                            </p>
                        </div>
                    </div>
                </div>
                </div> -->

            <!-- <form @submit.prevent='submitForm' class='grid gap-20 '>
                <h4>Add new user</h4>
                <div class='grid gap-20 xs-col-1 lg-col-3 align-items-start'>
                    <div>
                        <label for="title">Name and surname *</label>
                        <input type="text" name='name' v-model='name' />
                    </div>
                    <div>
                        <label for="title">Email address *</label>
                        <input type="text" name='email' v-model='email' />
                    </div>
                    <div>
                        <label for="title">Level *</label>
                        <select name="level" id="level" v-model='level'>
                            <option value="100">User</option>
                            <option value="101">Admin</option>
                        </select>
                    </div>
                </div>
                <div class="hr"></div>
                <div class='grid col-2 gap-10 auto justify-content-start align-items-center'>
                    <button type='submit' class='cta'>Save</button>
                    <p class='info' v-show='submitSuccess'> {{ submitText }} </p>
                    <p class='error' v-show='submitError'> {{ submitText }} </p>
                </div>
            </form>  -->
        </div>
    </div>
</template>

<script>

export default {
    props: ['domainList'],
    data() {
        return {
            // submitSuccess: false,
            // submitError: false,
            // submitText: 'Saved!',
            // level: "100",
            // email: "@svetrovnatek.cz",
            // name: ""
        }
    },
    methods: {
        // async submitForm() {
        //     await this.$axios.$post('/user', {
        //         "email": this.email,
        //         "name": this.name,
        //         "level": this.level
        //     })
        //     .then((response) => {
        //         console.log(response);
        //         this.submitSuccess = true;
        //         this.submitText = 'Saved!';
        //         this.level = "100";
        //         this.email = "@svetrovnatek.cz";
        //         this.name = "";
        //         setTimeout(() => this.submitSuccess = false, 4000)
        //         window.location.reload(true)
        //         // this.$router.push('/admin/subscriber/settings')
        //     }, (error) => {
        //         console.log(error);
        //         this.submitError = true;
        //         this.submitText = error.response.data.message;
        //         setTimeout(() => {
        //             this.submitError = false, 
        //             this.submitText = ''
        //         }, 4000)
        //         //this.res = error.response.data.message
        //     });
            // } else {
                // this.submitError = true;
                // this.submitText = 'Passwords do not match!';
                // setTimeout(() => {
                //     this.submitError = false, 
                //     this.submitText = ''
                // }, 4000)
            // }
        // },
        // async removeUser(email) {
        //     console.log(email)
        //     await this.$axios.$delete('/user', { 
        //         data: {
        //             "email": email,
        //         }
        //     })
        //     .then((response) => {
        //         console.log(response);
        //         window.location.reload(true)
        //         // this.$router.push('/admin/creator/dashboard');
        //     }, (error) => {
        //         console.log(error);
        //         //this.res = error.response.data.message
        //     });
        // },
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
.user-box:first-child {
    border-top: 0px solid #eee;
}
.user-box:last-child {
    border-bottom: 0px solid #eee;
}
</style>

<template>
    <div class="component">
        
        <div class='wrapper'>
            <div class='container-narrow grid gap-20'>
                <h2>Reward system</h2>
                <p>I love to play games. And I think that today apps are annoying. That's why I decided to bring some fun with the reward system for you.</p>
            </div>
        </div>
        <div class='container-narrow grid gap-20'>
            <h3 class='mt40'>Subscribers</h3>
            <h4>Join and get a badge</h4>
            <div class="join-reward grid xs-col-1 sm-col-2 auto justify-content-start mb20">
                <p>📢 Join at Alpha Stage</p>
                <p>unlock alpha badge</p>
                <p>📐 Join at Beta Stage</p>
                <p>unlock beta badge</p>
                <p>🚀 Join at Launch Week</p>
                <p>unlock launch badge</p>
            </div>

            <h4>Invite your friends. Unlock all features</h4>
            <div class="referral-reward grid xs-col-1 sm-col-2 auto justify-content-start">
                <p>1 friend</p>
                <p>unlock all features for a month</p>
                <!-- <p>unlock bronze badge, get +1 month premium plan for free</p> -->

                <p>2 friends</p>
                <p>unlock all features for a year</p>
                <!-- <p>unlock silver badge, get +1 month premium plan for free</p> -->

                <p>3 friends and more</p>
                <p>unlock all features forever</p>
                <!-- <p>unlock golden badge, get +1 month premium plan for free</p> -->

                <!-- <p>4 friends</p> -->
                <!-- <p>unlock platinum badge</p> -->
                <!-- <p>unlock platinum badge, get +1 month premium plan for free</p> -->

                <!-- <p>5 friends</p> -->
                <!-- <p>unlock diamond badge</p> -->
                <!-- <p>unlock diamond badge, get +1 month premium plan for free</p> -->

                <!-- <p>Refer to a creator</p> -->
                <!-- <p>unlock master badge</p> -->

                <p class='xs-span-1 sm-span-2 gray small'>
                    ** A friend is a new email that is verified and actively using ManyLetter.<br>
                    ** Invited friends get 1-month access to all features.
                    <!-- ** To earn the master badge, the creator must subscribe to a plan.<br> -->
                    <!-- ** Refered friend will also receive 1 month premium plan for free. -->
                </p>

            </div>
            <h3 class='mt40'>Creators</h3>
            <h4>Join and get discount</h4>
            <div class="join-reward grid xs-col-1 sm-col-2 auto justify-content-start">
                <p>📢 Join at Alpha Stage</p>
                <p>20% lifetime discount on subscription, unlock alpha badge</p>
                <p>📐 Join at Beta Stage</p>
                <p>15% lifetime discount on subscription, unlock beta badge</p>
                <p>🚀 Join at Launch Week</p>
                <p>10% lifetime discount on subscription, unlock launch badge</p>
            </div>
            <h4>Refer new subscribers after the launch week and get up to 20% discount</h4>
            <div class="referral-reward grid xs-col-1 sm-col-2 auto justify-content-start mb40">
            <p>10 new subscribers</p>
            <p>unlock bronze badge</p>

            <p>30 new subscribers</p>
            <p>unlock silver badge</p>

            <p>90 new subscribers</p>
            <p>unlock golden badge, 5% lifetime discount on subscription </p>

            <p>225 new subscribers</p>
            <p>unlock platinum badge, 10% lifetime discount on subscription</p>

            <p>560 new subscribers</p>
            <p>unlock diamond badge, 15% lifetime discount on subscription</p>

            <p>1400 new subscribers</p>
            <p>unlock master badge, 20% lifetime discount on subscription</p>

            <p class='xs-span-1 sm-span-2 gray small'>
                ** A new subscriber is a new email that is verified and actively using ManyLetter.<br>
                ** A new subscribers get 1-month access to all features.
            </p>
            </div>
        </div>
        <div class='container-narrow grid gap-20'>
            <div class="hr"></div>
            <h3 class='mt40'>Examples</h3>
                <!-- <p>If subscriber refer 8 friends and one creator, he will get 8 + 12 months of the premium plan for free.</p> -->
                <p>If you join as a creator at alpha stage and invite 1400 new subscribers, you will get a 20% + 20% lifetime discount on all subscription plans.</p>
                <p>If you join as creator at alpha stage, invite 1400 new subscribers and subscribe to plan with yearly billing period, you will get a 20% + 20% lifetime discount on subscription and another 20% discount for subscribing to annual billing.</p>
         </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container-narrow {
    margin-top: 40px;
    margin-bottom: 40px;
}

.wrapper {
    background-color: #39ac370d;
    padding: 10px;
}

.join-reward > p {
    padding: 15px;
    background-color: #F9F9FA;
    border: 2px solid #fff;
}
.join-reward > p:nth-child(2n+1) {
    font-weight: 600;

}
/* .join-reward > p:nth-child(1n+3) {
    opacity: .5;
    color: #ccc;
} */

@media only screen and (max-width: 576px) {
    .join-reward  {
        justify-content: stretch;
    }
    .join-reward > p:nth-child(2n+2) {
        margin-bottom: 20px;
    }
}

.referral-reward > p {
    padding: 15px;
    background-color: #F9F9FA;
    border: 2px solid #fff;
}
.referral-reward > p:nth-child(2n+1) {
    font-weight: 600;
}

@media only screen and (max-width: 576px) {
    .referral-reward > p:nth-child(2n+2) {
        margin-bottom: 20px;
}
}

p.gray {
    background-color: #fff;
}
</style>

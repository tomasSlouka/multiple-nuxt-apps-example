<template>
    <div class="component">

        <div class="container-narrow mt80">
            <div class='grid gap-20'>
                <!-- <h2 class='maxw500 h1'>Can't find a free domain name for your next project?</h2> -->
                <!-- <h1 class='maxw450 h1'>Trade your domain names with confidence at the best possible price.</h1> -->
                <h1 class='maxw500 h1'>Domain names marketplace. Free. Private. No middleman</h1>
                <!-- <h1 class='maxw500 h1'>Are you up for a new domain or want to sell your domain portfolio?</h1> -->
                <!-- <h2 class='maxw450 h2'>Make it worth.</h2> -->
                <!-- <h2 class='maxw450 h1'>Can't find an available domain name for your next project?</h2> -->
                <!-- <p class='maxw500'>Consider renting, selling or buying domains with upfordomain—secure way of domain names trading.</p> -->
                <p class='maxw500'>Upfordomain is the only domain name marketplace for startups, and indie hackers. Quickly create your online domain name portfolio and receive offers from buyers worldwide while taking advantage of free service and no middleman. 🤫</p>
                <p>
                    <nuxt-link tag='button' to='/domain/add' class='cta mb10 justify-self-start'>I want to sell my domain</nuxt-link><br> or 
                    <nuxt-link tag='a' to='/domain/browse' class='justify-self-start'>browse all domains and make offer</nuxt-link>
                </p>
            </div>
        </div>

    </div>
</template>

<script>
export default {

    // props: ['domainList'],

}
</script>

<style scoped>
.box-guess {
    border-bottom: 2px solid rgb(255, 236, 199);
    border-right: 2px solid rgb(255, 236, 199);
    border-top: 2px solid rgb(200, 230, 194);
    border-left: 2px solid rgb(200, 230, 194);
    padding: 30px;
    border-radius: 4px;
    background: #fff;
    /* box-shadow: 0px 0px 60px 30px rgba(57,172,55,.05098); */
}

input {
    border: 1px solid rgb(241, 242, 241);
}
.box1 {
    background-color: rgb(252, 247, 237);
    position: absolute;
    width: 200px;
    height: 150px;
    z-index: -1;
    bottom: -25px;
    right: -25px;
    /* border-radius: 8px; */
}
.box2 {
    background-color: rgba(57,172,55,.05098);
    position: absolute;
    width: 100px;
    height: 100px;
    z-index: -1;
    top: -39px;
    left: -29px;
}
.box3 {
    background-color: rgba(57,172,55,.05098);
    position: absolute;
    width: 306px;
    height: 205px;
    z-index: -1;
    top: -12px;
    left: -12px;
}
#guess-button {
    position: absolute;
    right: 4px;
    top: 4px;

    font-size: 12px;
    padding: 10px;
    background-color: #fff;
    color: #39ac37;
    border: 1px solid rgba(59, 172, 55, 0.31);
}
</style>

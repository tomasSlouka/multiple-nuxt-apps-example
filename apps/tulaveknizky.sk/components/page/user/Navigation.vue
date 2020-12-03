<template>
    <div class="component">
        <div class='grid gap-10'>
            <h4>Zobraz mi</h4>
            <div id='filter' class='minw250'>
                <ul>
                    <li><nuxt-link to='/pouzivatel/knihy/kosik' class='grid auto gap-20 col-2 justify-content-space-between'><span>Košík</span><span>(0)</span></nuxt-link></li>
                    <li><nuxt-link to='/pouzivatel/knihy/wishlist' class='grid auto gap-20 col-2 justify-content-space-between'><span>Môj wishlist</span><span>(0)</span></nuxt-link></li>
                    <li><nuxt-link to='/pouzivatel/knihy/vypozicane' class='grid auto gap-20 col-2 justify-content-space-between'><span>Moje vypožičané knihy</span><span>(0)</span></nuxt-link></li>
                    <li><nuxt-link to='/pouzivatel/knihy/rezervovane' class='grid auto gap-20 col-2 justify-content-space-between'><span>Moje rezervované knihy</span><span>(0)</span></nuxt-link></li>
                    <li><nuxt-link to='/pouzivatel/knihy/hodnotene' class='grid auto gap-20 col-2 justify-content-space-between'><span>Moje hodnotenia kníh</span><span>(0)</span></nuxt-link></li>
                </ul>
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
#filter {
    background-color: rgb(247, 247, 247);
    padding: 30px;
    border-bottom: 6px solid rgba(255,212,1,0.32157);
    border-radius: 4px;
}

#filter li {
    list-style: none;
}
#filter li a {
    text-decoration: none;
}
</style>

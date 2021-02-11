<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Knižnica'
            h2='Detail knižky'
        />
        <!-- <Hero 
            :h1='dataDetail.data.author'
            :h2='dataDetail.data.name'
        /> -->
        <Detail
            :dataDetail='dataDetail'
        />
        <Simmilar
            
        />
        <Comments
            
        />
    </div>
</template>

<script>
import Hero from '@/components/page/kniznica/detail/Hero.vue'
import SubNav from '@/components/page/home/SubNav.vue'
import Detail from '@/components/page/kniznica/detail/Detail.vue'
import Comments from '@/components/page/kniznica/detail/Comments.vue'
import Simmilar from '@/components/page/kniznica/detail/Simmilar.vue'

export default {
    layout: 'defaultPage',
        components: {
            SubNav, Hero, Detail, Comments, Simmilar
    },
    data() {
        return {

        }
    },
    async asyncData({ $axios, params }) {
        const [dataDetail] = await Promise.all ([
            $axios.$get('/openbook/' + params.id),
        ])
        return { dataDetail }
    },
}
</script>

<style>

</style>

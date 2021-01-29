<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Administrácia'
            h2='Knižné tituly'
        />
        <FormAdd />
    </div>
</template>

<script>
import Hero from '@/components/admin/_common/Hero.vue'
import SubNav from '@/components/admin/_common/SubNav.vue'
import FormAdd from '@/components/admin/titles/FormAdd.vue'

export default {
    // middleware: ['check-userdata'],
    layout: 'defaultAdmin',
        components: {
            SubNav, Hero, FormAdd
    },
}
</script>

<style>

</style>

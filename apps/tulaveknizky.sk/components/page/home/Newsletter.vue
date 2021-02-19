<template>
    <div class="component">

        <div class='container-standard'>
            <div class="grid gap-20 text-center">
                <h2>Pridaj sa na odber noviniek</h2>
                <p>Z času na čas posielame emailom novinky o knihách, ktoré by ťa mohli zaujimať. Tak sa pridaj.</p>
                <form class='grid justify-self-center gap-10'>
                    <input type="text" name='email' class='text-center' placeholder="Sem napíš svoj email">
                    <button type='submit' class='cta black'>Chcem sa pridať</button>
                </form>
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

.component {
    padding: 1px;
    background-color: #fbf7ed;
    /* background-color: #f5f8fc; */
}
input {
    background-color: #fff;
}
form {
    width: 100%;
    max-width: 420px;
}

</style>

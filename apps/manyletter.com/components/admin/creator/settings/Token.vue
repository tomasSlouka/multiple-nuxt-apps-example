<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
            <h3>API token</h3>
            <p>This is your special token for access to ManyLetter API. Use it to programmatically check if the email address is in the ManyLetter and collect your subscribers.</p>

            <div class="grid xs-col-1 sm-col-2 auto gap-40">
                <div class="table grid col-2 auto">
                    <div class="table-row">
                        <div>Token</div>
                        <div><p class='token small'>kybTNnYnU#g>N#y32O LuZE_O6dAO[am#*iY,#2`Z&t>_5I(u,E-jI>OEPq[9ZmM</p></div>
                    </div>
                </div>
            </div>
            <div class="hr"></div>
            <div> 
                <button class="cta">Generate new token</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.token {
    word-wrap: break-word;
}

</style>

<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <h3>Podobné knižky</h3>

                <div class="box grid gap-40 align-content-start align-items-start md-col-3 auto">
                    <p>Nenašli sa žiadne podobné knižky.</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    // props: ['dataDetail'],
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}
</script>

<style scoped>
.container-standard {
    /* border: 1px solid rgba(216, 215, 215, 0.24); */
    padding: 10px;
}
.box {
    background-color: #f7f7f7;
    /* border-top: 6px solid rgba(255,212,1,0.32157); */
    border-bottom: 6px solid #eee;
    padding: 40px;
    border-radius: 4px;
}

img {
    border-radius: 20px;
    max-height: 340px;
}
</style>

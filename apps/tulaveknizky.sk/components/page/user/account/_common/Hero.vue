<template>
    <div class="component">
        <div class="container-hero grid">
            <div class='grid justify-items-start'>
                <h3 class='h3'>{{h1}}</h3>
                <h1 class='h1' v-if='h2'>{{h2}}</h1>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
  props: {
    h1: String,
    h2: String,
  }
}
</script>

<style scoped>
.component {
    padding: 1px;
    background-color: #ffd40140;
    border-bottom: 10px solid #ffd401;
}
</style>

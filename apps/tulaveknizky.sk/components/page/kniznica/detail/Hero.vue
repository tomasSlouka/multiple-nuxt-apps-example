<template>
    <div class="component">
        <div class="container-hero grid">
            <div class='grid justify-items-start'>
                <div class='h3' v-if='h1'>{{h1}}</div>
                <div class='h1' v-if='h2'>{{h2}}</div>
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

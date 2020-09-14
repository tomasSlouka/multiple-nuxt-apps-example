<template>
    <div id='header'>
        <div class='container'>
            <Topbar @sidenavToggle="displaySidebar = !displaySidebar"/>
            <Sidebar :show="displaySidebar" @close="displaySidebar = false"/>
        </div>
    </div>
</template>

<script>
import Topbar from '@/components/page/_common/Topbar.vue'
import Sidebar from '@/components/page/_common/Sidebar.vue'

export default {
  components: {
    Topbar, Sidebar
  },
  data() {
    return {
      displaySidebar: false
    }
  }
}
</script>

<style scoped>
    .container {
        padding-bottom: 0px;
        box-shadow: 0 0.125rem 0.125rem rgba(0,0,0,.1);
    }
</style>

<template>
    <div id='header'>
        <div class='container'>
            <Topbar @sidenavToggle="displaySidebar = !displaySidebar"/>
            <Sidebar :show="displaySidebar" @close="displaySidebar = false"/>
        </div>
    </div>
</template>

<script>
import Topbar from '@/components/admin/_common/TopbarCreator.vue'
import Sidebar from '@/components/admin/_common/SidebarCreator.vue'

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
    }
</style>

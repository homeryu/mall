<template>
  <div id="category">
      <NavBar :style="{backgroundColor:''}"></NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
    name:'category',
    components:{
      NavBar,
    }
}
</script>

<style scoped>

</style>
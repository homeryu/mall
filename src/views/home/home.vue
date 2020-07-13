<template>
  <div id="home">
      <NavBar :style="{backgroundColor:'var(--color-high-text)'}">
        <div slot="center">购物车</div>
      </NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
    name:'home',
    components:{
      NavBar,
    }
}
</script>

<style scoped>

</style>
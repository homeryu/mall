<template>
  <div class="NavBar">
      <div class="left">
          <slot name="left"></slot>
      </div>
      <div class="center">
          <slot name="center"></slot>
      </div>
      <div class="right">
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name:'NavBar',
}
</script>

<style scoped>
.NavBar{
    height: 44px;
    line-height: 44px;
    box-shadow: 0px 1px 1px rgb(100, 100, 100, 0.8);
    display: flex;
    text-align: center;
}
.center{
    flex: 1;
    color: white;
}
.left{
    width: 64px;
}
.right{
    width: 64px;
}
</style>
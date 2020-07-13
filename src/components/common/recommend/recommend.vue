<template>
  <div class="rview">
      
          <div><slot name='comend-image'></slot></div>
        <p :style="{fontSize:14+'px'}"><slot name="comend-title"></slot></p> 
      
  </div>
</template>

<script>

export default {
    name:'recommend',
   
}
</script>

<style scoped>
    .rview{
        flex: 1;
        margin: 0 8px;
        width: 20%;
        text-align: center;
    }
    a{
        display: inline-block;
    }
    img{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    p{
        /* font-size: 14px; */
        line-height: 28px;
    }
</style>
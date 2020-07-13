<template>
  <div id="Swiper" @mouseenter="this.autoStop" @mouseleave="autoStart">
    <!-- 图片区域 -->
      <div class="swiper-wrap" :style="{
        width:this.banners.length+'%',
        marginLeft:-this.index*100+'%'
      }" >
        <a :href="item.link" v-for="(item,i) in banners" :key="i"> 
          <img :src="item.image" alt="">
        </a> 
      </div>
    <!-- 小圆点区域 -->
    <ul>
      <li  :class="{
        active:i===index
      } " v-for="(item,i) in banners" :key="i" @click="index = i"></li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'Swiper',
    props:{
        banners:{
            type:Array,
            require:true, 
        }
    },
    components:{

    },
    data(){
        return{
          index:0,//表示当前显示第几张
          timer:null,
        }
    },
    created(){
      this.autoStart();
    },
    mounted(){
    
    },
    destroyed(){
      this.autoStop();
    },
    methods:{
      //开始自动切换
    autoStart(){
       if(this.timer){
        return
      }
     this.timer = setInterval(() => {
          this.index = (this.index + 1) % this.banners.length;
        }, 2000);
      },
       //停止自动切换
      autoStop(){
      clearInterval(this.timer);
      this.timer=null;
    },
    },
   
    
   
}
</script>

<style scoped>
    #Swiper{
        position: relative;
        overflow: hidden;
    }
    .swiper-wrap{
        display: flex;
        flex-direction: row;
    }
    .swiper-wrap a{
      display: inline-block;
    }
    .swiper-wrap img{
        display: inline-block;
        width: 375px;
        height: 100%;
    }
    #Swiper ul{
      width: 100px;
      height: 20px;
      position: absolute;
      bottom: 10px;
      left: 50%;
      margin-left: -50px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
   ul li{
      list-style: none;
      width: 12px;
      height:12px;
      border-radius: 12px;
      background-color: #ccc;
      cursor: pointer;
    }
    #Swiper .active{
      background-color: blue!important;
    }
</style>
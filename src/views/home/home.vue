<template>
  <div id="home">
      <NavBar :style="{backgroundColor:'var(--color-high-text)'}">
        <div slot="center">购物车</div>
      </NavBar>
      <Swiper :banners="banners"> </Swiper>
      <RecommendBar :recommends='recommends'></RecommendBar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar';
import {getHomeMultidata} from '@/network/home.js';
import Swiper from '../../components/common/swiper/swiper.vue';
import RecommendBar from '../../components/content/RecommendBar'
export default {
    name:'home',
    components:{
       NavBar,
       Swiper,
       RecommendBar,
    },
    data(){
      return{
        banners:[],
        recommends:[],
        keywords:[],
      }
    },
   
    created(){
      //1.请求多个数据
      getHomeMultidata().then(res=>{
        this.banners = res.data.data.banner.list,
        this.recommends = res.data.data.recommend.list,
        this.keywords = res.data.data.keywords.list,
        console.log(res.data.data)
      })
    }
}
</script>

<style scoped>

</style>
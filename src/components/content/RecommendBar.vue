<template>
  <div id="RecommendBar">
        <RecommendSlot>
            <Recommend v-for='(item,i) in recommends' :key='i'>
                    <div slot="comend-image"><a :href="item.link"><img :src="item.image" alt=""></a></div>
                    <p slot="comend-title">{{item.title}}</p>    
            </Recommend>
      </RecommendSlot> 
  </div>
</template>

<script>
import Recommend from '../common/recommend/recommend.vue';
import RecommendSlot from '../common/recommend/recommendSlot';
export default {
    name:'RecomendBar',
    props:{
         recommends:{
            type:Array,
            required:true,
        }
    },
    components:{
        Recommend,
        RecommendSlot
    }
}
</script>

<style scoped>

</style>
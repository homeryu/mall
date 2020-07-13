<template>
  <div class="recommendView">
     
      <Recommend :recommends="recommends"> 
      </Recommend>  
  </div>
</template>

<script>
import Recommend from '../../../components/common/recommend/recommend'
export default {
    name:'recommendView',
    components:{
        Recommend,
    },
    props:{
        recommends:{
            type:Array
        }
    },
    data(){
       return{

       }
    }
}
</script>

<style scoped>
   
    
</style>
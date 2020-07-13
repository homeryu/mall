<template>
   <div id="tab-bar-item" @click='itemClick'>
       <div v-if="isActive"><slot name="item-icon"></slot></div>
       <div v-else><slot name="item-icon-active"></slot></div>
       <div :class='{active:!isActive}'><slot name="item-text"></slot></div>
    </div>
     
</template>

<script>
export default {
    name:'tabbarItem',
    props:{
       path : String
    },
    data(){
        return{
            // isActive:true,
        }
    },
    computed:{
        isActive(){
            return  this.$route.path.indexOf(this.path)===-1
        }
      
    },
    methods:{
        itemClick(){
            this.$router.push(this.path)
            console.log(this.$route.path.indexOf(this.path)===-1)
        }
        
    }
}
</script>

<style scoped>
#tab-bar-item{
        flex: 1;
    }
 #tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 2px;
    }
    .active{
        color: red;
    }
</style>
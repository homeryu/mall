<template>
     <div id="tab-bar">
         <slot></slot>
     </div>
</template>

<script>
export default {
    name:'tabBar',
    components:{

    }
}
</script>

<style scoped>
    #tab-bar{
        width: 100%;
        height: 49px;
        background-color:#f6f6f6;
        position: fixed;
        bottom: 0;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        text-align: center;
       
        align-items: center;
    }
</style>
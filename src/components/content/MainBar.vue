<template>
  <div id="MainBar">
      <router-view></router-view>
      <TabBar>
      <tabBarItem path='/home'>
         <div slot="item-icon"><img src="@/assets/image/tabbar/home.svg" alt=""></div>
          <div slot="item-icon-active"><img src="@/assets/image/tabbar/home_active.svg" alt=""></div>
          <div slot="item-text">首页</div>    
      </tabBarItem>
      <tabBarItem path='/category'>
         <div slot="item-icon"><img src="@/assets/image/tabbar/category.svg" alt=""></div>
         <div slot="item-icon-active"><img src="@/assets/image/tabbar/category_active.svg" alt=""></div>
          <div slot="item-text">分类</div>    
      </tabBarItem>
      <tabBarItem path='/cart'>
         <div slot="item-icon"><img src="@/assets/image/tabbar/cart.svg" alt=""></div>
         <div slot="item-icon-active"><img src="@/assets/image/tabbar/cart_active.svg" alt=""></div>
          <div slot="item-text">购物车</div>    
      </tabBarItem>
      <tabBarItem path='/profile'>
         <div slot="item-icon"><img src="@/assets/image/tabbar/profile.svg" alt=""></div>
         <div slot="item-icon-active"><img src="@/assets/image/tabbar/profile_active.svg" alt=""></div>
          <div slot="item-text">我的</div>    
      </tabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from '../common/tabbar/tabbar'
import tabBarItem from '../common/tabbar/tabbarItem'
export default {
    name:'MainBar',
    components:{
        TabBar,
        tabBarItem
    }
}
</script>

<style scoped>

</style>
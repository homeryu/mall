<template>
  <div id="app">
    <MainBar></MainBar>
  </div>
    
 
</template>

<script>
 import MainBar from './components/content/MainBar';
 
export default {
  name: 'App',
  components: {
   MainBar
  },
  data(){
    return{
      datas:'',
    }
  },
  
}
</script>

<style>
@import './assets/css/base.css';

</style>

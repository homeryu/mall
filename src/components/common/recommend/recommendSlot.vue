<template>
  <div class="resommendSlot">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'recommendSlot'
}
</script>

<style scoped>
.resommendSlot{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        border-bottom: 10px solid #ccc;
        margin-top: 10px;
        padding-bottom: 30px;
}
</style>
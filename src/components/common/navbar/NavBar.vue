<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>

  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    box-shadow: 0px 2px 1px rgba(100,100,100,0.2);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .left,
  .right{
    width: 60px;
  }
  .center{
    flex: 1;/*将剩余空间全部占据*/
    text-align: center;
  }

</style>

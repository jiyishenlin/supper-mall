<template>
  <div class="back-top">
    <img src="~assets/img/home/top.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 5px;
    bottom: 55px;
    z-index: 10;
  }
  .back-top img{
    width: 30px;
    height: 30px;
    background-color: #ffffff;
    border: 1px solid #f4f4f4;
    border-radius: 15px;
  }
  .is-active{
    display: block;
  }
  .no-active{
    display: none;
  }
</style>

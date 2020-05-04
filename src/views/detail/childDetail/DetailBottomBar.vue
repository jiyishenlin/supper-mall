<template>
  <div class="bottom-bar">
    <div class="item">
      <img src="~assets/img/detail/service.svg" alt="">
      <div>客服</div>
    </div>
    <div class="item">
      <img src="~assets/img/detail/shop.svg" alt="">
      <div>店铺</div>
    </div>
    <div class="item">
      <img src="~assets/img/detail/collect.svg" alt="">
      <div>收藏</div>
    </div>
    <div class="item">
      <div class="item-car" @click="addToCart">加入购入车</div>
    </div>
    <div class="item">
      <div class="item-buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods:{
      addToCart(){
        this.$emit("addToCart")
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    width: 100%;
    height: 49px;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    text-align: center;
    display: flex;
  }
  .item{
    flex: 1;
  }
  .item img{
    width: 24px;
    height: 24px;
    margin-top: 5px;
    margin-bottom: 2px;
  }
  .item-car,
  .item-buy{
    line-height: 49px;
  }
  .item-car{
    background-color: gold;
  }
  .item-buy{
    color: #ffffff;
    background-color: #ff8198;
  }
</style>

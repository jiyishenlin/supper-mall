<template>
  <div class="shop-info" v-if="shopInfo !== null">
    <div class="shop-logo">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-desc">
      <div class="shop-item1">
        <div class="shop-desc-item1">
          <div>{{shopInfo.cSells}}</div>
          <div>总销量</div>
        </div>
        <div class="shop-desc-item2">
          <div>{{shopInfo.cGoods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shop-item2">
        <div class="shop-desc-item3">
          <div>{{shopInfo.score[0].name}} {{shopInfo.score[0].score}}</div>
          <div>{{shopInfo.score[1].name}} {{shopInfo.score[1].score}}</div>
          <div>{{shopInfo.score[2].name}} {{shopInfo.score[2].score}}</div>
        </div>
        <div class="shop-desc-item4">
          <div><span v-if="!shopInfo.score[0].isBetter" class="low">低</span><span v-else class="height">高</span></div>
          <div><span v-if="!shopInfo.score[1].isBetter" class="low">低</span><span v-else class="height">高</span></div>
          <div><span v-if="!shopInfo.score[2].isBetter" class="low">低</span><span v-else class="height">高</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopInfo",
    props:{
      shopInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .shop-logo{
    width: 100%;
    height: 100px;
    padding-top: 20px;
    padding-left: 10px;
  }
  .shop-logo img{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #cccccc;
  }
  .shop-logo span{
    padding-left: 10px;
  }
  .shop-desc{
    width: 100%;
    height: 70px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 10px;
    font-size: 10px;
    display: flex;
    border-bottom: 5px solid #f4f4f4;
  }
  .shop-item1{
    font-size: 16px;
    flex: 1;
    width: 50%;
    display: flex;
    border-right: 1px solid #f4f4f4;
  }
  .shop-desc-item1,
  .shop-desc-item2{
    width: 25%;
    text-align: center;
    flex: 1;
    padding-top: 10px;
  }

  .shop-item2{
    width: 50%;
  }
  .shop-desc-item3{
    padding-left: 30%;
    width: 80%;
    float: left;
  }
  .shop-desc-item4{
    width: 10%;
    float: left;
    color: #ffffff;
  }
  .shop-desc-item3 div,
  .shop-desc-item4 div{
    padding-bottom: 5px;
  }
  .low{
    background-color: #42b983;
  }
  .height{
    background-color: #ff5777;
  }
</style>

<template>
  <div class="title-info" v-if="goodInfo !== null">
    <div class="good-title">{{goodInfo.title}}</div>
    <div class="good-price">
      <span class="newPrice">{{goodInfo.price}}</span>
      <span class="oldPrice">{{goodInfo.oldPrice}}</span>
      <span class="desPrice">{{goodInfo.discountDesc}}</span>
    </div>
    <div class="good-column">
      <div v-for="item in goodInfo.columns" class="good-column-item">
        {{item}}
      </div>
    </div>
    <div class="good-service">
      <div v-for="item in goodInfo.services" class="good-service-item">
        <img :src="item.icon" alt=""><span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TitleInfo",
    props:{
      goodInfo:{
        type:Object,
        default:{}
      }
    },created() {

    }
  }
</script>

<style scoped>
  .good-title{
    padding: 5px;
    font-size: 14px;
    font-weight: bolder;
  }
  .good-price{
    padding-left: 5px;
    height: 30px;
    line-height: 30px;
  }
  .newPrice{
    font-size: 16px;
    font-weight: bolder;
    color: #ff5777;
  }
  .oldPrice{
    padding-left: 2px;
    padding-right: 5px;
    font-size: 10px;
    text-decoration: line-through;
  }
  .desPrice{
    color: #ffffff;
    font-size: 12px;
    font-weight: bolder;
    background-color: #ff5777;
    border-radius: 5px;
  }
  .good-column{
    display: flex;
    font-size: 12px;
    border-bottom: 1px solid #f4f4f4;
    border-top: 1px solid #f4f4f4;
    padding: 5px;
  }
  .good-column-item{
    flex: 1;
  }
  .good-service{
    font-size: 12px;
    padding: 5px 5px;
    height: 50px;
    border-bottom: 5px solid #f4f4f4;
  }
  .good-service-item{
    float: left;
  }
  .good-service-item img{
    width: 10px;
    height: 10px;
  }
</style>

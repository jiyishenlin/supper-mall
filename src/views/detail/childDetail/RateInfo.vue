<template>
  <div id="rate-info" v-if="rateInfo !== null">
    <span>评论</span>
    <hr/>
    <div v-for="item in rateInfo.list">
      <div class="userInfo">
        <img :src="item.user.avatar" alt="">
        <span>{{item.user.uname}}</span>
      </div>
      <div class="bodyInfo">
        <span v-for="bodyInfo in item.extraInfo">
          {{bodyInfo}}
        </span>
        <span>{{item.style}}</span>
        <div>{{item.content}}</div>
      </div>
      <img class="image" :src="img" alt="" v-for="img in item.images">
    </div>
  </div>
</template>

<script>
  export default {
    name: "RateInfo",
    props:{
      rateInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  #rate-info{
    padding: 5px 10px;
    border-bottom: 5px solid #f4f4f4;
  }
  .userInfo img{
    width: 30px;
    height: 30px;
  }
  .bodyInfo span{
    font-size: 12px;
  }
  .image{
    width: 50px;
    height: 50px;
  }
</style>

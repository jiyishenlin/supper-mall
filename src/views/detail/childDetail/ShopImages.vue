<template>
  <div class="shop-images" v-if="shopImages !== null">
    <div class="desc">{{shopImages.desc}}</div>
    <div v-for="item in shopImages.items" :key="item">
      <img :src="item" alt="" @load="imageLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopImages",
    props:{
      shopImages:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
        count:0
      }
    },
    methods:{
      imageLoad(){
        this.count ++;
        if(this.count === this.shopImages.items.length){
          this.$emit("imageLoad")
        }
      }
    }
  }
</script>

<style scoped>
  .desc{
    font-size: 12px;
    padding: 15px 5px;
  }
  img{
    width: 100%;
  }
</style>

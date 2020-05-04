<template>
  <div class="good-list-item" @click="goodClick">
    <img :src="resrc" @load="imgLoad" />
    <div class="good-info">
      <p>{{good.title}}</p>
      <span class="price">{{good.price}}</span>
      <span class="collect">{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      good:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      resrc(){
        if(this.good.show == undefined){
          return this.good.image
        }else{
          return this.good.show.img
        }

      }
    },
    methods: {
      imgLoad(){
        this.$bus.$emit('goodImgLoad1')
      },
      goodClick(){
        this.$router.push('/detail/'+this.good.iid)
      }
    }
  }
</script>

<style scoped>
  .good-list-item{
    width: 48%;
    padding-bottom: 40px;
    position: relative;
  }
  .good-list-item img {
    width: 100%;
    border-radius: 5px;
  }
  .good-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .good-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .good-info .price {
    color:var(--color-high-text);
    margin-right: 20px;
  }
  .good-info .collect {
    position: relative;
  }
  .good-info .collect ::before{
    content: '';
    position: absolute;
    left: -15px;
    top:-1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/home/cfav.svg") 0 0/14px 14px;
  }
</style>

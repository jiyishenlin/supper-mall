<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props:{
      recommends:{
        type:Array,
        default:[]
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding-top: 10px;
    padding-bottom: 20px;
    border-bottom: 8px solid #f4f4f4;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img {
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }
</style>

<template>
  <div class="wrapper">
    <ul class="content">
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Category",
    data(){
      return{
        scroll:null
      }
    },
    mounted() {
      this.scroll = new BScroll('.wrapper',{
        probeType:3,//实时监听滚动的位置
        pullUpLoad: true//实现上啦加载更多
      })

      this.scroll.on('scroll',(position)=>{
        console.log(position);
      })

      this.scroll.on('scroll',()=>{

      })
    }
  }
</script>

<style scoped>
  .wrapper{
    width: 100%;
    height: 400px;
    overflow: hidden;
    background-color: #42b983;
  }
</style>

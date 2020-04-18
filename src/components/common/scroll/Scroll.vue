<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      }
    },
    data(){
      return{
        scroll:null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:this.probeType,//实时监听滚动的位置
        pullUpLoad: {
          threshold: -70
        },//实现上啦加载更多
        click:true
      })
      //监听滚动的位置
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })
      //监听上拉加载
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    },
    methods:{
      scrollTop(x,y,time=300){
        this.scroll.scrollTo(x,y,time);
      },
      finishPullUp(){
        this.scroll.finishPullUp();
      },
      refresh(){
        this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div id="home" >
    <back-top @click.native="backTopClick" :style="isShow"/>
    <tab-control :class="{tabControlIsHidden:istabControlIsHidden}"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 :titles="titles"/>
    <NavBar class="nav-bar"><div slot="center">购物街</div></NavBar>
    <scroll class="scroll" ref="homeScroll" @scroll="isScroll" @pullingUp="loadMore" :probeType="3">
      <Swiper :banners="banners" @onImageLoad="onImageLoad"/>
      <Recommend :recommends="recommends"/>
      <Feature/>
      <tab-control @tabClick="tabClick"
                   ref="tabControl2"
                   :titles="titles"/>
      <goods-list :goods="showGoods"/>
    </scroll>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Swiper from './childcomps/Swiper'
  import Recommend from './childcomps/Recommend'
  import Feature from './childcomps/Feature'
  import TabControl from "components/content/TabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import {getHomeMultidata,getHomeGoods} from "network/home";

  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";
  import {debounce} from "common/utils";

  export default {
    name: "Home",
    components:{
      NavBar,
      Swiper,
      Recommend,
      Feature,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return {
        banners: [],
        recommends:[],
        titles:['流行','新款','精选'],
        type:['pop','new','sell'],
        currType: 'pop',
        goods:{
          pop:{page:0,list:[]},
          new:{page:0,list:[]},
          sell:{page:0,list:[]}
        },
        position:0,
        offsetTop:0,
        scrollY:0
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currType].list
      },
      isShow(){
        return -this.position > 400 ? {display: 'block'} : {display: 'none'}
      },
      istabControlIsHidden(){
        return -this.position > this.offsetTop ? true : false
      }
    },
    destroyed() {
      //销毁
    },
    activated() {
      //活动
      this.$refs.homeScroll.scrollTop(0,this.scrollY,0)
      this.$refs.homeScroll.refresh()
    },
    deactivated() {
      //不活动，离开当前页
      this.scrollY = this.$refs.homeScroll.getScrollY()

    },
    created() {
      this.getHomeMultidata()
      for(let i=0;i<this.type.length;i++){
        this.getHomeGoods(this.type[i])
      }
    },
    mounted() {
      const refresh = debounce(this.$refs.homeScroll.refresh,50)
      //函数作为参数时不能加括号，否则就是函数的返回值作为参数
      this.$bus.$on('goodImgLoad',() => {
        refresh()
      })
    },
    methods:{
      /**
       * 下面的是事件监听
       */

      tabClick(index){
        this.currType = this.type[index]
        this.$refs.tabControl1.currIndex = index
        this.$refs.tabControl2.currIndex = index
      },
      backTopClick(){
        this.$refs.homeScroll.scrollTop(0,0);
      },
      isScroll(position){
        this.position  = position.y
      },
      loadMore(){
        this.getHomeGoods(this.currType)
        this.$refs.homeScroll.refresh()
      },
      onImageLoad(){
        this.offsetTop = this.$refs.tabControl2.$el.offsetTop
      },
      /**
       *下面的是网络请求
       */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        }).catch(res => {
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        }).catch(res =>{

        })
      }
    }
  }
</script>

<style scoped>
  .nav-bar{
    height: 44px;
    line-height: 44px;
    background-color: var(--color-tint);
    color: white;
  }
  .tabControlIsHidden{
    position: fixed;
    top: 44px;
    left: 0;
    z-index: 9;
  }

  .scroll{
    overflow: hidden;
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>

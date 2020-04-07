<template>
  <div id="home">
    <NavBar><div slot="center">购物街</div></NavBar>
    <Swiper :banners="banners"/>
    <Recommend :recommends="recommends"/>
    <Feature/>
    <tab-control class="tabControl"
                 @tabClick="tabClick"
                 :titles="titles"/>
    <goods-list :goods="showGoods"/>
    <ul>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
      <li>jingxuan</li>
    </ul>
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

  export default {
    name: "Home",
    components:{
      NavBar,
      Swiper,
      Recommend,
      Feature,
      TabControl,
      GoodsList
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
        }
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currType].list
      }
    },
    created() {
      this.getHomeMultidata()
      for(let i=0;i<this.type.length;i++){
        this.getHomeGoods(this.type[i])
      }
    },
    methods:{
      /**
       * 下面的是事件监听
       */
      tabClick(index){
        this.currType = this.type[index]
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
        }).catch(res =>{

        })
      }
    }
  }
</script>

<style scoped>
  .tabControl{
    position: sticky;
    top:44px;
    z-index: 9;
  }
</style>

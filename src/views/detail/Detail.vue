<template>
  <div id="detail" v-if="shopImages != null">
    <detail-nav-bar @navBarClick="navBarClick" ref="detailnavbar" />
    <scroll class="detail-scroll" ref="detailScroll" @scroll="isScroll" @pullingUp="pullingUp" :probeType="3">
      <detail-swiper class="detail-swiper" :images="images"/>
      <title-info :goodInfo="goodInfo"/>
      <shop-info :shopInfo="shopInfo"/>
      <shop-images ref="shopImages" :shopImages="shopImages" @imageLoad="imageLoad"/>
      <item-params ref="itemParams" :itemParams="itemParams"/>
      <rate-info ref="rateInfo" :rateInfo="rateInfo"/>
      <goods-list ref="recommendGood" :goods="goods"/>
      <foot :footDisplay="footDisplay"/>
    </scroll>
    <DetailBottomBar @addToCart="addCart"/>
    <back-top @click.native="backTopClick" :style="isShow"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childDetail/DetailNavBar";
  import DetailSwiper from "./childDetail/DetailSwiper";
  import Scroll from "components/common/scroll/Scroll";
  import TitleInfo from "./childDetail/TitleInfo";
  import ShopInfo from "./childDetail/ShopInfo";
  import ShopImages from "./childDetail/ShopImages";
  import ItemParams from "./childDetail/ItemParams";
  import RateInfo from "./childDetail/RateInfo";
  //import RecommendGood from "components/content/recommend/RecommendGood";
  import GoodsList from "components/content/goods/GoodsList";
  import Foot from "components/common/foot/Foot";
  import BackTop from "components/content/backTop/BackTop";
  import DetailBottomBar from "./childDetail/DetailBottomBar";

  import {debounce} from "common/utils";

  import {getGoodDetail,
    getRecommend,
    GoodInfo,
    shopInfo,
    itemParams,
    shopImages,
    rateInfo
  } from 'network/detail';

  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      TitleInfo,
      ShopInfo,
      ShopImages,
      ItemParams,
      RateInfo,
      //RecommendGood,
      GoodsList,
      Foot,
      BackTop,
      DetailBottomBar,
      Scroll
    },
    data(){
      return{
        iid:null,
        images:[],
        goodInfo:null,
        shopInfo:null,
        shopImages:null,
        itemParams:null,
        rateInfo:null,
        goods:null,
        position:0,
        footDisplay:false,
        index0:30,
        index1:0,
        index2:0,
        index3:0,
        positionY:[],
        currIndex:0
      }
    },
    computed:{
      isShow(){
        return -this.position > 400 ? {display: 'block'} : {display: 'none'}
      }
    },
    created() {
      this.iid = this.$route.params.iid
      this.getGoodDetail(this.iid)
      this.getRecommend()

    },
    methods:{
      addCart(){
        //获取商品信息
        let product = {}
        product.image = this.shopImages.items[0];
        product.title = this.GoodInfo.title;
        product.desc  = this.shopImages.desc;
        product.price = this.GoodInfo.price;
        product.iid   = this.iid;
        //将商品加入购物车
      },
      navBarClick(index){
        switch (index) {
          case 0:
            this.$refs.detailScroll.scrollTop(0,-this.index0,200);
            break;
          case 1:
            this.$refs.detailScroll.scrollTop(0,-this.index1,200);
            break;
          case 2:
            this.$refs.detailScroll.scrollTop(0,-this.index2,200);
            break;
          case 3:
            this.$refs.detailScroll.scrollTop(0,-this.index3,200);
            break;
        }
      },
      pullingUp(){
        this.footDisplay = true
        this.$refs.detailScroll.refresh()
      },
      isScroll(position){
        this.position  = position.y

        /*let length = this.positionY.length
        for(let i=0;i<length;i++){
          if(this.currIndex !== i && ((i<length-1 && this.position >= this.positionY[i] &&
            this.position < this.positionY[i+1]) || (i === length-1 && this.position >= this.positionY[i]))){
            //this.currIndex = i;
            this.$refs.detailnavbar.currIndex = i;
          }
        }*/
        let top;
        let now = this.$refs.detailnavbar.currIndex
        if( -this.position < this.index1){
          top = 0
          //this.$refs.detailnavbar.currIndex = 0
        }else if(-this.position >= this.index1 && -this.position < this.index2){
          //this.$refs.detailnavbar.currIndex = 1
          top = 1
        }else if(-this.position >= this.index2 && -this.position < this.index3){
          //this.$refs.detailnavbar.currIndex = 2
          top = 2
        }else if(-this.position >= this.index3){
          //this.$refs.detailnavbar.currIndex = 3
          top = 3
        }
        if(top !== now){
          this.$refs.detailnavbar.currIndex = top
        }
      },
      backTopClick(){
        this.$refs.detailScroll.scrollTop(0,-30);
      },
      imageLoad(){
        this.$refs.detailScroll.refresh();

        this.positionY.push(30)
        this.positionY.push(this.$refs.itemParams.$el.offsetTop)
        this.positionY.push(this.$refs.rateInfo.$el.offsetTop)
        this.positionY.push(this.$refs.recommendGood.$el.offsetTop)
        this.index1 = this.$refs.itemParams.$el.offsetTop
        this.index2 = this.$refs.rateInfo.$el.offsetTop
        this.index3 = this.$refs.recommendGood.$el.offsetTop
      },
      /**网络数据请求*/
      getGoodDetail(id){
        getGoodDetail(id).then(res => {
          const data = res.result
          this.images = data.itemInfo.topImages
          this.goodInfo = new GoodInfo(data.itemInfo,data.columns,data.shopInfo.services)
          this.shopInfo = new shopInfo(data.shopInfo)
          this.shopImages = new shopImages(data.detailInfo);
          this.itemParams = new itemParams(data.itemParams)
          this.rateInfo = new rateInfo(data.rate)

        })
      },
      getRecommend(){
        getRecommend().then(res => {
          this.goods = res.data.list
        })
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  #detail{
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .detail-scroll{
    overflow: hidden;
    position: absolute;
    top: 35px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>

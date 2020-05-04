<template>
  <div >
    <IcSlider :autoplay="3000" class="swiper">
      <IcSliderItem v-for="item in images" :key="item">
          <img :src="item" @load="onImageLoad"/>
      </IcSliderItem>
    </IcSlider>
  </div>
</template>

<script>
  import IcSlider from 'components/common/swiper/slider'
  import IcSliderItem from 'components/common/swiper/slider-item'
  export default {
    name: "DetailSwiper",
    components:{
      IcSlider,
      IcSliderItem
    },
    props:{
      images:{
        type:Array,
        default:[]
      }
    },
    data(){
      return{

      }
    },
    methods:{
      onImageLoad(){

      }
    }
  }
</script>

<style scoped>
  .swiper {
    height: 300px;
    margin-top: 35px;
    overflow: hidden;
  }
</style>

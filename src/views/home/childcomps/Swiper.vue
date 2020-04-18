<template>
  <div class="swiper">
    <IcSlider :autoplay="3000">
      <IcSliderItem v-for="items in banners" :key="items.image">
        <a :href="items.link">
          <img :src="items.image" @load="onImageLoad"/>
        </a>
      </IcSliderItem>
    </IcSlider>
  </div>
</template>

<script>
  import IcSlider from 'components/common/swiper/slider'
  import IcSliderItem from 'components/common/swiper/slider-item'
  export default {
    name: "Swiper",
    components: {
      IcSlider,
      IcSliderItem
    },
    props:{
      banners:{
        Type:Array,
        default:[]
      }
    },
    data(){
      return {
        isLoad: false
      }
    },
    methods: {
      onImageLoad(){
        if(!this.isLoad){
          this.$emit('onImageLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>

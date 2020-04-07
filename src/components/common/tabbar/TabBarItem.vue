<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="styleActive"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path:String,
      activeColor:{
        Type:String,
        default:'#d4237a'
      }
    },
    data(){
      return {

      }
    },
    computed:{/*计算属性是属性，使用时不用加小括号*/
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1/*$route指向当前活跃的路由*/
      },
      styleActive(){
        return this.isActive ? {color:this.activeColor} : {}/*动态绑定样式*/
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;/*公司常用高度*/
    font-size: 12px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 5px;
    margin-bottom: 2px;

  }

</style>

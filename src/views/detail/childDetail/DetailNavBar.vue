<template>
  <div class="detail-nav-bar">
    <nav-bar class="nav-bar-detail">
      <div slot="left" class="nav-bar-back" @click="backClick">
        <img class="backImg" src="~assets/img/detail/back.svg" alt="">
      </div>
      <div slot="center" class="nav-bar-title">
        <div v-for="(item,index) in title" class="nav-bar-title-item" @click="setIndex(index)">
          <span :class="{activeStyle: index === currIndex}">{{item}}</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components:{
      NavBar
    },

    data(){
      return{
        title:['商品','参数','评论','推荐'],
        currIndex:0
      }
    },
    computed:{

    },
    methods:{
      backClick(){
        this.$router.back()
      },
      setIndex(index){
        this.currIndex = index
        this.$emit('navBarClick',index)
      }
    }
  }
</script>

<style scoped>
  .nav-bar-detail{
    height: 35px;
    line-height: 35px;
    font-size: 12px;
    background-color: white;
  }
  .nav-bar-title{
    display: flex;
  }
  .nav-bar-title-item{
    flex: 1;
  }
  .nav-bar-back{
    margin-left: 10px;
  }
  .backImg{
    width: 30px;
    height: 30px;
  }
  .activeStyle{
    color:#ff8198;
  }
</style>

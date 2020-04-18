<template>
  <div class="tabControl">
    <div v-for="(item,index) in titles"
         class="tabControl-item">
      <span :class="{active: index === currIndex}"
            @click="tabClick(index)">
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default:[]
      }
    },
    data(){
      return {
        currIndex: 0
      }
    },
    methods:{
      tabClick(index){
        this.currIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tabControl{
    width: 100%;
    height: 44px;
    display: flex;
    text-align: center;
    line-height: 40px;
    background-color: #ffffff;
  }
  .tabControl-item {
    flex: 1;
  }
  .tabControl .tabControl-item span {
    padding: 5px;
  }
  .active{
    color:#ff5777;
    border-bottom: 2px solid #ff5777;
  }
</style>

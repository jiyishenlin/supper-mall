<template>
  <div id="item-params" v-if="itemParams !== null">
    <span>参数</span>
    <div class="info">
      <span>{{itemParams.infoKey}}</span>
      <hr/>
      <div v-for="(set,index) in itemParams.infoSet" :key="index">
        <span>{{set.key}}：{{set.value}}</span>
      </div>
    </div>
    <div class="rule">
      <span>{{itemParams.ruleKey}}</span>
      <hr/>
      <div v-for="(table,index) in itemParams.ruleTables" :key="index">
        <div v-for="item in table">
          <span>{{item}}</span>
        </div>
      </div>
      <span class="disclaimer">{{itemParams.ruleDisclaimer}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ItemParams",
    props:{
      itemParams:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  #item-params{
    padding: 5px 10px;
    border-bottom: 5px solid #f4f4f4;
  }
  .info > span{
    font-size: 16px;
    color: #ff8198;
  }
  .info > div > span{
    font-size: 12px;
  }
  .rule > span{
    font-size: 16px;
    color: #ff8198;
  }
  .rule > div > div > span{
    font-size: 12px;
  }
  .rule .disclaimer{
    font-size: 12px;
  }
</style>

<template>
  <div id="tip" :class="{isDisplay:!footDisplay}" >
    <span>亲，没有内容了哦</span>
  </div>
</template>

<script>
  export default {
    name: "Foot",
    props: {
      footDisplay: {
        type: Boolean,
        default() {
          return false
        }
      }
    }
  }
</script>

<style scoped>
  #tip{
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #f4f4f4;
  }
  .isDisplay{
    display: none;
  }
</style>

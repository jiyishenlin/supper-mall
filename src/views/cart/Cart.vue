<template>
  <nav-bar><div slot="center">购物车</div></nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "Cart",
    components: {
      NavBar
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
</style>

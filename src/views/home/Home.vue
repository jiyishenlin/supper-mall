<template>
  <NavBar id="home">
    <div slot="center">购物车</div>
  </NavBar>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  export default {
    name: "Home",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  #home{
    color: white;
    background-color: var(--color-tint);
  }
</style>

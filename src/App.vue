<template>
  <div id="app">
    <div class="nav">
      <router-link to="/doggyNFT"
        ><van-button type="primary">doggyNFT</van-button></router-link
      >
      <router-link to="/barkNFT"
        ><van-button type="primary">barkNFT</van-button></router-link
      >
    </div>
    <router-view />
  </div>
</template>
<style lang="stylus" scoped>
body,#app {
  background rgb(255, 243, 224)
}
.nav {
  text-align center
  padding 30px 0
  a {
    margin-right 20px
  }
}
</style>


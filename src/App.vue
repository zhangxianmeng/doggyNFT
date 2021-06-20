<template>
  <div id="app">
    <div class="nav" v-if="!isProd">
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
<script>
export default {
  data() {
    return {
      isProd: process.env.NODE_ENV === 'production',
    }
  },
}
</script>
<style lang="stylus">
body {
  background rgb(255, 243, 224)
}
</style>
<style lang="stylus" scoped>
.nav {
  text-align center
  padding 30px 0
  a {
    margin-right 20px
  }
}
</style>


<template>
  <div id="app">
    <div class="go-top" @click="goTop">
      <van-icon name="back-top" />
    </div>
    <!-- <div class="nav" v-if="!isProd">
      <router-link to="/doggyNFT"
        ><van-button type="primary">doggyNFT</van-button></router-link
      >
      <router-link to="/barkNFT"
        ><van-button type="primary">barkNFT</van-button></router-link
      >
    </div> -->
    <router-view />
  </div>
</template>
<script>
import Vue from 'vue'
import { Button } from 'vant'
import { Icon } from 'vant'

Vue.use(Icon)
Vue.use(Button)
export default {
  data() {
    return {
      isProd: process.env.NODE_ENV === 'production',
    }
  },
  methods: {
    goTop() {
      let nowTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop // 获取当前滚动条位置
      if (nowTop > 0) {
        window.requestAnimationFrame(this.goTop)
        window.scrollTo(0, nowTop - nowTop / 5)
      }
    },
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
.go-top {
  position fixed
  bottom 10px
  right 10px
  background #fff
  width 40px
  height @width
  border-radius 50%
  display flex
  justify-content center
  align-items center
  font-size 30px
  font-weight 600
}
</style>


import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'doggyNFT',
  },
  {
    path: '/doggyNFT',
    name: 'doggyNFT',
    component: () => import(/* webpackChunkName: "home" */ '../views/doggyNFT.vue')
  },
  {
    path: '/barkNFT',
    name: 'barkNFT',
    component: () => import(/* webpackChunkName: "test" */ '../views/barkNFT.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router

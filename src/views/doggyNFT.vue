<template>
  <div :class="isPC ? 'pc' : 'h5'">
    <transition name="slide-left">
      <div class="form-wrapper" v-show="isShowFilter || isPC">
        <div class="form">
          <van-field name="check" label="Collectible value">
            <template #input>
              <van-checkbox-group
                v-model="checkCollectibleValueList"
                direction="horizontal"
              >
                <van-checkbox
                  v-for="item in attrs.CollectibleValueList"
                  :key="item.name"
                  :name="item.name"
                  shape="square"
                  >{{ item.name }}</van-checkbox
                >
              </van-checkbox-group>
            </template>
          </van-field>
          <van-field name="check" label="Breed">
            <template #input>
              <van-checkbox-group
                v-model="checkBreedList"
                direction="horizontal"
              >
                <van-checkbox
                  v-for="item in attrs.BreedList"
                  :key="item.name"
                  :name="item.name"
                  shape="square"
                  >{{ item.name }}</van-checkbox
                >
              </van-checkbox-group>
            </template>
          </van-field>
          <van-field name="check" label="Color">
            <template #input>
              <van-checkbox-group
                v-model="checkColorList"
                direction="horizontal"
              >
                <van-checkbox
                  v-for="item in attrs.ColorList"
                  :key="item.name"
                  :name="item.name"
                  shape="square"
                  >{{ item.name }}</van-checkbox
                >
              </van-checkbox-group>
            </template>
          </van-field>
          <van-field name="check" label="Accessory">
            <template #input>
              <van-checkbox-group
                v-model="checkAccessoryList"
                direction="horizontal"
              >
                <van-checkbox
                  v-for="item in attrs.AccessoryList"
                  :key="item.name"
                  :name="item.name"
                  shape="square"
                  >{{ item.name }}</van-checkbox
                >
              </van-checkbox-group>
            </template>
          </van-field>
          <!-- <van-field name="check" label="Price">
          <template #input>
            <van-checkbox-group v-model="checkPriceList" direction="horizontal">
              <van-checkbox
                v-for="item in attrs.PriceList"
                :key="item.name"
                :name="item.name"
                shape="square"
                >{{ item.name }}</van-checkbox
              >
            </van-checkbox-group>
          </template>
        </van-field> -->
          <!-- <div class="btn-wrapper">
          <router-link to="/doggyNFT"
            ><van-button type="primary">doggyNFT</van-button></router-link
          >
        </div> -->
        </div>
        <p v-if="isPC" class="total" style="">
          Total : {{ filterDoggyList.length }} Doggy NFTs
        </p>
        <div @click="closeMenu" class="close-menu" v-show="!isPC">
          <van-icon name="clear" />
        </div>
        <div class="my-address" v-show="!isPC">
          <p class="talk">
            <span>如果站点对您有所帮助，可以请作者喝杯咖啡 </span>
            <img src="../assets/cute.jpg" alt="" />
            <span>（Like my work? Here's my BSC address）</span>
          </p>
          <h4>BSC 钱包地址：</h4>
          <p class="address">
            <span>{{ address }}</span>
            <van-button
              v-clipboard:copy="address"
              v-clipboard:success="onCopy"
              size="small"
              type="primary"
              >复制</van-button
            >
          </p>
        </div>
      </div>
    </transition>
    <!-- h5菜单 -->
    <div @click="openMenu" class="menu" v-show="!isPC && !isShowFilter">
      <van-icon name="bars" />
    </div>
    <!-- pc悬浮框 -->
    <transition name="height">
      <div
        :class="isShowFixed ? 'open-status' : 'close-status'"
        class="fixed-wrapper"
        v-show="isPC"
      >
        <div class="ct" v-show="isShowFixed">
          <div @click="closeFixed" class="close">
            <van-icon name="minus" />
          </div>
          <p class="talk">
            <span>如果站点对您有所帮助，可以请作者喝杯咖啡 </span>
            <img src="../assets/cute.jpg" alt="" />
            <span>（Like my work? Here's my BSC address）</span>
          </p>
          <h4>BSC 钱包地址：</h4>
          <p class="address">
            <span>{{ address }}</span>
            <van-button
              v-clipboard:copy="address"
              v-clipboard:success="onCopy"
              size="small"
              type="primary"
              >复制</van-button
            >
          </p>
          <h4>BSC 钱包地址二维码：</h4>

          <p class="qrcode">
            <img src="../assets/bsc.png" alt="" />
          </p>
        </div>

        <div @click="openFixed" class="giving" v-show="!isShowFixed">
          <van-icon name="plus" />
          <span>打赏作者</span>
        </div>
      </div>
    </transition>

    <div class="content">
      <div class="doggy-list" v-if="filterDoggyList.length">
        <div class="item" v-for="item in filterDoggyList" :key="item.id">
          <div class="pic">
            <img v-lazy="item.imageUrl" alt="" />
          </div>
          <div class="title">Crypto Doggy # {{ item.nftId }}</div>
          <div class="attrs">
            <p>
              <span>Price:</span>
              <span style="color: red; font-size: 20px"
                >{{ parseInt(item.price) }} Doggy</span
              >
            </p>
            <p>
              <span>Breed:</span>
              <span>{{ item.attributes.breed }} </span>
            </p>
            <p>
              <span>Color:</span>
              <span>{{ item.attributes.color }} </span>
            </p>
            <p>
              <span>Accessory:</span>
              <span>{{ item.attributes.accessoryType }} </span>
            </p>
            <p>
              <span>Collectible value:</span>
              <span>{{ item.attributes.collectibleValue }} </span>
            </p>
            <p>
              <span>Rare:</span>
              <span>{{ item.attributes.rare }} </span>
            </p>
          </div>
        </div>
      </div>
      <div class="no-data" v-if="!filterDoggyList.length">
        <img src="../assets/no-data.svg" alt="" />
        <p>no-data</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field } from 'vant'
import { RadioGroup, Radio } from 'vant'
import { Toast } from 'vant'
import { Checkbox, CheckboxGroup } from 'vant'
import { Lazyload } from 'vant'
import { Pagination } from 'vant'
import { Icon } from 'vant'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
Vue.use(Icon)
Vue.use(Pagination)
Vue.use(Lazyload, {
  loading: require('../assets/logo.png'),
})
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Field)
Vue.use(Toast)
import axios from 'axios'
import {isPC} from '@/assets/js/utils'
export default {
  name: 'App',
  components: {},
  data() {
    return {
      address: '0x2cE760c6166D4B8876C23EC1A8F28c0F9e5bC48b', //我的钱包地址
      checkCollectibleValueList: [],
      checkBreedList: [],
      checkColorList: [],
      checkAccessoryList: [],
      checkPriceList: [],
      attrs: {
        CollectibleValueList: [
          {
            name: '1',
          },
          {
            name: '2',
          },
          {
            name: '3',
          },
          {
            name: '4',
          },
          {
            name: '6',
          },
          {
            name: '7',
          },
          {
            name: '8',
          },
          {
            name: '14',
          },
        ],
        BreedList: [
          {
            name: 'Chihuahua',
          },
          {
            name: 'Collie',
          },
          {
            name: 'Bulldog',
          },
          {
            name: 'Huskie',
          },
          {
            name: 'Beagle',
          },
          {
            name: 'Basset-Hound',
          },
          {
            name: 'Pug',
          },
          {
            name: 'Terrier',
          },
          {
            name: 'Shih-Tzu',
          },
          {
            name: 'Shiba-Inu',
          },
          {
            name: 'Gold-Retriever',
          },
        ],
        ColorList: [
          {
            name: 'Original-Colours',
          },
          {
            name: 'Mixed-Colours',
          },
        ],
        AccessoryList: [
          {
            name: 'Bow-Tie',
          },
          {
            name: 'Facncy-Hat',
          },
          {
            name: 'Ball-Cap',
          },
          {
            name: 'Reading-Glasses',
          },
          {
            name: 'Scarf',
          },
          {
            name: 'Goggles',
          },
          {
            name: 'Toque',
          },
          {
            name: 'Glasses',
          },
          {
            name: 'None',
          },
        ],
        PriceList: [
          {
            name: 'up',
          },
          {
            name: 'down',
          },
        ],
      },
      doggyList: [],
      pagation: {
        page: 1,
        size: 500,
        total: 888,
      },
      isShowFilter: false,
      isShowFixed: true,
    }
  },
  computed: {
    isPC() {
      return isPC()
    },
    filterDoggyList() {
      return (
        this.doggyList.filter((item) => {
          return (
            (!this.checkCollectibleValueList.length ||
              this.checkCollectibleValueList.includes(
                item.attributes.collectibleValue
              )) &&
            (!this.checkBreedList.length ||
              this.checkBreedList.includes(item.attributes.breed)) &&
            (!this.checkColorList.length ||
              this.checkColorList.includes(item.attributes.color)) &&
            (!this.checkAccessoryList.length ||
              this.checkAccessoryList.includes(item.attributes.accessoryType))
          )
        }) || []
      )
    },
  },
  created() {
    this.setDefault()
    this.getList()
  },
  methods: {
    onCopy() {
      Toast('复制成功 （Address copied）')
    },
    openMenu() {
      this.isShowFilter = true
      document.body.style.overflow = 'hidden'
    },
    closeMenu() {
      this.isShowFilter = false
      document.body.style.overflow = 'auto'
    },
    openFixed() {
      this.isShowFixed = true
    },
    closeFixed() {
      this.isShowFixed = false
    },
    setDefault() {
      this.checkCollectibleValueList = [
        this.attrs.CollectibleValueList[1].name,
        this.attrs.CollectibleValueList[3].name,
        this.attrs.CollectibleValueList[4].name,
      ]
      this.checkBreedList = [
        // this.attrs.BreedList[3].name,
        // this.attrs.BreedList[3].name
      ]
      this.checkColorList = [this.attrs.ColorList[0].name]
      const defaultAccessoryList = this.attrs.AccessoryList.map(
        (item) => item.name
      )
      defaultAccessoryList.pop()
      this.checkAccessoryList = defaultAccessoryList
    },
    async getList() {
      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: '正在加载数据',
      })
      let totalList = []
      let url = 'https://www.bakeryswap.org/api/v2/nfts'
      // 第一页
      const result = await axios.get(url, {
        params: {
          nftType: '104',
          offset: 0,
          limit: 500,
          sortName: 'price',
          sortBy: 'asc',
          onSale: 1,
        },
      })
      let pageCount = 0
      if (result.data.code === 0) {
        totalList = [...result.data.data.list]
        pageCount = Math.ceil(result.data.data.count / 500)
        if (pageCount === 1) {
          toast.clear()
        }
      } else {
        Toast('network busy, try it again')
        toast.clear()
      }
      // 第二页
      if (pageCount === 2) {
        const result2 = await axios.get(url, {
          params: {
            nftType: '104',
            offset: 500,
            limit: 500,
            sortName: 'price',
            sortBy: 'asc',
            onSale: 1,
            Breed: 'Pug',
          },
        })
        if (result2.data.code === 0) {
          totalList = [...totalList, ...result2.data.data.list]
          if (pageCount === 2) {
            toast.clear()
          }
        } else {
          Toast('network busy, try it again')
          toast.clear()
        }
      }
      // 第三页
      if (pageCount === 3) {
        const result3 = await axios.get(url, {
          params: {
            nftType: '104',
            offset: 1000,
            limit: 500,
            sortName: 'price',
            sortBy: 'asc',
            onSale: 1,
            Breed: 'Pug',
          },
        })
        if (result3.data.code === 0) {
          totalList = [...totalList, ...result3.data.data.list]
          if (pageCount === 2) {
            toast.clear()
          }
        } else {
          Toast('network busy, try it again')
          toast.clear()
        }
      }
      this.doggyList = totalList
    },
  },
}
</script>
<style lang="stylus">
.van-checkbox--horizontal {
  margin-bottom 12px
}
</style>
<style lang="stylus" scoped src="./doggyNFT.styl"></style>

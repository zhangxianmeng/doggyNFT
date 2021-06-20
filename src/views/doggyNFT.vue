<template>
  <div :class="isPC ? 'pc' : 'h5'">
    <div class="form-wrapper">
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
            <van-checkbox-group v-model="checkBreedList" direction="horizontal">
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
            <van-checkbox-group v-model="checkColorList" direction="horizontal">
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
        <van-field name="check" label="Price">
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
        </van-field>
      </div>
    </div>
    <div class="content">
      <p style="color: red">Total : {{ filterDoggyList.length }} Doggy NFTs</p>
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
                >{{ parseInt(Number(item.price) / 10000) }}万 Doggy</span
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
function isPC() {
  var userAgentInfo = navigator.userAgent
  var Agents = new Array(
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod'
  )
  var flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
export default {
  name: 'App',
  components: {},
  data() {
    return {
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

<style lang="stylus" scoped>
.van-radio--horizontal {
  margin-bottom 12px
}
.van-cell {
  background transparent
}
.doggy-list {
  .item {
    margin 0 auto
    width 300px
    background #fff
    border-radius 10px
    overflow hidden
    .pic {
      width 100%
      height 400px
      img {
        height 100%
      }
    }
    .title {
      line-height 22px
      overflow-y hidden
      font-family 'Baloo Da'
      font-weight bold
      font-size 22px
      color rgb(172, 86, 42)
      padding 10px
    }
    .attrs {
      padding 10px
      p {
        margin 5px 0
        display flex
        justify-content space-between
        color rgb(172, 86, 42)
        span {
          &:last-child {
            font-weight 600
          }
        }
      }
    }
  }
}
.pc {
  .form-wrapper {
    background rgb(255, 243, 224)
    position fixed
    left 0
    top 0
    width 100%
    .form {
      width 1260px
      margin 0 auto
    }
  }
  .content {
    padding-top 244px
    width 1260px
    margin 0 auto
  }
  .doggy-list {
    overflow hidden
    .item {
      float left
      margin-right 20px
      margin-bottom 20px
      &:nth-of-type(4n) {
        margin-right 0
      }
    }
  }
}
.no-data {
  margin-top 50px
  text-align center
}
</style>

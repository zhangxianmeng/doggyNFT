<template>
  <div :class="isPC ? 'pc' : 'h5'">
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
    </div>
    <p style="color: red">Total : {{ filterDoggyList.length }} Doggy NFTs</p>
    <div class="doggy-list" v-if="filterDoggyList.length">
      <div class="item" v-for="item in filterDoggyList" :key="item.id">
        <!-- <div class="pic">
          <img v-lazy="item.imageUrl" alt="" />
        </div> -->
        <div class="title">BARK # {{ item.nftId }}</div>
        <div class="attrs">
          <p>
            <!-- <span>Price:</span> -->
            <span>{{ parseInt(Number(item.price)/10000) }}万 </span>
          </p>
          <!-- <p>
            <span>Breed:</span>
            <span>{{ item.attributes.breed }} </span>
          </p>
          <p>
            <span>Color:</span>
            <span>{{ item.attributes.color }} </span>
          </p> -->
          <p>
            <!-- <span>rarity:</span> -->
            <span>{{ item.attributes.rarity }}级 </span>
          </p>
        </div>
      </div>
    </div>
    <div class="no-data" v-if="!filterDoggyList.length">
      <img src="../assets/no-data.svg" alt="" />
      <p>no-data</p>
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
            name: '30',
          },
          {
            name: '25',
          },
          {
            name: '20',
          },
          {
            name: '18',
          },
          {
            name: '15',
          },
          {
            name: '12',
          },
          {
            name: '9',
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
        this.doggyList.filter(item=>{
          return (!this.checkCollectibleValueList.length ||
              this.checkCollectibleValueList.includes(
                item.attributes.rarity
              ))
        })
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
        this.attrs.CollectibleValueList[0].name,
        this.attrs.CollectibleValueList[1].name,
        this.attrs.CollectibleValueList[2].name,
        this.attrs.CollectibleValueList[3].name,
        this.attrs.CollectibleValueList[4].name,
        this.attrs.CollectibleValueList[6].name,
      ]
    },
    getList() {
      // https://www.bakeryswap.org/api/v2/nfts?nftType=108&offset=0&limit=13&sortName=price&sortBy=asc&onSale=1&status=1&keyword=
      let url = 'https://www.bakeryswap.org/api/v2/nfts'
      axios
        .get(url, {
          params: {
            nftType: '108',
            offset: 0,
            limit: 500,
            sortName: 'price',
            sortBy: 'asc',
            onSale: 1,
            Breed: 'Pug',
          },
        })
        .then((res) => {
          if (res.data.code === 0) {
            this.doggyList = res.data.data.list
          } else {
            Toast('network busy, try it again')
          }
        })
    },
  },
}
</script>

<style lang="stylus" scoped>
body {
  background rgb(255, 243, 224)
}
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
        width 100%
        height 100%
      }
    }
    .title {
      line-height 22px
      height 44px
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
        margin 10px 0
        display flex
        justify-content space-between
        font-size 30px
        color red
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
  width 1260px
  margin 0 auto
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

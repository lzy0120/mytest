<template>
  <div class="zhibojian newPage">
    <Loading v-show="!zbjList"></Loading>
    <TopBar
      :title="topBarTitle"
    ></TopBar>
    <cube-scroll
      :data="zbjList"
    >
      <div class="item"
           v-for="(item, index) in zbjList"
           :key="index"
           @click="toCaseDetails(item.code)"
      >
        <div class="left">
          <img v-lazy="imgLink(item.imgUrl)" alt="">
        </div>
        <div class="right">
          <h3>{{item.name}}</h3>
          <p>{{item.city}} | {{item.houseName}} | {{item.acreage}}㎡</p>
          <p>{{item.juZhuangType}} | ￥{{item.totalPrice}}</p>
          <p>改造时间：{{item.decorationTime}}</p>
        </div>
      </div>
    </cube-scroll>
    <BottomLink></BottomLink>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data: () => ({
      zbjList: null,
      cityCode: 3101,
      topBarTitle: '厨卫直播间'
    }),
    created () {
      this.getZbjListData()
    },
    methods: {
      getZbjListData () {
        this.$axios({
          api: '/v2/icolor/wxma/lives',
          needToken: false,
          formData: {
            cityCode: this.cityCode
          }
        }).then(res => {
          this.zbjList = res.data
        })
      },
      imgLink (behindUrl) {
        return `https://www.icolor.com.cn${behindUrl}`
      },
      toCaseDetails (code) {
        this.$toPage(`/details/${code}`)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .zhibojian {
    padding :44px 0 60px
    .item {
      width: 90%
      margin: 12px 5%
      padding: 7px
      border: 1px solid #ddd
      border-radius: 4px
      display: flex
      justify-content: space-between
      align-content: center
      align-items: center
      .left {
        width: 2.8rem
        height: 2.1rem
      }
      .right {
        width: 3.5rem
        font-size: 12px
        margin-left: 10px
        h3 {
          font-size: 14px
          font-weight: bold
          margin-bottom: 12px
          no-wrap()
        }
        p {
          line-height: 1.8
          color: #a3a3a3
        }
      }
    }
  }

</style>

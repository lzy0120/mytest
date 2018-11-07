<template>
  <div class="detailsBox newPage">
    <TopBar
      :title="topBarTitle"
    ></TopBar>
    <cube-scroll
      :data="detailsData"
    >
      <template v-if="detailsData">
        <div class="swiper">
          <cube-slide ref="slide"
                      :data="detailsData.mainImageList"
                      v-bind="slideOptions"
          >
            <cube-slide-item
              v-for="(item, index) in detailsData.mainImageList"
              :key="index"
            >
              <img :src="imgLink(item.imageURL)">
            </cube-slide-item>
          </cube-slide>
        </div>
        <div class="description">
          <h3 class="descTitle">{{detailsData.name}}</h3>
          <span class="descProject">{{detailsData.city}}·{{detailsData.houseName}}</span>
          <span class="descProject">{{detailsData.acreage}}㎡·{{detailsData.juZhuangType}}</span>
          <span class="descProject">￥{{detailsData.totalPrice}}</span>
          <div class="appointment">
            <span class="descProject appProject">改造时间：{{detailsData.decorationTime}}</span>
            <a href="" class="appLink">立即预约</a>
          </div>
          <p class="descTxt">{{detailsData.description}}</p>
        </div>
        <Separation></Separation>
        <div class="material">
          <SmallTitle
            :title="titleArr[0]"
          ></SmallTitle>
          <cube-scroll
            ref="scroll"
            :data="detailsData.goodsDetails"
            direction="horizontal"
            class="horizontal-scroll-list-wrap">
            <ul class="list-wrapper">
              <li
                v-for="(item, index) in detailsData.goodsDetails"
                :key="index"
                class="list-item">
                <img :src="imgLink(item.thumbList[0].url)"
                     alt=""
                     class="horImg"
                >
                <p class="horDesc">{{item.name}}</p>
              </li>
            </ul>
          </cube-scroll>
        </div>
        <Separation></Separation>
        <div class="workBox">
          <div class="befWork">
            <SmallTitle
              :title="titleArr[1]"
            ></SmallTitle>
            <div class="swiper">
              <cube-slide ref="slide"
                          :data="detailsData.preDecorationImages"
                          :showDots="detailsData.preDecorationImages.length > 1"
                          v-bind="slideOptions"
              >
                <cube-slide-item
                  v-for="(item, index) in detailsData.preDecorationImages"
                  :key="index"
                >
                  <img :src="imgLink(item.imageURL)">
                  <p class="descWork">{{item.desc}}</p>
                </cube-slide-item>
              </cube-slide>
            </div>
          </div>
          <Separation></Separation>
          <div class="Working">
            <SmallTitle
              :title="titleArr[2]"
            ></SmallTitle>
            <div class="swiper">
              <cube-slide ref="slide"
                          :data="detailsData.inDecorationImages"
                          :showDots="detailsData.inDecorationImages.length > 1"
                          v-bind="slideOptions"
              >
                <cube-slide-item
                  v-for="(item, index) in detailsData.inDecorationImages"
                  :key="index"
                >
                  <img :src="imgLink(item.imageURL)">
                  <p class="descWork">{{item.desc}}</p>
                </cube-slide-item>
              </cube-slide>
            </div>
          </div>
          <Separation></Separation>
          <div class="aftWork">
            <SmallTitle
              :title="titleArr[3]"
            ></SmallTitle>
            <div class="swiper">
              <cube-slide ref="slide"
                          :data="detailsData.afterDecorationImages"
                          :showDots="detailsData.afterDecorationImages.length > 1"
                          v-bind="slideOptions"
              >
                <cube-slide-item
                  v-for="(item, index) in detailsData.afterDecorationImages"
                  :key="index"
                >
                  <img :src="imgLink(item.imageURL)">
                  <p class="descWork">{{item.desc}}</p>
                </cube-slide-item>
              </cube-slide>
            </div>
          </div>
        </div>
        <Separation></Separation>
      </template>
    </cube-scroll>
    <BottomLink></BottomLink>
  </div>
</template>

<script>
  export default {
    name: 'Details',
    data: () => ({
      detailsData: null,
      cityCode: '3101',
      topBarTitle: '精选案例',
      titleArr: [
        '物料明细',
        '施工前',
        '施工中',
        '施工后'
      ],
      slideOptions: {
        loop: false,
        autoPlay: false
      }
    }),
    created () {
      this.getCaseData()
    },
    methods: {
      getCaseData () {
        let code = this.$getRouteParams().code
        this.$axios({
          api: `/v2/icolor/wxma/lives/${code}`,
          needToken: false,
          formData: {
            cityCode: this.cityCode
          }
        }).then(res => {
          this.detailsData = res
        })
      },
      imgLink (behindUrl) {
        return `https://www.icolor.com.cn${behindUrl}`
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .detailsBox {
    padding: 44px 0 60px
    .workBox {
      .descWork {
        font-size: 14px
        line-height: 18px
        height: 64px
        margin: 12px 15px 0
        padding-bottom: 10px
        white-space: normal
      }
    }
    .description {
      width: 90%
      margin: 20px auto 0
      font-size: 10px
      color: #a3a3a3
      .descTitle {
        font-size: 14px
        font-weight: bold
        color: #000
      }
      .descProject {
        display: inline-block
        border: 1px solid #a3a3a3
        margin: 10px 10px 0 0
        padding: 5px
      }
      .appointment {
        display: flex
        justify-content: space-between
        align-items: center
        margin-top: 10px
        .appProject {
          margin: 0
        }
        .appLink {
          font-size: 14px
          color: #fff
          background: #ffab46
          line-height: 26px
          border-radius: 6px
          padding: 0 8px
        }
      }
      .descTxt {
        margin: 10px 0
        font-size: 12px
        color: #a3a3a3
        line-height: 1.2
      }
    }
    .material {
      .horizontal-scroll-list-wrap {
        /deep/ .cube-scroll-content {
          display: inline-block
          .list-wrapper {
            padding: 0 15px
            white-space: nowrap
            .list-item {
              display: inline-block
              margin-right: 15px
              .horImg {
                width: 100px
                height: 100px
                border: 1px solid #ddd
                box-shadow: -2px 2px 10px #dddcdc
              }
              .horDesc {
                font-size: 12px
                margin-top: 10px
                text-align: center
                no-wrap()
              }
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="detailsBox newPage">
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
        <h3 class="descTitle">黄浦区陆家浜卫浴改造</h3>
        <span class="descProject">上海·阳光翠竹苑</span>
        <span class="descProject">4.5㎡·卫浴</span>
        <span class="descProject">￥44700</span>
        <div class="appointment">
          <span class="descProject appProject">改造时间：2017-08-13</span>
          <a href="" class="appLink">立即预约</a>
        </div>
        <p class="descTxt">“将原本昏暗、杂乱的卫生间改造成明亮、整齐的现代卫浴空间；干湿分离,安全方便,采用智能卫浴,引领洗浴生活新方式”</p>
      </div>
      <div class="separation"></div>
      <div class="material">
        <SmallTitle
          :title="titleArr[0]"
        ></SmallTitle>
        <ul class="meterialBox">
          <li class="item">
            <img src="" alt="">
            <p>科勒 · 座便器</p>
          </li>
          <li class="item">
            <img src="" alt="">
            <p>科勒 · 座便器</p>
          </li>
          <li class="item">
            <img src="" alt="">
            <p>科勒 · 座便器</p>
          </li>
          <li class="item">
            <img src="" alt="">
            <p>科勒 · 座便器</p>
          </li>
          <li class="item">
            <img src="" alt="">
            <p>科勒 · 座便器</p>
          </li>
          <li class="item">
            <img src="" alt="">
            <p>科勒 · 座便器</p>
          </li>
        </ul>
      </div>
      <div class="separation"></div>
      <div class="workBox">
        <div class="befWork">
          <SmallTitle
            :title="titleArr[1]"
          ></SmallTitle>
          <div class="swiper">
            <cube-slide ref="slide"
                        :data="detailsData.preDecorationImages"
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
        <div class="separation"></div>
        <div class="Working">
          <SmallTitle
            :title="titleArr[2]"
          ></SmallTitle>
          <div class="swiper">
            <cube-slide ref="slide"
                        :data="detailsData.inDecorationImages"
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
        <div class="separation"></div>
        <div class="aftWork">
          <SmallTitle
            :title="titleArr[3]"
          ></SmallTitle>
          <div class="swiper">
            <cube-slide ref="slide"
                        :data="detailsData.afterDecorationImages"
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
      <p>fshee</p>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'Details',
    data: () => ({
      detailsData: null,
      cityCode: '3101',
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
    .separation {
      height: 12px
      background: #ddd
    }
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
        margin-top: 10px
        font-size: 12px
        color: #a3a3a3
        line-height: 1.2
      }
    }
    .material {
      .meterialBox {
        font-size: 0
        .item {
          display: inline-block
          font-size: 12px
          text-align: center
        }
      }
    }
  }
</style>

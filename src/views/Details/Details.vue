<template>
  <div class="detailsBox">
    <div class="detaImg">
      <img src="" alt="">
    </div>
    <div class="description">
      <h3>黄浦区陆家浜卫浴改造</h3>
      <span>上海·阳光翠竹苑</span>
      <span>4.5㎡·卫浴</span>
      <span>￥44700</span>
      <div class="appointment">
        <span>改造时间：2017-08-13</span>
        <a href="">立即预约</a>
      </div>
      <p>“将原本昏暗、杂乱的卫生间改造成明亮、整齐的现代卫浴空间；干湿分离,安全方便,采用智能卫浴,引领洗浴生活新方式”</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Details',
    data: () => ({
      detailsData: null,
      cityCode: '3101'
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
          this.detalisData = res
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .detailsBox {
    .dataImg {
      width: 100%
    }
    .description {
      width :90%
      margin :20px auto 0
      font-size: 10px
      color: #a3a3a3
      h3 {
        font-size: 14px
        font-weight: bold
        color: #000
      }
      span {
        display: inline-block
        border: 1px solid #ddd
        margin: 10px 10px 0 0
        padding: 5px
      }
      .appointment {
        display: flex
        justify-content: space-between
        align-items: center
        margin-top: 10px
        span {
          margin: 0
        }
        a {
          font-size: 14px
          color: #fff
          background: #ffab46
          line-height: 26px
          border-radius: 6px
          padding: 0 5px
        }
      }
      p {
        margin-top: 10px
        font-size: 12px
        color: #a3a3a3
      }
    }
  }
</style>

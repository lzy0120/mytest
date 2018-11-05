<template>
  <div class="MessagePopup" v-show="messagePopupState">
    <div class="mask" @click="closePopup"></div>
    <div class="MessagePopup-content">
      <div class="icon"
           :class="messagePopupOptions.iconCls"
           v-if="messagePopupOptions.iconCls"
      ></div>
      <p class="text"
         v-if="messagePopupOptions.text"
      >{{messagePopupOptions.text}}</p>
      <div class="btns" v-if="messagePopupOptions.btns">
        <a href="javascript:;"
           v-for="(item, index) in messagePopupOptions.btns"
           :key="index"
           :class="item.cls"
           @click="clickThis(item.callback)"
        >{{item.text}}</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'message-popup',
    computed: {
      ...mapGetters([
        'messagePopupState',
        'messagePopupOptions'
      ])
    },
    methods: {
      // 传入的点击事件
      clickThis (callback) {
        if (callback) {
          callback()
        }
        this.close()
      },
      // 关闭交互窗口（遮罩层关闭，有按钮的情况下无效）
      closePopup () {
        let btns = this.messagePopupOptions.btns
        if (btns && btns.length > 0) {
          return
        }
        this.close()
      },
      // 关闭交互窗口
      close () {
        this.setMessagePopupState(false)
      },
      ...mapMutations({
        setMessagePopupState: 'SET_MESSAGE_POPUP_STATE'
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .MessagePopup {
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 99
    .mask {
      height: 100%
      background: $color-mask
    }
    &-content {
      position: absolute
      left: 50%
      top: 50%
      width: 280px
      border-radius: $radius-normal
      background: #fff
      overflow: hidden
      transform: translate(-50%, -50%)
    }
    .icon {
      margin: $margin-normal auto 0
      width: 46px
      height: 46px
      background: url("./messageBox-icons.png") no-repeat 0 0 / 190px auto
      &.error {
        background-position-x: 0 !important
      }
      &.sure {
        background-position-x: -47px !important
      }
      &.warning {
        background-position-x: -94px !important
      }
      &.doubt {
        background-position-x: -141px !important
      }
    }
    .text {
      padding: $margin-normal
      font-size: $font-text-normal
      color: $color-text
      text-align: center
    }
    .btns {
      display: flex
      align-items: center
      justify-content: space-between
      a {
        flex: 1
        width: 100%
        font-size: $font-text-large
        font-weight: 700
        color: #fff
        text-align: center
        line-height: 40px
        &.cancel {
          background: #333
        }
        &.sure {
          background: $color-main
        }
      }
    }
  }
</style>

<template>
  <div class="bottom-link">
    <a href="" class="link-btn">立即预约，免费上门服务</a>
  </div>
</template>

<script>
  export default {
    name: 'BottomLink'
  }
</script>

<style lang="stylus" scoped>
  .bottom-link {
    height: 60px
    border-top: 1px solid #ddd
    background: #fff
    position: fixed
    bottom: 0
    left: 0
    right: 0
    z-index: 99
    .link-btn {
      display: block
      width: 90%
      margin: 12px 5%
      text-align: center
      background: $color-main
      border-radius: $radius-normal
      font-size: $font-text-large
      line-height: 36px
      color: #fff
    }
  }
</style>

<template>
  <div class="top-bar">
    <button type="button" class="top-back"></button>
    <img src="./logo.png" alt="" class="top-img">
    <h2 class="top-txt">adgsagb</h2>
  </div>
</template>

<script>
  export default {
    name: 'TopBar',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .top-bar {
    border-bottom: 1px solid $color-main
    height: 44px
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index: 99
    background: #fff
    display: flex
    justify-content: center
    align-items: center
    .top-back {
      width: 42px
      height: 42px
      background: $color-main
      position: absolute
      left: 0
      top: 0
    }
    .top-img {
      width: 68px
    }
    .top-txt {
      font-size: 22px
    }
  }
</style>

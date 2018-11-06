<template>
  <div class="top-bar">
    <button type="button" class="back">◀</button>
    <div class="top-title">
      <h2 class="top-img"><img src="" alt=""></h2>
      <span class="top-txt">{{title}}</span>
    </div>
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
    font-size :0
    .back {
      color: #ddd
      font-size: 30px
      margin-left :12px
      display: inline-block
    }
    .top-title {
      display: flex
      justify-content: center
    }
  }
</style>

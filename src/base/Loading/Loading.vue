<template>
  <div class="loading-box">
    <cube-loading :size="40"></cube-loading>
  </div>
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<style lang="stylus" scoped>
.loading-box{
  position: fixed
  top: 50%
  left: 0
  right: 0
  transform: translateY(-50%)
  /deep/ .cube-loading-spinners {
    margin: 0 auto
  }
}
</style>

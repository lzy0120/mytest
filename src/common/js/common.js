import { debug, prefixUrl } from 'api/config'

// 获取路由传递的参数
function getRouteParams () {
  return this.$route.params
}

// 发送请求信息提示
function requestTips (message = '请求提交中，请稍候...', duration = 0) {
  this.$easyToast.use({
    message,
    duration
  })
}

// 关闭发送请求信息提示
function requestTipsClose () {
  this.$easyToast.close()
}

/*
* 页面跳转
* path：传入路径
* */
function toPage (path) {
  if (!path) {
    return
  }
  this.$router.push({
    path
  })
}

/*
* 配置接口链接
* url：传入非代理前缀的接口地址
* */
function apiUrl (url) {
  return debug ? url : `${prefixUrl}${url}`
}

export {
  getRouteParams,
  requestTips,
  requestTipsClose,
  toPage,
  apiUrl
}

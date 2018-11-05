// 当前是否开发环境
let debug = process.env.NODE_ENV !== 'production'

// 图片链接前缀
let imgUrl = 'https://www.icolor.com.cn'

// 线上API前缀
let prefixUrl = 'https://test2.icolor.com.cn/api'

// 初始加载页数
let currentPage = 0

let pageSize = 10

export {
  debug,
  imgUrl,
  prefixUrl,
  currentPage,
  pageSize
}

// 判断是否有该className
function hasClass (el, className) {
  return el.classList.contains(className)
}

// 增加className
function addClass (el, className) {
  return el.classList.add(className)
}

// 删除className
function removeClass (el, className) {
  return el.classList.remove(className)
}

function toggleClass (el, className) {
  return el.classList.toggle(className)
}

// 用于获取url参数
function getQueryString (name, target = window.location.search.substr(1)) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let r = target.match(reg)
  if (r != null) return unescape(r[2])
  return ''
}

// 获取vuex中key值中的value
function getVuex (key) {
  let data = getSession('__shigongguanjia__')
    ? JSON.parse(getSession('__shigongguanjia__'))
    : ''
  return data ? data[key] : ''
}

// 获取&存储sessionStorage
function getSession (key, val) {
  if (!val) {
    return sessionStorage.getItem(key)
  } else {
    return sessionStorage.setItem(key, val)
  }
}

// 获取&存储localStorage
function getLocalStorage (key, val) {
  if (!val) {
    return localStorage.getItem(key)
  } else {
    return localStorage.setItem(key, val)
  }
}

// TabBar根据激活项查找索引值
function findIndex (ary, fn) {
  if (ary.findIndex) {
    return ary.findIndex(fn)
  }
  /* istanbul ignore next */
  let index = -1
  /* istanbul ignore next */
  ary.some(function (item, i, ary) {
    const ret = fn.call(this, item, i, ary)
    if (ret) {
      index = i
      return ret
    }
  })
  /* istanbul ignore next */
  return index
}

let weekArray = [
  '星期天',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六'
]

// 返回年月日星期
function formatDate (nowTime = new Date()) {
  nowTime = new Date(nowTime)
  let year = nowTime.getFullYear()
  let month = nowTime.getMonth() + 1 < 10
    ? '0' + (nowTime.getMonth() + 1)
    : nowTime.getMonth() + 1
  let day = nowTime.getDate() < 10
    ? '0' + nowTime.getDate()
    : nowTime.getDate()
  let weekDay = weekArray[nowTime.getDay()]
  return {
    year,
    month,
    day,
    weekDay
  }
}

export {
  hasClass,
  addClass,
  removeClass,
  toggleClass,
  getQueryString,
  getVuex,
  getSession,
  getLocalStorage,
  findIndex,
  formatDate
}

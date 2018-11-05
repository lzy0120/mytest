import axios from 'axios'
import { debug } from './config'
import { getVuex } from 'common/js/util'

/*
* axios数据请求
* type: 请求方式
* api: 请求地址
* fromData: 传递的参数
* router: 使用的代理地址（见vue.config.js → devServer → proxy）
* needToken: 是否需要在请求中带上Token
* */
const axiosHttp = (
  {
    api,
    formData,
    type = 'get',
    router = '/api',
    needToken = true
  }
) => {
  // 这里可以加上全局platformKey（Token）
  formData = Object.assign({}, formData, {
    // platformKey
  })
  api = debug ? router + api : api
  type = type ? type.toLowerCase() : type
  // 请求头需带上token
  if (needToken) {
    let { token } = getVuex('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  if (type === 'post') {
    return axios.post(api, formData, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        return Promise.resolve(res.data)
      })
  } else {
    // 避免缓存
    formData.timeStamp = new Date().getTime()
    return axios[type || 'get'](api, { params: formData })
      .then((res) => {
        return Promise.resolve(res.data)
      })
  }
}

export {
  axiosHttp
}

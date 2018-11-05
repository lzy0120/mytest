import Vue from 'vue'

import * as commonFunction from './common'
import { axiosHttp } from 'api/axiosHttp'

// 全局方法
Vue.prototype.$axios = axiosHttp
Vue.prototype.$getRouteParams = commonFunction.getRouteParams
Vue.prototype.$requestTips = commonFunction.requestTips
Vue.prototype.$requestTipsClose = commonFunction.requestTipsClose
Vue.prototype.$apiUrl = commonFunction.apiUrl
Vue.prototype.$toPage = commonFunction.toPage

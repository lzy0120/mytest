import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 公共样式引入
import 'common/css/common.styl'

// 部分BUG修复
import 'common/js/fixProblem'

// 公共方法&组件引入
import 'common/js/global-functions'
import 'common/js/global-components'
import 'common/js/global-mixin'

// 插件引入
// import 'plugins/v-console'
import 'plugins/vue-lazyload'
import 'plugins/fastclick'
import 'plugins/cube-ui'
import 'plugins/leiang-easy-toast'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

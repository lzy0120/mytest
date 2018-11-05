import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import loading from 'assets/loading.jpg'

Vue.use(VueLazyload, {
  preLoad: 1.1,
  loading: loading,
  error: loading
})

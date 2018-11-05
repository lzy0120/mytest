import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersist from 'plugins/vuex-persist'
import createLogger from 'vuex/dist/logger'
import { debug } from 'api/config'

import messagePopup from './store/messagePopup/index'
import token from './store/token/index'
import constructionOrder from './store/constructionOrder/index'
import goodsPopup from './store/goodsPopup/index'

const logger = createLogger()
const vuexPersistPlugin = vuexPersist.plugin
const vuexPlugins = debug ? [vuexPersistPlugin, logger] : [vuexPersistPlugin]

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    messagePopup,
    token,
    constructionOrder,
    goodsPopup
  },
  plugins: vuexPlugins
})
